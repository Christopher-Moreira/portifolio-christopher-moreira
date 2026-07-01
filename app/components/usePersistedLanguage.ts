"use client";

import { useEffect, useSyncExternalStore } from "react";
import type { Language } from "./Topbar";

const COOKIE_NAME = "preferred_language";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

let currentLanguage: Language = "pt";
const listeners = new Set<() => void>();

function isLanguage(value: string | undefined): value is Language {
  return value === "pt" || value === "en";
}

function readLanguageCookie() {
  if (typeof document === "undefined") {
    return undefined;
  }

  const cookie = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${COOKIE_NAME}=`));

  const value = cookie?.split("=").at(1);

  return isLanguage(value) ? value : undefined;
}

function writeLanguageCookie(language: Language) {
  document.cookie = `${COOKIE_NAME}=${language}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
}

function applyDocumentLanguage(language: Language) {
  document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
}

function subscribe(listener: () => void) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot() {
  return currentLanguage;
}

function getServerSnapshot() {
  return "pt" as Language;
}

function publishLanguage(language: Language) {
  currentLanguage = language;
  listeners.forEach((listener) => listener());
}

export function usePersistedLanguage() {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    const cookieLanguage = readLanguageCookie();
    const nextLanguage = cookieLanguage ?? currentLanguage;

    if (nextLanguage !== currentLanguage) {
      publishLanguage(nextLanguage);
    }

    applyDocumentLanguage(nextLanguage);
  }, []);

  function setLanguage(language: Language) {
    publishLanguage(language);
    writeLanguageCookie(language);
    applyDocumentLanguage(language);
  }

  return [language, setLanguage] as const;
}
