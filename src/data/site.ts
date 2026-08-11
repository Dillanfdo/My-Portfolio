export const siteConfig = {
  name: 'Dillan Fernando',
  title: 'Frontend Developer',
  description:
    'Senior Software Engineer with 7+ years of experience building modern, responsive and scalable web applications.',
  email: 'hello@dillanfernando.dev',
  github: 'https://github.com/dillanfernando',
  linkedin: 'https://linkedin.com/in/dillanfernando',
  availability: 'Available for freelance projects',
  experienceYears: '7+',
  currentRole: 'Senior Software Engineer – Frontend',
  currentCompany: 'Ideas2IT',
} as const;

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
] as const;

export const technologies = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'Material UI',
  'Redux',
  'Zustand',
  'Vercel',
  'Node.js',
  'PostgreSQL',
] as const;
