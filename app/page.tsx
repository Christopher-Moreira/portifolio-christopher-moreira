"use client";

import Image from "next/image";
import { EducationCard } from "./components/EducationCard";
import { ExperienceCards } from "./components/ExperienceCard";
import { HighlightCards } from "./components/HighlightCard";
import { LanguageCard } from "./components/LanguageCard";
import { SkillGroupCards } from "./components/SkillGroupCard";
import { SummaryCard } from "./components/SummaryCard";
import { Language, Topbar } from "./components/Topbar";
import { usePersistedLanguage } from "./components/usePersistedLanguage";

const contactLinks = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/chrismoreiradev",
    href: "https://www.linkedin.com/in/chr%C3%ADsmoreiradev/",
  },
  {
    label: "GitHub",
    value: "github.com/Christopher-Moreira",
    href: "https://github.com/Christopher-Moreira",
  },
];

const skillItems = {
  backend: ["PHP", "Golang", "Python", "Laravel", "Adianti Framework", "Gin"],
  frontend: ["React", "TypeScript", "JavaScript", "Node.js", "Next.js", "NestJS"],
  database: ["MySQL", "Redis", "PostgreSQL", "SQLite", "MongoDB", "Cassandra"],
  devops: [
    "Docker",
    "Docker Compose",
    "Kubernetes",
    "kubectl",
    "Rancher",
    "Terraform",
    "Pipelines",
    "GitHub Actions",
  ],
};

const translations = {
  pt: {
    contact: "Contato",
    markAriaLabel: "Inicio",
    navAriaLabel: "Navegacao principal",
    nav: [
      { label: "Resumo", href: "/#resumo" },
      { label: "Techs", href: "/#techs" },
      { label: "Trampos", href: "/#experiencia" },
      { label: "Certificados", href: "/certificados" },
    ],
    heroAlt: "Retrato de Christopher Moreira",
    heroDescription:
      "Engenheiro de Software com experiência em ERP, CRM, APIs REST, aplicacoes web e sistemas corporativos.",
    summaryLabel: "Resumo",
    summaryTitle: "Arquitetura e Engenharia de Software.",
    summary:
      "Engenheiro de Software com experiencia no desenvolvimento e manutencao e arquitetura de sistemas corporativos, ERPs, CRM, aplicacoes web e APIs REST. Atuo conectando analise tecnica, regras de negocio, integracoes, modelagem de dados e melhoria de performance em ambientes corporativos.",
    highlights: [
      "Desenvolvimento de soluções full stack para ambientes corporativos, unindo backend, frontend e regras de negócio.",
      "Melhoria de performance em sistemas reais, com redução de endpoints de aproximadamente 800 ms para 200 ms.",
      "Experiência com ERP, CRM, dashboards, catálogos online, cobrança, webhooks e integrações entre sistemas.",
      "Atuação em modernização de sistemas legados, manutenção evolutiva e construção de novas funcionalidades com foco em estabilidade e usabilidade.",
    ],
    skillGroups: [
      { title: "Backend", items: skillItems.backend },
      { title: "Frontend", items: skillItems.frontend },
      { title: "Banco de Dados", items: skillItems.database },
      { title: "DevOps e Infraestrutura", items: skillItems.devops },
    ],
    experienceTitle: "Trilha Profissional.",
    technologiesLabel: "Tecnologias",
    experiences: [
      {
        role: "Engenheiro de Software",
        company: "MercadoPhone · Tempo integral",
        period: "Maio 2026 - Atual",
        location: "Sao Paulo, Brasil · Remoto",
        technologies:
          "React, TypeScript, JavaScript, PHP, Laravel, Adianti Framework, MySQL, APIs REST, Webhooks, Docker, Git, Cache, Integrações, IA Blue",
        summary:
          "Atuo no desenvolvimento e evolução de um ERP corporativo, contribuindo em funcionalidades de backend e frontend com foco em regras de negócio, integrações, estabilidade e melhoria contínua da plataforma.",
        bullets: [
          "Implementei regras de negócio para fluxos operacionais do ERP, apoiando a evolução funcional da aplicação.",
          "Desenvolvi e mantive integrações entre módulos internos e serviços externos.",
          "Corrigi problemas críticos e implementei melhorias voltadas à estabilidade, desempenho e manutenibilidade do produto.",
          "Evoluí o Catálogo Online, responsável por aproximadamente 46% do volume técnico entregue, incluindo cache, layout, identidade visual, envio de ícones e logos, reviews e relatórios de acesso.",
          "Melhorei módulos administrativos e de permissões, representando cerca de 39% do volume técnico entregue, com ajustes em usuários, grupos de permissão e gestão de funcionários.",
          "Aprimorei fluxos da IA Blue com melhorias em listagens, gatilhos, regras de visibilidade e experiência de uso em formulários.",
          "Adequuei serviços de venda e webhooks para um modelo mais consistente, favorecendo manutenção, escalabilidade e organização da aplicação.",
        ],
      },
      {
        role: "Engenheiro de Software",
        company: "Autônomo",
        period: "Janeiro 2023 - Atual",
        location: "Remoto",
        technologies:
          "Laravel, MySQL, React, Node.js, TypeScript, PHP, APIs REST, Docker, Linux, Git, HTML, CSS",
        summary:
          "Desenvolvo soluções web e sistemas sob demanda para clientes, atuando do levantamento de requisitos até a implantação e manutenção das aplicações.",
        bullets: [
          "Desenvolvi um sistema de gestão de carteiras de clientes do zero com Laravel, MySQL e React, incluindo modelagem de dados, arquitetura e regras de negócio.",
          "Construí APIs REST e integrações entre sistemas com Node.js, TypeScript e PHP, garantindo consistência e automação de fluxos de dados.",
          "Criei landing pages e aplicações web focadas em performance, responsividade e conversão para diferentes segmentos de negócio.",
          "Implementei autenticação, controle de permissões, modelagem de banco de dados e integrações com serviços de terceiros.",
          "Conduzi implantação e manutenção de aplicações em ambientes Linux usando Docker e versionamento com Git.",
          "Mantenho portfólio técnico e projetos públicos em github.com/Christopher-Moreira.",
        ],
      },
      {
        role: "Engenheiro de Software",
        company: "Sicoob Cruz Alta",
        period: "Maio 2025 - Abril 2026",
        location: "Cruz Alta, RS · Presencial",
        technologies:
          "TypeScript, React, PHP, Laravel, Python, Docker, Linux, MySQL, MongoDB, PostgreSQL, Redis, Git, CI/CD, APIs REST",
        summary:
          "Atuei no desenvolvimento e sustentação de sistemas internos utilizados pela cooperativa, participando do ciclo de desenvolvimento desde requisitos até implantação e suporte em produção.",
        bullets: [
          "Desenvolvi aplicações web e sistemas corporativos com TypeScript, React, PHP e Laravel para diferentes áreas de negócio da cooperativa.",
          "Desenvolvi e implementei um ERP de gestão patrimonial, reduzindo em aproximadamente 50% o tempo necessário para cadastro e controle de patrimônios internos.",
          "Otimizei endpoints de APIs críticas, reduzindo o tempo médio de resposta de aproximadamente 800 ms para 200 ms, uma melhoria de 75% na performance.",
          "Liderei a migração de páginas críticas de plataformas low-code para React, aumentando escalabilidade, manutenibilidade e desempenho.",
          "Estruturei padrões de desenvolvimento, organização de repositórios e fluxo de trabalho da equipe.",
          "Implementei pipelines de CI/CD e processos de versionamento, reduzindo atividades manuais e aumentando a confiabilidade das entregas.",
          "Desenvolvi automações com Python, integrações entre sistemas internos e bases corporativas, e administrei aplicações containerizadas em Linux com Docker.",
        ],
      },
      {
        role: "Estagiário de TI",
        company: "Sicoob Cruz Alta",
        period: "Julho 2023 - Abril 2025",
        location: "Cruz Alta, RS · Presencial",
        technologies:
          "PHP, Power BI, Windows, Linux, SQL, Suporte Técnico, Segurança da Informação",
        summary:
          "Atuei no suporte técnico e manutenção da infraestrutura de TI da cooperativa, garantindo disponibilidade dos recursos utilizados por agências e equipes internas.",
        bullets: [
          "Realizei suporte técnico a usuários em ambientes Windows e Linux.",
          "Gerenciei acessos, configurações de estações de trabalho e recursos corporativos conforme os padrões da cooperativa.",
          "Desenvolvi aplicações internas em PHP para automatização de processos operacionais.",
          "Criei dashboards e relatórios de acompanhamento utilizando Power BI.",
          "Apoiei atividades relacionadas à segurança da informação e ao tratamento de documentos sensíveis.",
        ],
      },
    ],
    education: {
      label: "Educacao",
      degree: "Bacharelado em Engenharia de Software",
      institution: "Universidade Norte do Parana (Unopar) | Concluida",
    },
    languages: {
      label: "Idiomas",
      items: [
        "Portugues nativo",
        "Ingles tecnico / avancado",
        "Espanhol / Nativo",
        "Alemão / Básico",
      ],
    },
  },
  en: {
    contact: "Contact",
    markAriaLabel: "Home",
    navAriaLabel: "Main navigation",
    nav: [
      { label: "Summary", href: "/#resumo" },
      { label: "Techs", href: "/#techs" },
      { label: "Work", href: "/#experiencia" },
      { label: "Certificates", href: "/certificados" },
    ],
    heroAlt: "Portrait of Christopher Moreira",
    heroDescription:
      "Software Engineer with experience in ERP, CRM, REST APIs, web applications, and enterprise systems.",
    summaryLabel: "Summary",
    summaryTitle: "Software Architecture and Engineering.",
    summary:
      "Software Engineer experienced in developing, maintaining, and architecting enterprise systems, ERPs, CRMs, web applications, and REST APIs. I connect technical analysis, business rules, integrations, data modeling, and performance improvements in corporate environments.",
    highlights: [
      "Full stack solution development for enterprise environments, combining backend, frontend, and business rules.",
      "Performance improvement in real systems, reducing critical endpoints from around 800 ms to 200 ms.",
      "Experience with ERP, CRM, dashboards, online catalogs, billing, webhooks, and system integrations.",
      "Work on legacy system modernization, ongoing maintenance, and new feature development focused on stability and usability.",
    ],
    skillGroups: [
      { title: "Backend", items: skillItems.backend },
      { title: "Frontend", items: skillItems.frontend },
      { title: "Databases", items: skillItems.database },
      { title: "DevOps and Infrastructure", items: skillItems.devops },
    ],
    experienceTitle: "Professional Path.",
    technologiesLabel: "Technologies",
    experiences: [
      {
        role: "Software Engineer",
        company: "MercadoPhone · Full-time",
        period: "May 2026 - Present",
        location: "Sao Paulo, Brazil · Remote",
        technologies:
          "React, TypeScript, JavaScript, PHP, Laravel, Adianti Framework, MySQL, REST APIs, Webhooks, Docker, Git, Cache, Integrations, IA Blue",
        summary:
          "I work on the development and evolution of an enterprise ERP, contributing to backend and frontend features focused on business rules, integrations, stability, and continuous platform improvement.",
        bullets: [
          "Implemented business rules for ERP operational flows, supporting the functional evolution of the application.",
          "Developed and maintained integrations between internal modules and external services.",
          "Fixed critical issues and implemented improvements focused on product stability, performance, and maintainability.",
          "Evolved the Online Catalog, responsible for about 46% of the technical delivery volume, including cache, layout, visual identity, icon and logo uploads, reviews, and access reports.",
          "Improved administrative and permissions modules, representing about 39% of the technical delivery volume, with adjustments to users, permission groups, and employee management.",
          "Enhanced IA Blue flows with improvements to listings, triggers, visibility rules, and form usability.",
          "Adjusted sales services and webhooks toward a more consistent model, improving maintenance, scalability, and application organization.",
        ],
      },
      {
        role: "Software Engineer",
        company: "Freelance",
        period: "January 2023 - Present",
        location: "Remote",
        technologies:
          "Laravel, MySQL, React, Node.js, TypeScript, PHP, REST APIs, Docker, Linux, Git, HTML, CSS",
        summary:
          "I develop custom web solutions and systems for clients, working from requirements discovery through deployment and application maintenance.",
        bullets: [
          "Built a customer wallet management system from scratch with Laravel, MySQL, and React, including data modeling, architecture, and business rules.",
          "Built REST APIs and integrations between systems with Node.js, TypeScript, and PHP, ensuring consistency and automation across data flows.",
          "Created landing pages and web applications focused on performance, responsiveness, and conversion for different business segments.",
          "Implemented authentication, permission control, database modeling, and third-party service integrations.",
          "Handled deployment and maintenance of applications in Linux environments using Docker and Git version control.",
          "Maintain a technical portfolio and public projects at github.com/Christopher-Moreira.",
        ],
      },
      {
        role: "Software Engineer",
        company: "Sicoob Cruz Alta",
        period: "May 2025 - April 2026",
        location: "Cruz Alta, RS · On-site",
        technologies:
          "TypeScript, React, PHP, Laravel, Python, Docker, Linux, MySQL, MongoDB, PostgreSQL, Redis, Git, CI/CD, REST APIs",
        summary:
          "I worked on the development and support of internal systems used by the cooperative, participating in the development cycle from requirements through deployment and production support.",
        bullets: [
          "Developed web applications and enterprise systems with TypeScript, React, PHP, and Laravel for different business areas of the cooperative.",
          "Developed and implemented an asset management ERP, reducing the time needed to register and manage internal assets by about 50%.",
          "Optimized critical API endpoints, reducing average response time from about 800 ms to 200 ms, a 75% performance improvement.",
          "Led the migration of critical pages from low-code platforms to React, improving scalability, maintainability, and performance.",
          "Structured development standards, repository organization, and team workflow.",
          "Implemented CI/CD pipelines and versioning processes, reducing manual work and increasing delivery reliability.",
          "Developed Python automations, integrations between internal systems and corporate databases, and administered containerized applications on Linux with Docker.",
        ],
      },
      {
        role: "IT Intern",
        company: "Sicoob Cruz Alta",
        period: "July 2023 - April 2025",
        location: "Cruz Alta, RS · On-site",
        technologies:
          "PHP, Power BI, Windows, Linux, SQL, Technical Support, Information Security",
        summary:
          "I worked on technical support and IT infrastructure maintenance for the cooperative, ensuring availability of resources used by branches and internal teams.",
        bullets: [
          "Provided technical support to users in Windows and Linux environments.",
          "Managed access, workstation configurations, and corporate resources according to cooperative standards.",
          "Developed internal PHP applications to automate operational processes.",
          "Created dashboards and monitoring reports using Power BI.",
          "Supported activities related to information security and handling sensitive documents.",
        ],
      },
    ],
    education: {
      label: "Education",
      degree: "Bachelor's Degree in Software Engineering",
      institution: "Universidade Norte do Parana (Unopar) | Completed",
    },
    languages: {
      label: "Languages",
      items: [
        "Portuguese / Native",
        "English / Technical and advanced",
        "Spanish / Native",
        "German / Basic",
      ],
    },
  },
} satisfies Record<
  Language,
  {
    contact: string;
    markAriaLabel: string;
    navAriaLabel: string;
    nav: { label: string; href: string }[];
    heroAlt: string;
    heroDescription: string;
    summaryLabel: string;
    summaryTitle: string;
    summary: string;
    highlights: string[];
    skillGroups: { title: string; items: string[] }[];
    experienceTitle: string;
    technologiesLabel: string;
    experiences: {
      role: string;
      company: string;
      period: string;
      location: string;
      technologies: string;
      summary: string;
      bullets: string[];
    }[];
    education: {
      label: string;
      degree: string;
      institution: string;
    };
    languages: {
      label: string;
      items: string[];
    };
  }
>;

export default function Home() {
  const [language, setLanguage] = usePersistedLanguage();
  const copy = translations[language];

  return (
    <main className="min-h-[100dvh] overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <Topbar
        contactLabel={copy.contact}
        language={language}
        markAriaLabel={copy.markAriaLabel}
        navAriaLabel={copy.navAriaLabel}
        navItems={copy.nav}
        onLanguageChange={setLanguage}
      />

      <section
        className="relative isolate border-b-[3px] border-[var(--tertiary)] px-6 py-8 sm:px-8 lg:px-10"
        id="inicio">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative py-10 sm:py-16">
            <h1 className="max-w-5xl text-[clamp(2.8rem,8vw,6.8rem)] font-black uppercase leading-[0.85] text-[var(--neutral)]">
              Christopher Moreira
            </h1>
            <p className="hero-description mt-7 max-w-3xl bg-[var(--neutral)] px-5 py-4 text-lg leading-8 text-[var(--primary)] shadow-[4px_4px_0_var(--surface)] sm:text-xl">
              {copy.heroDescription}
            </p>
          </div>

          <aside className="hero-portrait-panel">
            <div className="portrait-frame">
              <Image
                alt={copy.heroAlt}
                className="portrait-image"
                height={1402}
                priority
                src="/christopher-grunge.png"
                width={1122}
              />
            </div>
            <div className="contact-tape">
              {contactLinks.map((link) => (
                <a
                  className="contact-tape-link"
                  href={link.href}
                  key={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="scroll-mt-28 px-6 py-16 sm:px-8 lg:px-10" id="resumo">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="label-strip">{copy.summaryLabel}</p>
            <h2 className="mt-5 max-w-md text-4xl font-black uppercase leading-none text-[var(--neutral)]">
              {copy.summaryTitle}
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-[1fr_0.8fr]">
            <SummaryCard>{copy.summary}</SummaryCard>
            <HighlightCards highlights={copy.highlights} />
          </div>
        </div>
      </section>

      <section
        className="scroll-mt-28 border-y-[3px] border-[var(--tertiary)] bg-[var(--surface)] px-6 py-14 sm:px-8 lg:px-10"
        id="techs">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1.25fr_0.9fr]">
          <SkillGroupCards skillGroups={copy.skillGroups} />
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-10" id="experiencia">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-4 md:grid-cols-[0.7fr_1fr] md:items-end">
            <p className=""></p>
            <h2 className="text-4xl font-black uppercase leading-none text-[var(--neutral)] md:text-right">
              {copy.experienceTitle}
            </h2>
          </div>

          <ExperienceCards
            experiences={copy.experiences}
            technologiesLabel={copy.technologiesLabel}
          />
        </div>
      </section>

      <section
        className="scroll-mt-28 bg-[var(--surface)] px-6 py-16 text-[var(--neutral)] sm:px-8 lg:px-10"
        id="certificados"
      >
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_1fr]">
          <EducationCard
            degree={copy.education.degree}
            institution={copy.education.institution}
            label={copy.education.label}
          />
          <LanguageCard
            label={copy.languages.label}
            languages={copy.languages.items}
          />
        </div>
      </section>
    </main>
  );
}
