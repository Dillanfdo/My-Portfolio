export interface PricingTier {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    title: 'Starter Website',
    price: '₹15k+',
    description: 'For simple business websites.',
    features: [
      'Up to 5 pages',
      'Mobile-responsive design',
      'Contact form',
      'Basic SEO setup',
    ],
  },
  {
    id: 'professional',
    title: 'Professional Website',
    price: '₹30k+',
    description: 'For businesses that need a more customized experience.',
    features: [
      'Custom design & layout',
      'Advanced sections & animations',
      'CMS or content management',
      'Performance optimization',
    ],
  },
  {
    id: 'custom',
    title: 'Custom Web Application',
    price: '₹50k+',
    description: 'For advanced functionality, dashboards, booking systems, integrations, etc.',
    features: [
      'Custom functionality',
      'Dashboards & portals',
      'API integrations',
      'Scalable architecture',
    ],
  },
];
