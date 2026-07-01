import { notFound } from "next/navigation";
import { CertificateGroupPageClient } from "../../components/CertificateGroupPageClient";
import {
  getCertificateGroup,
  getCertificateFiles,
  getCertificateGroups,
} from "../../lib/certificates";

type PageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export function generateStaticParams() {
  return getCertificateGroups().map((group) => ({
    slug: group.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const group = getCertificateGroup(slug);

  if (!group) {
    return {
      title: "Certificados | Christopher Moreira",
    };
  }

  return {
    title: `${group.path.join(" / ")} | Certificados`,
    description: `Certificados da pasta ${group.path.join(" / ")}.`,
  };
}

export default async function CertificateGroupPage({ params }: PageProps) {
  const { slug } = await params;
  const group = getCertificateGroup(slug);

  if (!group) {
    notFound();
  }

  const files = getCertificateFiles(group);

  return <CertificateGroupPageClient files={files} group={group} />;
}
