export type ProjectStatus = 'coming-soon' | 'live';

export type ProjectPreview = 'interior' | 'restaurant' | 'clinic';

export interface UpcomingProject {
  id: string;
  title: string;
  category: string;
  description: string;
  contribution?: string;
  technologies?: string[];
  highlight?: string;
  capabilities: string[];
  status: ProjectStatus;
  isConcept: boolean;
  preview: ProjectPreview;
  liveUrl: string | null;
}

export const upcomingProjects: UpcomingProject[] = [
  {
    id: 'interior',
    title: 'Premium Interior Design Studio',
    category: 'Business Website · Concept',
    description:
      'A premium website concept designed for an interior design studio, focused on visual storytelling, project galleries, services and client inquiries.',
    capabilities: [
      'Premium visual design',
      'Project galleries',
      'Service presentation',
      'Responsive layouts',
      'Inquiry/contact experience',
    ],
    status: 'coming-soon',
    isConcept: true,
    preview: 'interior',
    liveUrl: null,
  },
  {
    id: 'restaurant',
    title: 'Modern Restaurant',
    category: 'Local Business · Concept',
    description:
      'A modern restaurant website concept designed around menus, visual presentation, location information and customer reservations.',
    capabilities: [
      'Menu presentation',
      'Food/gallery sections',
      'Location information',
      'Reservation CTA',
      'WhatsApp/contact integration',
      'Mobile-first design',
    ],
    status: 'coming-soon',
    isConcept: true,
    preview: 'restaurant',
    liveUrl: null,
  },
  {
  id: 'clinic',
  title: 'Lumina Dental Studio',
  category: 'Dental Clinic · Concept',
  description:
    'A premium, responsive dental clinic website designed to create trust, showcase dental services, introduce the clinical team, and make appointment enquiries simple for patients.',
  contribution:
    'Designed and developed the complete frontend experience, including responsive layouts, treatment sections, doctor profiles, appointment flows, testimonials, interactive UI elements, and mobile interactions.',
  technologies: [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
    'Responsive Design',
  ],
  highlight:
    'Healthcare Website · UX Design · Responsive UI · Appointment Experience',
  capabilities: [
    'Dental service presentation',
    'Doctor profiles',
    'Appointment enquiry flow',
    'Patient testimonials',
    'Responsive mobile experience',
    'Interactive UI',
  ],
  status: 'live',
  isConcept: true,
  preview: 'clinic',
  liveUrl: 'https://demo-dental-clinic-sand.vercel.app/',
}
];
