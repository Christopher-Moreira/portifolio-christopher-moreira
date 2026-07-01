type LanguageCardProps = {
  label: string;
  languages: string[];
};

export function LanguageCard({ label, languages }: LanguageCardProps) {
  return (
    <article className="torn-card bg-[var(--card)] p-6 text-[var(--neutral)]">
      <p className="label-strip w-fit">{label}</p>
      <div className="mt-6 space-y-1">
        {languages.map((language) => (
          <p className="font-bold" key={language}>
            {language}
          </p>
        ))}
      </div>
    </article>
  );
}
