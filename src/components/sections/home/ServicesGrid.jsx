import { Link } from 'react-router-dom';
import { TrendingUp, Building2, Hammer, BarChart3, ArrowRight } from 'lucide-react';
import { services } from '../../../data/services';
import GlassCard from '../../ui/GlassCard';
import ScrollReveal from '../../ui/ScrollReveal';
import Badge from '../../ui/Badge';

const iconMap = {
  TrendingUp,
  Building2,
  Hammer,
  BarChart3,
};

const colorMap = {
  'heritage-red': 'text-brand-red',
  'accent-cyan': 'text-accent-cyan',
  'accent-gold': 'text-accent-gold',
};

export default function ServicesGrid() {
  return (
    <section className="section-padding">
      <div className="container-max mx-auto">
        <ScrollReveal className="text-center mb-16">
          <Badge className="mb-4">What We Do</Badge>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl mb-4 text-brand-charcoal">
            Full-Lifecycle{' '}
            <span className="text-brand-red">Commercial Real Estate</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-base sm:text-lg">
            Four integrated divisions delivering comprehensive solutions at
            every stage of the property lifecycle.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <ScrollReveal key={service.id} delay={index * 100}>
                <Link to={`/services/${service.slug}`}>
                  <GlassCard className="group h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`p-3 rounded-xl bg-brand-red-light border border-brand-red/10 ${
                          colorMap[service.color]
                        }`}
                      >
                        {Icon && <Icon size={24} />}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-xl text-brand-charcoal group-hover:text-brand-red transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-text-muted text-sm">
                          {service.tagline}
                        </p>
                      </div>
                      <ArrowRight
                        size={18}
                        className="text-text-muted group-hover:text-brand-red group-hover:translate-x-1 transition-all mt-1"
                      />
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((f) => (
                        <span
                          key={f}
                          className="text-xs text-text-muted bg-bg-surface px-2.5 py-1 rounded-md border border-border-subtle"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
