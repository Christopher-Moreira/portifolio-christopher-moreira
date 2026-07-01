import { CertificatesPageClient } from "../components/CertificatesPageClient";
import { certificateDirectoryExists, getCertificateGroups } from "../lib/certificates";

export const metadata = {
  title: "Certificados | Christopher Moreira",
  description: "Certificados de Christopher Moreira separados por pastas.",
};

export default function CertificatesPage() {
  const groups = certificateDirectoryExists() ? getCertificateGroups() : [];

  return <CertificatesPageClient groups={groups} />;
}
