export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  contribution: string;
  technologies: string[];
  highlight: string;
  isConcept?: boolean;
  preview: 'bloom' | 'healthcare' | 'interior' | 'restaurant';
}

export const projects: Project[] = [
  {
    id: 'bloom',
    category: 'AI / SaaS / Consumer Product',
    title: 'Bloom',
    description:
      'An AI-powered job application platform designed to make discovering and applying to jobs dramatically easier.',
    contribution:
      'Built the frontend experience for a Tinder-style job discovery and application workflow.',
    technologies: ['React', 'Next.js', 'TypeScript', 'AI integrations', 'API integrations'],
    highlight: 'Frontend Architecture · UX · React · Next.js',
    preview: 'bloom',
  },
  {
    id: 'healthcare',
    category: 'Healthcare / SaaS',
    title: 'Healthcare Dashboard',
    description:
      'A sophisticated healthcare revenue and analytics dashboard designed to help users understand complex operational data through a clear and intuitive interface.',
    contribution:
      'Designed and developed responsive dashboard interfaces with data visualization and complex filtering workflows.',
    technologies: ['React', 'TypeScript', 'Data Visualization', 'Material UI'],
    highlight: 'Dashboard UX · Data Visualization · React · Responsive UI',
    preview: 'healthcare',
  },
  {
    id: 'interior',
    category: 'Business Website',
    title: 'Luxury Interior Design Studio',
    description:
      'A premium business website for a high-end interior design studio — showcasing portfolio galleries, services, and client inquiry flows.',
    contribution:
      'Concept project demonstrating what I can build for freelance clients seeking a polished business presence.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Responsive Design'],
    highlight: 'Business Website · Visual Design · Mobile-First',
    isConcept: true,
    preview: 'interior',
  },
  {
    id: 'restaurant',
    category: 'Local Business',
    title: 'Modern Restaurant',
    description:
      'A mobile-first restaurant website featuring menu, gallery, location details, and reservation call-to-action.',
    contribution:
      'Concept project built to demonstrate local business website capabilities for restaurants and hospitality.',
    technologies: ['React', 'Tailwind CSS', 'Mobile-First', 'UX Design'],
    highlight: 'Local Business · Menu · Gallery · Reservations',
    isConcept: true,
    preview: 'restaurant',
  },
];
