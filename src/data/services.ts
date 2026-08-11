import {
  Globe,
  Layout,
  Briefcase,
  ShoppingBag,
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
    id: 'ecommerce',
    title: 'E-commerce Experiences',
    description: 'Modern product and shopping experiences.',
    icon: ShoppingBag,
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
