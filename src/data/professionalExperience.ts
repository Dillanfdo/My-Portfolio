export interface ProfessionalExperience {
  id: string;
  category: string;
  title: string;
  description: string;
  contribution: string;
  technologies: string[];
  highlight: string;
}

export const professionalExperience: ProfessionalExperience[] = [
  {
    id: 'bloom',
    category: 'AI / SaaS / Consumer Product',
    title: 'Bloom',
    description:
      'An AI-powered job application platform designed to make discovering and applying to jobs dramatically easier.',
    contribution:
      'Built and maintained frontend experiences for a Tinder-style job discovery and application workflow.',
    technologies: ['React', 'Next.js', 'TypeScript', 'API integrations', 'AI integrations'],
    highlight: 'Frontend Architecture · UX · React · Next.js',
  },
  {
    id: 'healthcare',
    category: 'Healthcare / SaaS',
    title: 'Healthcare Revenue Dashboard',
    description:
      'A healthcare revenue and analytics platform designed to help users understand complex operational and financial data through intuitive interfaces.',
    contribution:
      'Designed and developed responsive dashboard interfaces, data visualization experiences and complex filtering workflows.',
    technologies: ['React', 'TypeScript', 'Material UI', 'Data Visualization'],
    highlight: 'Dashboard UX · Data Visualization · React · Responsive UI',
  },
  {
    id: 'ulabsystems',
    category: 'Platform Modernization',
    title: 'UlabSystems',
    description:
      'Professional frontend development experience contributing to the migration and modernization of the UlabSystems platform.',
    contribution:
      'Contributed to frontend development efforts supporting platform migration and modernization initiatives.',
    technologies: ['React', 'TypeScript', 'Frontend Architecture'],
    highlight: 'Platform Migration · Modernization · React · TypeScript',
  },
];
