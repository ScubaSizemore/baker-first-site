import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import GlassCard from '../components/ui/GlassCard';
import ScrollReveal from '../components/ui/ScrollReveal';
import Button from '../components/ui/Button';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '405-947-7200',
    href: 'tel:+14059477200',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@bakerfirst.com',
    href: 'mailto:info@bakerfirst.com',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: '200 NW 66th St., Ste. 950\nOklahoma City, OK 73116',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon - Fri: 8:00 AM - 5:00 PM',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        badge="Get in Touch"
        title="Let's"
        highlight="Talk"
        description="Ready to discuss your commercial real estate needs? We'd love to hear from you."
      />

      <section className="section-padding">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact info sidebar */}
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <ScrollReveal key={item.label}>
                  <GlassCard className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-brand-red-light border border-brand-red/10 text-brand-red shrink-0">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <p className="text-text-muted text-xs font-heading uppercase tracking-wider mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-brand-charcoal hover:text-brand-red transition-colors text-sm"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-brand-charcoal text-sm whitespace-pre-line">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </GlassCard>
                </ScrollReveal>
              ))}

              {/* Map placeholder */}
              <ScrollReveal>
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-bg-surface-2 to-bg-surface border border-border-subtle overflow-hidden flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={32} className="text-brand-red mx-auto mb-2" />
                    <p className="text-text-muted text-sm">Interactive map</p>
                    <p className="text-text-muted text-xs mt-1">200 NW 66th St., OKC</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <GlassCard>
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-brand-red-light border border-brand-red/10 flex items-center justify-center mx-auto mb-4">
                        <Send size={24} className="text-brand-red" />
                      </div>
                      <h3 className="font-heading font-semibold text-xl text-brand-charcoal mb-2">
                        Message Sent
                      </h3>
                      <p className="text-text-secondary">
                        Thank you for reaching out. A member of our team will
                        respond within one business day.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <h2 className="font-heading font-semibold text-xl text-brand-charcoal mb-2">
                        Send Us a Message
                      </h2>
                      <p className="text-text-secondary text-sm mb-6">
                        Fill out the form below and we&apos;ll get back to you
                        shortly.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-text-secondary text-sm mb-1.5"
                          >
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-bg-surface border border-border-subtle rounded-lg px-4 py-2.5 text-sm text-brand-charcoal placeholder:text-text-muted focus:outline-none focus:border-brand-red/30 focus:ring-1 focus:ring-brand-red/20 transition-colors"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-text-secondary text-sm mb-1.5"
                          >
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-bg-surface border border-border-subtle rounded-lg px-4 py-2.5 text-sm text-brand-charcoal placeholder:text-text-muted focus:outline-none focus:border-brand-red/30 focus:ring-1 focus:ring-brand-red/20 transition-colors"
                            placeholder="john@company.com"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-text-secondary text-sm mb-1.5"
                          >
                            Phone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-bg-surface border border-border-subtle rounded-lg px-4 py-2.5 text-sm text-brand-charcoal placeholder:text-text-muted focus:outline-none focus:border-brand-red/30 focus:ring-1 focus:ring-brand-red/20 transition-colors"
                            placeholder="(405) 555-0100"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-text-secondary text-sm mb-1.5"
                          >
                            Company
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full bg-bg-surface border border-border-subtle rounded-lg px-4 py-2.5 text-sm text-brand-charcoal placeholder:text-text-muted focus:outline-none focus:border-brand-red/30 focus:ring-1 focus:ring-brand-red/20 transition-colors"
                            placeholder="Company name"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="interest"
                          className="block text-text-secondary text-sm mb-1.5"
                        >
                          Area of Interest
                        </label>
                        <select
                          id="interest"
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          className="w-full bg-bg-surface border border-border-subtle rounded-lg px-4 py-2.5 text-sm text-brand-charcoal focus:outline-none focus:border-brand-red/30 focus:ring-1 focus:ring-brand-red/20 transition-colors"
                        >
                          <option value="">Select an option</option>
                          <option value="brokerage">Brokerage &amp; Investing</option>
                          <option value="management">Property Management</option>
                          <option value="construction">Construction</option>
                          <option value="development">Development</option>
                          <option value="quail-lakes">Quail Lakes</option>
                          <option value="general">General Inquiry</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-text-secondary text-sm mb-1.5"
                        >
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-bg-surface border border-border-subtle rounded-lg px-4 py-2.5 text-sm text-brand-charcoal placeholder:text-text-muted focus:outline-none focus:border-brand-red/30 focus:ring-1 focus:ring-brand-red/20 transition-colors resize-none"
                          placeholder="Tell us about your commercial real estate needs..."
                        />
                      </div>

                      <Button type="submit" className="w-full sm:w-auto">
                        Send Message
                        <Send size={16} />
                      </Button>
                    </form>
                  )}
                </GlassCard>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
