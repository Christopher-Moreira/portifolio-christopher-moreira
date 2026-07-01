type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  technologies: string;
  summary: string;
  bullets: string[];
};

type ExperienceCardProps = {
  experience: Experience;
  index: number;
  technologiesLabel: string;
};

export function ExperienceCard({
  experience,
  index,
  technologiesLabel,
}: ExperienceCardProps) {
  return (
    <article
      className={`experience-card torn-card ${
        index % 2 === 0 ? "lg:mr-16" : "lg:ml-16"
      }`}
    >
      <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-black uppercase text-[var(--neutral)]">
            {experience.period}
          </p>
          <h3 className="mt-2 text-3xl font-black uppercase leading-none text-[var(--neutral)]">
            {experience.role}
          </h3>
          <p className="mt-2 text-xl font-black">{experience.company}</p>
          <p className="mt-1 text-sm font-bold">{experience.location}</p>
          <p className="mt-5 text-base font-extrabold leading-7">
            {experience.summary}
          </p>
          <p className="mt-5 text-sm font-bold leading-6">
            <span className="text-[var(--neutral)]">{technologiesLabel}:</span>{" "}
            {experience.technologies}
          </p>
        </div>
        <ul className="experience-bullet-list space-y-3">
          {experience.bullets.map((bullet) => (
            <li className="bullet-line" key={bullet}>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

type ExperienceCardsProps = {
  experiences: Experience[];
  technologiesLabel: string;
};

export function ExperienceCards({
  experiences,
  technologiesLabel,
}: ExperienceCardsProps) {
  return (
    <div className="space-y-8">
      {experiences.map((experience, index) => (
        <ExperienceCard
          experience={experience}
          index={index}
          technologiesLabel={technologiesLabel}
          key={`${experience.company}-${experience.period}`}
        />
      ))}
    </div>
  );
}
