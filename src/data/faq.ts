export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 'from-scratch',
    question: 'Do you build websites from scratch?',
    answer:
      'Yes. I design and build custom websites tailored to your business — not generic templates. Every project starts with understanding your goals, audience, and brand.',
  },
  {
    id: 'redesign',
    question: 'Can you redesign my existing website?',
    answer:
      'Absolutely. Whether your site looks outdated, performs poorly on mobile, or no longer reflects your business, I can transform it into a modern, responsive experience.',
  },
  {
    id: 'mobile',
    question: 'Will the website work on mobile?',
    answer:
      'Every website I build is responsive by default. Your site will look and work excellently on phones, tablets, and desktops.',
  },
  {
    id: 'domain',
    question: 'Can you connect my domain?',
    answer:
      'Yes. I can help you connect your custom domain and set up hosting so your website is live and accessible to your customers.',
  },
  {
    id: 'forms',
    question: 'Can you add forms or WhatsApp?',
    answer:
      'Yes. Contact forms, inquiry forms, WhatsApp integration, and other communication features can be built into your website.',
  },
  {
    id: 'booking',
    question: 'Can you build booking or payment functionality?',
    answer:
      'Yes. I can integrate booking systems, payment gateways, and other advanced functionality depending on your project requirements.',
  },
  {
    id: 'maintenance',
    question: 'Can you maintain the website after launch?',
    answer:
      'Yes. I offer ongoing support and maintenance options to keep your website updated, secure, and running smoothly after launch.',
  },
  {
    id: 'timeline',
    question: 'How long does a website take to build?',
    answer:
      'Timeline depends on scope. A simple business website typically takes 2–4 weeks. More complex projects with custom functionality may take longer. We\'ll agree on a timeline before starting.',
  },
];
