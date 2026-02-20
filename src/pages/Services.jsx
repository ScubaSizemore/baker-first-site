import { Link } from 'react-router-dom';
import { TrendingUp, Building2, Hammer, BarChart3, ArrowRight } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import GlassCard from '../components/ui/GlassCard';
import ScrollReveal from '../components/ui/ScrollReveal';
import CTABanner from '../components/sections/home/CTABanner';
import { services } from '../data/services';

const iconMap = { TrendingUp, Building2, Hammer, BarChart3 };

export default function Services() {
  return (
    <>
      <PageHero
        badge="Our Services"
        title="Comprehensive"
        highlight="CRE Solutions"
        description="Four integrated divisions delivering full-lifecycle commercial real estate services across Oklahoma."
      />

      <section className="section-padding">
        <div className="container-max mx-auto space-y-16">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            const isEven = index % 2 === 0;

            return (
              <ScrollReveal key={service.id}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-brand-red-light border border-brand-red/10 text-brand-red">
                        {Icon && <Icon size={22} />}
                      </div>
                      <span className="text-text-muted text-sm font-heading font-semibold uppercase tracking-wider">
                        {service.tagline}
                      </span>
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl mb-4 text-brand-charcoal">
                      {service.title}
                    </h2>
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-text-secondary text-sm"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-brand-red font-heading font-semibold text-sm hover:gap-3 transition-all"
                    >
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </div>

                  <div className={!isEven ? 'lg:order-1' : ''}>
                    <GlassCard hover={false}>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {service.stats.map((stat) => (
                          <div key={stat.label} className="text-center">
                            <div className="font-data text-2xl font-bold text-brand-red">
                              {stat.value}
                            </div>
                            <div className="text-text-muted text-xs mt-1">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </GlassCard>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
