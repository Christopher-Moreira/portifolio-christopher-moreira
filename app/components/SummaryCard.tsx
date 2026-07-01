type SummaryCardProps = {
  children: string;
};

export function SummaryCard({ children }: SummaryCardProps) {
  return (
    <article className="torn-card bg-[var(--card)] p-6 text-[var(--neutral)]">
      <p className="text-lg font-bold leading-8">
        {children}
      </p>
    </article>
  );
}
