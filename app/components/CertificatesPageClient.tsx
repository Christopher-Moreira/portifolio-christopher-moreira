"use client";

import Link from "next/link";
import type { CertificateGroup } from "../lib/certificates";
import { Language, Topbar } from "./Topbar";
import { usePersistedLanguage } from "./usePersistedLanguage";

type CertificatesPageClientProps = {
  groups: CertificateGroup[];
};

const translations = {
  pt: {
    contact: "Contato",
    markAriaLabel: "Início",
    navAriaLabel: "Navegação principal",
    title: "Biblioteca de Certificados",
    certificateSingular: "certificado",
    certificatePlural: "certificados",
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
    title: "Certificate Library",
    certificateSingular: "certificate",
    certificatePlural: "certificates",
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
    title: string;
    certificateSingular: string;
    certificatePlural: string;
    nav: { label: string; href: string }[];
  }
>;

export function CertificatesPageClient({ groups }: CertificatesPageClientProps) {
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
          <h1 className="mt-6 max-w-5xl text-[clamp(2.75rem,8vw,6rem)] font-black uppercase leading-[0.88] text-[var(--neutral)]">
            {copy.title}
          </h1>
        </div>
      </section>

      <section className="px-6 py-14 sm:px-8 lg:px-10">
        <div className="certificate-modules mx-auto max-w-7xl">
          {groups.length > 0 ? (
            <div className="certificate-module-grid">
              {groups.map((group) => (
                <Link className="certificate-module-card" href={group.href} key={group.href}>
                  <span>{group.name}</span>
                  <strong>
                    {group.totalFiles}{" "}
                    {group.totalFiles === 1
                      ? copy.certificateSingular
                      : copy.certificatePlural}
                  </strong>
                </Link>
              ))}
            </div>
          ) : (
            <article className="certificate-empty"></article>
          )}
        </div>
      </section>
    </main>
  );
}
