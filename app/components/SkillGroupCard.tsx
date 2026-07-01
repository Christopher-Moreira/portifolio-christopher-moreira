type SkillGroupCardProps = {
  group: {
    title: string;
    items: string[];
  };
  index: number;
};

export function SkillGroupCard({ group, index }: SkillGroupCardProps) {
  return (
    <article
      className={`skill-group-card torn-card bg-[var(--card-muted)] p-5 text-[var(--neutral)] ${
        index === 1 ? "md:translate-y-8" : ""
      }`}>
      <h2 className="text-2xl font-black uppercase text-[var(--neutral)]">
        {group.title}
      </h2>
      <div className="mt-5 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span className="skill-tag" key={item}>
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

type SkillGroupCardsProps = {
  skillGroups: SkillGroupCardProps["group"][];
};

export function SkillGroupCards({ skillGroups }: SkillGroupCardsProps) {
  return (
    <>
      {skillGroups.map((group, index) => (
        <SkillGroupCard group={group} index={index} key={group.title} />
      ))}
    </>
  );
}
