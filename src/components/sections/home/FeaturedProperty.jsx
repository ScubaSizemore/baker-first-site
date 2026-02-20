import { ArrowRight, MapPin, Maximize2, Calendar } from 'lucide-react';
import { featuredProperties } from '../../../data/properties';
import GlassCard from '../../ui/GlassCard';
import Button from '../../ui/Button';
import Badge from '../../ui/Badge';
import ScrollReveal from '../../ui/ScrollReveal';

const statusColors = {
  Available: 'bg-brand-red-light text-brand-red',
  'In Development': 'bg-accent-gold/20 text-accent-gold',
  Leased: 'bg-accent-cyan/20 text-accent-cyan',
};

export default function FeaturedProperty() {
  return (
    <section className="section-padding">
      <div className="container-max mx-auto">
        <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <Badge className="mb-4">Featured Listings</Badge>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl text-brand-charcoal">
              Available <span className="text-brand-red">Properties</span>
            </h2>
          </div>
          <Button to="/properties" variant="glass" size="sm">
            View All
            <ArrowRight size={16} />
          </Button>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProperties.map((property, index) => (
            <ScrollReveal key={property.id} delay={index * 100}>
              <GlassCard padding={false} className="group overflow-hidden">
                {/* Property image */}
                <div className="relative h-48 bg-bg-surface-2 overflow-hidden">
                  {property.image && (
                    <img src={property.image} alt={property.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  )}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`text-xs font-heading font-semibold px-2.5 py-1 rounded-full ${
                        statusColors[property.status] || 'bg-brand-red-light text-brand-red'
                      }`}
                    >
                      {property.status}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="text-xs font-heading font-semibold px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-sm text-text-secondary border border-border-subtle">
                      {property.type}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-heading font-semibold text-lg text-brand-charcoal group-hover:text-brand-red transition-colors mb-2">
                    {property.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-text-muted text-sm mb-3">
                    <MapPin size={14} />
                    {property.address}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-text-secondary mb-4">
                    <span className="flex items-center gap-1.5">
                      <Maximize2 size={14} />
                      {property.size}
                    </span>
                    {property.year && (
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {property.year}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
                    <span className="font-data text-brand-red font-semibold text-sm">
                      {property.price}
                    </span>
                    <ArrowRight
                      size={16}
                      className="text-text-muted group-hover:text-brand-red group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
