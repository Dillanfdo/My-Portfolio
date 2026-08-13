import {
  Globe,
  Layout,
  Briefcase,
  UtensilsCrossed,
  Stethoscope,
  Layers,
  RefreshCw,
  type LucideIcon,
} from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: 'business-websites',
    title: 'Business Websites',
    description: 'Modern websites for companies, startups and local businesses.',
    icon: Globe,
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    description: 'High-impact landing pages designed around your product or service.',
    icon: Layout,
  },
  {
    id: 'portfolio-websites',
    title: 'Portfolio Websites',
    description: 'Professional websites for individuals, consultants and creative professionals.',
    icon: Briefcase,
  },
  {
    id: 'restaurant-websites',
    title: 'Restaurant Websites',
    description: 'Menus, galleries, reservations and mobile-first experiences for hospitality.',
    icon: UtensilsCrossed,
  },
  {
    id: 'professional-service-websites',
    title: 'Professional Service Websites',
    description: 'Trust-building websites for clinics, consultants and service-based businesses.',
    icon: Stethoscope,
  },
  {
    id: 'custom-apps',
    title: 'Custom Web Applications',
    description: 'Dashboards, SaaS products, portals and custom applications.',
    icon: Layers,
  },
  {
    id: 'redesigns',
    title: 'Website Redesigns',
    description: 'Transform outdated websites into modern responsive experiences.',
    icon: RefreshCw,
  },
];
