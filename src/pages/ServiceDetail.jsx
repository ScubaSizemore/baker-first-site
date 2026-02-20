import { useParams, Navigate } from 'react-router-dom';
import { TrendingUp, Building2, Hammer, BarChart3, CheckCircle } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import GlassCard from '../components/ui/GlassCard';
import ScrollReveal from '../components/ui/ScrollReveal';
import CTABanner from '../components/sections/home/CTABanner';
import { getServiceBySlug } from '../data/services';

const iconMap = { TrendingUp, Building2, Hammer, BarChart3 };

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/services" replace />;

  const Icon = iconMap[service.icon];

  return (
    <>
      <PageHero
        badge={service.tagline}
        title={service.title}
        description={service.description}
      />

      {/* Stats */}
      <section className="section-padding bg-bg-surface border-y border-border-subtle">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {service.stats.map((stat) => (
              <ScrollReveal key={stat.label}>
                <GlassCard className="text-center">
                  <div className="font-data text-3xl sm:text-4xl font-bold text-brand-red mb-1">
                    {stat.value}
                  </div>
                  <div className="text-text-secondary text-sm font-heading">
                    {stat.label}
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-max mx-auto">
          <ScrollReveal className="mb-12">
            <h2 className="font-display text-3xl sm:text-4xl mb-4 text-brand-charcoal">
              What We <span className="text-brand-red">Offer</span>
            </h2>
            <p className="text-text-secondary max-w-2xl">
              Our {service.title.toLowerCase()} services are designed to deliver
              measurable results at every stage.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, i) => (
              <ScrollReveal key={feature} delay={i * 80}>
                <GlassCard className="flex items-start gap-4 h-full">
                  <CheckCircle
                    size={20}
                    className="text-brand-red shrink-0 mt-0.5"
                  />
                  <div>
                    <h3 className="font-heading font-semibold text-brand-charcoal mb-1">
                      {feature}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      Expert {feature.toLowerCase()} services tailored to your
                      commercial real estate needs.
                    </p>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
