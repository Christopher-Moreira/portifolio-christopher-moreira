type HighlightCardProps = {
  children: string;
};

export function HighlightCard({ children }: HighlightCardProps) {
  return <p className="note-card">{children}</p>;
}

type HighlightCardsProps = {
  highlights: string[];
};

export function HighlightCards({ highlights }: HighlightCardsProps) {
  return (
    <div className="space-y-3">
      {highlights.map((highlight) => (
        <HighlightCard key={highlight}>{highlight}</HighlightCard>
      ))}
    </div>
  );
}
