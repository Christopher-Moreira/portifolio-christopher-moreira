import { readdirSync, statSync } from "node:fs";
import path from "node:path";

export type CertificateFile = {
  name: string;
  title: string;
  extension: string;
  href: string;
  folder: string[];
};

export type CertificateGroup = {
  name: string;
  path: string[];
  slug: string[];
  href: string;
  files: CertificateFile[];
  children: CertificateGroup[];
  totalFiles: number;
};

const CERTIFICATES_DIR = path.join(process.cwd(), "public", "certificados");

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function titleFromFile(fileName: string) {
  return fileName
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function publicHref(parts: string[]) {
  return `/${["certificados", ...parts].map(encodeURIComponent).join("/")}`;
}

function routeHref(slug: string[]) {
  return `/certificados/${slug.map(encodeURIComponent).join("/")}`;
}

function readGroup(relativePath: string[] = [], relativeSlug: string[] = []): CertificateGroup {
  const directory = path.join(CERTIFICATES_DIR, ...relativePath);
  const entries = readdirSync(directory, { withFileTypes: true }).sort((a, b) =>
    a.name.localeCompare(b.name, "pt-BR"),
  );

  const files = entries
    .filter((entry) => entry.isFile())
    .map((entry) => {
      const extension = path.extname(entry.name).slice(1).toLowerCase();

      return {
        name: entry.name,
        title: titleFromFile(entry.name),
        extension,
        href: publicHref([...relativePath, entry.name]),
        folder: relativePath,
      };
    });

  const children = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => readGroup([...relativePath, entry.name], [...relativeSlug, slugify(entry.name)]));

  const totalFiles =
    files.length + children.reduce((total, child) => total + child.totalFiles, 0);

  return {
    name: relativePath.at(-1) ?? "Certificados",
    path: relativePath,
    slug: relativeSlug,
    href: relativeSlug.length ? routeHref(relativeSlug) : "/certificados",
    files,
    children,
    totalFiles,
  };
}

export function getCertificateRoot() {
  return readGroup();
}

export function getCertificateGroups() {
  return getCertificateRoot().children.filter((group) => group.totalFiles > 0);
}

export function getCertificateGroup(slug: string[]) {
  return getCertificateGroups().find((group) => group.slug.join("/") === slug.join("/"));
}

export function getCertificateFiles(group: CertificateGroup) {
  const files: CertificateFile[] = [...group.files];

  function collect(childGroup: CertificateGroup) {
    files.push(...childGroup.files);
    childGroup.children.forEach(collect);
  }

  group.children.forEach(collect);

  return files.sort((a, b) => {
    const folderComparison = a.folder.join("/").localeCompare(b.folder.join("/"), "pt-BR");

    if (folderComparison !== 0) {
      return folderComparison;
    }

    return a.title.localeCompare(b.title, "pt-BR");
  });
}

export function certificateDirectoryExists() {
  try {
    return statSync(CERTIFICATES_DIR).isDirectory();
  } catch {
    return false;
  }
}
