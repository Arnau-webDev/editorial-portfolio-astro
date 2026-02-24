export interface ExperienceItem {
  title: string;
  company: string;
  companyUrl: string;
  period: string;
  description: string;
  tech: string[];
  logo: string;
}

export const experiences: ExperienceItem[] = [
  {
    title: 'Technical Lead',
    company: 'Lufthansa Group',
    companyUrl: 'https://www.lufthansagroup.com',
    period: '2024 — Present',
    description:
      'Architecting and overseeing end-to-end delivery of high-revenue flight upgrade systems within a mobile-first ecosystem. Leading all strategic decisions on tech stack, scalable architecture, and deployment pipelines. Managing stakeholder communication and technical roadmaps.',
    tech: ['React', 'TypeScript', 'Micro-frontends', 'Azure DevOps', 'A/B Testing'],
    logo: '/images/logos/lufthansa.svg',
  },
  {
    title: 'Frontend Developer',
    company: 'Openbank',
    companyUrl: 'https://www.openbank.com',
    period: '2023 — 2024',
    description:
      'Developed core software for the German market in a highly regulated banking environment. Managed critical production resolution and led strategic legacy code migrations to modern, scalable frameworks.',
    tech: ['React', 'TypeScript', 'Jest', 'Storybook', 'Docker'],
    logo: '/images/logos/openbank.svg',
  },
  {
    title: 'Frontend Developer',
    company: 'Atrápalo',
    companyUrl: 'https://www.atrapalo.com',
    period: '2022 — 2023',
    description:
      'Led the migration from a monolithic architecture to a micro-frontends ecosystem using React, Next.js, and TypeScript. Implemented Domain-Driven Design (DDD) with a strict focus on web performance, SEO, and accessibility.',
    tech: ['React', 'Next.js', 'TypeScript', 'Micro-frontends', 'DDD'],
    logo: '/images/logos/atrapalo.png',
  },
  {
    title: 'Full Stack Developer',
    company: 'NTT DATA',
    companyUrl: 'https://www.nttdata.com',
    period: '2019 — 2021',
    description:
      'Developed and tested internal critical applications for CaixaBank, handling both frontend (React) and backend integration services. Collaborated directly with clients to translate business requirements into technical solutions.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Java'],
    logo: '/images/logos/nttdata.png',
  },
];
