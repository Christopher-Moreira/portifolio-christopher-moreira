import Image from "next/image";
import type { CertificateFile } from "../lib/certificates";

const imageExtensions = ["png", "jpg", "jpeg", "webp", "gif"];

type CertificateCardLabels = {
  openCertificate: string;
  openImage: string;
};

function CertificatePreview({
  file,
  labels,
}: {
  file: CertificateFile;
  labels: CertificateCardLabels;
}) {
  if (imageExtensions.includes(file.extension)) {
    return (
      <a className="certificate-image-preview" href={file.href} target="_blank" rel="noreferrer">
        <Image
          alt={file.title}
          className="certificate-image"
          height={900}
          src={file.href}
          width={1200}
        />
        <small>{labels.openImage}</small>
      </a>
    );
  }

  return (
    <a className="certificate-file certificate-pdf-card" href={file.href} target="_blank" rel="noreferrer">
      <span>{file.extension}</span>
      <strong>{file.title}</strong>

    </a>
  );
}

export function CertificateCard({
  file,
  labels,
}: {
  file: CertificateFile;
  labels: CertificateCardLabels;
}) {
  return (
    <article className="certificate-card">
      <CertificatePreview file={file} labels={labels} />
      <div className="certificate-body">
        <h2>{file.title}</h2>
        <a href={file.href} target="_blank" rel="noreferrer">
          {labels.openCertificate}
        </a>
      </div>
    </article>
  );
}
