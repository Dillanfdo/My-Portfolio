import { useState, FormEvent } from 'react';
import { Mail, Send } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Button from './Button';
import ScrollReveal from './ScrollReveal';
import { siteConfig } from '@/data/site';

interface FormData {
  name: string;
  email: string;
  company: string;
  need: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  company: '',
  need: '',
  message: '',
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Ready for Formspree, Resend, EmailJS, or custom API integration
    console.log('Form submission:', formData);
    setSubmitted(true);
    setFormData(initialFormData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-max mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Contact"
              title={
                <>
                  Tell me what you&apos;re{' '}
                  <span className="text-gradient">building.</span>
                </>
              }
              subtitle="Share your project details and I'll get back to you within 1–2 business days."
            />
            <div className="flex items-center gap-3 text-text-secondary">
              <Mail className="w-5 h-5 text-accent" />
              <div>
                <p className="text-sm">Or email me directly</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-text-primary hover:text-accent-light transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 rounded-2xl bg-card border border-white/5 shadow-card space-y-5"
            >
              {submitted && (
                <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
                  Thank you! Your inquiry has been received. Connect a backend service to enable
                  real email delivery.
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                  Business / Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-colors"
                  placeholder="Your business name"
                />
              </div>

              <div>
                <label htmlFor="need" className="block text-sm font-medium text-text-primary mb-2">
                  What do you need?
                </label>
                <select
                  id="need"
                  name="need"
                  value={formData.need}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-text-primary focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="business-website">Business Website</option>
                  <option value="landing-page">Landing Page</option>
                  <option value="portfolio">Portfolio Website</option>
                  <option value="ecommerce">E-commerce Experience</option>
                  <option value="web-app">Custom Web Application</option>
                  <option value="redesign">Website Redesign</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button type="submit" variant="primary" className="w-full sm:w-auto" showArrow={false}>
                <span className="flex items-center gap-2">
                  Send Project Inquiry
                  <Send className="w-4 h-4" />
                </span>
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
