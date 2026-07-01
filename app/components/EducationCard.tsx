type EducationCardProps = {
  degree: string;
  institution: string;
  label: string;
};

export function EducationCard({ degree, institution, label }: EducationCardProps) {
  return (
    <article className="torn-card bg-[var(--card)] p-6 text-[var(--neutral)]">
      <p className="label-strip w-fit">{label}</p>
      <h2 className="mt-6 text-3xl font-black uppercase text-[var(--neutral)]">
        {degree}
      </h2>
      <p className="mt-3 text-lg font-bold">
        {institution}
      </p>
    </article>
  );
}
