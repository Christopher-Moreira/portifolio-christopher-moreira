"use client";

import Link from "next/link";
import type { CertificateFile, CertificateGroup } from "../lib/certificates";
import { CertificateCard } from "./CertificateCard";
import { Language, Topbar } from "./Topbar";
import { usePersistedLanguage } from "./usePersistedLanguage";

type CertificateGroupPageClientProps = {
  files: CertificateFile[];
  group: CertificateGroup;
};

const translations = {
  pt: {
    contact: "Contato",
    markAriaLabel: "Inicio",
    navAriaLabel: "Navegacao principal",
    backToGroups: "Voltar aos grupos",
    filesTitle: "Arquivos",
    noFilesTitle: "Sem arquivos",
    noFilesDescription: "Esta pasta ainda nao possui certificados.",
    openCertificate: "Abrir certificado",
    openImage: "Abrir imagem",
    nav: [
      { label: "Resumo", href: "/#resumo" },
      { label: "Techs", href: "/#techs" },
      { label: "Trampos", href: "/#experiencia" },
      { label: "Certificados", href: "/certificados" },
    ],
  },
  en: {
    contact: "Contact",
    markAriaLabel: "Home",
    navAriaLabel: "Main navigation",
    backToGroups: "Back to groups",
    filesTitle: "Files",
    noFilesTitle: "No files",
    noFilesDescription: "This folder does not have certificates yet.",
    openCertificate: "Open certificate",
    openImage: "Open image",
    nav: [
      { label: "Summary", href: "/#resumo" },
      { label: "Techs", href: "/#techs" },
      { label: "Work", href: "/#experiencia" },
      { label: "Certificates", href: "/certificados" },
    ],
  },
} satisfies Record<
  Language,
  {
    contact: string;
    markAriaLabel: string;
    navAriaLabel: string;
    backToGroups: string;
    filesTitle: string;
    noFilesTitle: string;
    noFilesDescription: string;
    openCertificate: string;
    openImage: string;
    nav: { label: string; href: string }[];
  }
>;

export function CertificateGroupPageClient({
  files,
  group,
}: CertificateGroupPageClientProps) {
  const [language, setLanguage] = usePersistedLanguage();
  const copy = translations[language];

  return (
    <main className="min-h-[100dvh] bg-[var(--background)] text-[var(--foreground)]">
      <Topbar
        contactLabel={copy.contact}
        language={language}
        markAriaLabel={copy.markAriaLabel}
        navAriaLabel={copy.navAriaLabel}
        navItems={copy.nav}
        onLanguageChange={setLanguage}
      />

      <section className="border-b-[3px] border-[var(--tertiary)] px-6 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Link className="button-secondary" href="/certificados">
            {copy.backToGroups}
          </Link>
          <h1 className="mt-7 max-w-5xl text-[clamp(2.5rem,7vw,5.5rem)] font-black uppercase leading-[0.9] text-[var(--neutral)]">
            {group.name}
          </h1>
        </div>
      </section>

      <section className="px-6 py-14 sm:px-8 lg:px-10">
        <div className="certificate-modules mx-auto max-w-7xl">
          {files.length > 0 ? (
            <div className="certificate-module">
              <div className="certificate-module-header">
                <h2>{copy.filesTitle}</h2>
              </div>
              <div className="certificate-grid">
                {files.map((file) => (
                  <CertificateCard
                    file={file}
                    key={file.href}
                    labels={{
                      openCertificate: copy.openCertificate,
                      openImage: copy.openImage,
                    }}
                  />
                ))}
              </div>
            </div>
          ) : (
            <article className="certificate-empty">
              <h2>{copy.noFilesTitle}</h2>
              <p>{copy.noFilesDescription}</p>
            </article>
          )}
        </div>
      </section>
    </main>
  );
}
