export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  role: string;
  tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'lufthansa-upgrade-flow',
    title: 'Lufthansa Group — Flight Upgrade Flow',
    description:
      'Rebuilt the flight upgrade experience as a cross-platform, multi-tenant micro-frontend — serving millions of passengers across 6 airline brands, web, and mobile.',
    role: 'Tech Lead',
    tags: ['Next.js', 'React', 'TypeScript', 'Vite', 'Storybook', 'GA4'],
  },
  {
    id: 'ai-resume-analyzer',
    title: 'Resumer — AI Resume Analyzer',
    description:
      'A fully serverless AI-powered resume analyzer. Upload your PDF and a job description to receive scored feedback across 5 categories — with zero backend infrastructure.',
    role: 'Solo Developer',
    tags: ['React', 'TypeScript', 'Puter.js', 'pdf.js', 'Zustand', 'Prompt Engineering'],
  },
  {
    id: 'this-portfolio',
    title: 'This Portfolio — Why Astro SSG',
    description:
      'Why Astro SSG is the right tool for a fast, SEO-friendly portfolio — pre-rendered HTML, zero runtime JS, self-hosted fonts, and a perfect 100 Lighthouse performance score.',
    role: 'Solo Developer',
    tags: ['Astro.js', 'TypeScript', 'Tailwind CSS', 'Vanilla JS', 'SSG'],
  },
];
