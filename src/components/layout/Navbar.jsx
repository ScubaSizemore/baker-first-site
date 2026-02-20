import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navLinks } from '../../data/navigation';
import Button from '../ui/Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-glass border-b border-border-subtle shadow-card'
          : 'bg-white border-b border-border-subtle'
      }`}
    >
      <nav className="container-max mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center font-heading font-bold text-white text-sm">
              B
            </div>
            <span className="font-heading font-bold text-lg text-brand-charcoal">
              Baker<span className="text-brand-red">First</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-heading font-medium transition-colors ${
                      isActive(link.path)
                        ? 'text-brand-red'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${
                        dropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-border-subtle rounded-xl p-2 shadow-card-hover animate-fade-in-down">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-4 py-2.5 rounded-lg text-sm font-heading transition-colors ${
                            isActive(child.path)
                              ? 'text-brand-red bg-brand-red-light'
                              : 'text-text-secondary hover:text-text-primary hover:bg-bg-surface'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-heading font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-brand-red'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button to="/contact" size="sm">
              Schedule Consultation
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
          <div className="px-6 py-8 space-y-2">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg text-lg font-heading font-medium ${
                      isActive(link.path)
                        ? 'text-brand-red'
                        : 'text-text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                  <div className="ml-4 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className={`block px-4 py-2 rounded-lg text-sm font-heading ${
                          isActive(child.path)
                            ? 'text-brand-red'
                            : 'text-text-secondary'
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg text-lg font-heading font-medium ${
                    isActive(link.path)
                      ? 'text-brand-red'
                      : 'text-text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}

            <div className="pt-6">
              <Button to="/contact" className="w-full">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
