import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { footerLinks } from '../../data/navigation';

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/bakerfirst', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com/bakerfirst', label: 'X / Twitter' },
  { icon: Instagram, href: 'https://instagram.com/bakerfirst', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com/bakerfirst', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border-subtle">
      {/* Red accent top border */}
      <div className="h-1 bg-brand-red" />

      <div className="container-max mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-8">
          {/* Brand column */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src="/assets/baker-first-logo.png"
                alt="Baker First Commercial Real Estate"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Oklahoma&apos;s premier full-lifecycle commercial real estate
              firm. Brokerage, management, construction, and development
              since 1988.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-bg-surface border border-border-subtle flex items-center justify-center text-text-muted hover:text-brand-red hover:border-brand-red/20 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-brand-charcoal mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-text-secondary hover:text-brand-red text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold text-brand-charcoal mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-text-secondary hover:text-brand-red text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-brand-charcoal mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href="tel:+14059477200"
                className="flex items-center gap-2 text-text-secondary hover:text-brand-red text-sm transition-colors"
              >
                <Phone size={14} />
                405-947-7200
              </a>
              <a
                href="mailto:info@bakerfirst.com"
                className="flex items-center gap-2 text-text-secondary hover:text-brand-red text-sm transition-colors"
              >
                <Mail size={14} />
                info@bakerfirst.com
              </a>
              <div className="flex items-start gap-2 text-text-secondary text-sm">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>200 NW 66th St., Ste. 950<br />Oklahoma City, OK 73116</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-brands */}
        <div className="mt-10 pt-6 border-t border-border-subtle flex flex-wrap items-center justify-center gap-6 text-text-muted text-xs">
          <span className="font-heading font-medium">Baker First Management Corporation</span>
          <span className="hidden sm:inline text-border-subtle">|</span>
          <span className="font-heading font-medium">Alliance Property Development</span>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-6 border-t border-border-subtle flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} Baker First Commercial Real
            Estate. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-text-muted hover:text-brand-red text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-text-muted hover:text-brand-red text-xs transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
