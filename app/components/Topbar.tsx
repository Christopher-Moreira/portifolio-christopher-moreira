"use client";

import Link from "next/link";

export type Language = "pt" | "en";

type TopbarProps = {
  contactLabel?: string;
  language?: Language;
  markAriaLabel?: string;
  navAriaLabel?: string;
  navItems?: {
    label: string;
    href: string;
  }[];
  onLanguageChange?: (language: Language) => void;
};

const defaultNavItems = [
  { label: "Resumo", href: "/#resumo" },
  { label: "Techs", href: "/#techs" },
  { label: "Trampos", href: "/#experiencia" },
  { label: "Certificados", href: "/certificados" },
];

export function Topbar({
  contactLabel = "Contato",
  language = "pt",
  markAriaLabel = "Inicio",
  navAriaLabel = "Navegacao principal",
  navItems = defaultNavItems,
  onLanguageChange,
}: TopbarProps) {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Link className="topbar-mark" href="/" aria-label={markAriaLabel}>
          <span>CHRIS</span>
          <span> </span>
          <span>MOREIRA</span>
        </Link>
        <nav aria-label={navAriaLabel} className="topbar-nav">
          {navItems.map((item) => (
            <Link className="topbar-link" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        {onLanguageChange ? (
          <div className="language-switch" aria-label="Language">
            <button
              aria-pressed={language === "pt"}
              className="language-switch-option"
              onClick={() => onLanguageChange("pt")}
              type="button"
            >
              PT
            </button>
            <button
              aria-pressed={language === "en"}
              className="language-switch-option"
              onClick={() => onLanguageChange("en")}
              type="button"
            >
              EN
            </button>
          </div>
        ) : null}
        <a className="topbar-contact" href="mailto:christophermoreira.dev@gmail.com">
          {contactLabel}
        </a>
      </div>
    </header>
  );
}
