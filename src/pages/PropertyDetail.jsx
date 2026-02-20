import { useParams, Navigate, Link } from 'react-router-dom';
import { MapPin, Maximize2, Calendar, CheckCircle, ArrowLeft } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import GlassCard from '../components/ui/GlassCard';
import ScrollReveal from '../components/ui/ScrollReveal';
import Button from '../components/ui/Button';
import { getPropertyById } from '../data/properties';

export default function PropertyDetail() {
  const { id } = useParams();
  const property = getPropertyById(id);

  if (!property) return <Navigate to="/properties" replace />;

  return (
    <>
      <PageHero
        badge={property.type}
        title={property.title}
        description={property.address}
      />

      <section className="section-padding">
        <div className="container-max mx-auto">
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-brand-red text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Properties
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Property image */}
              <div className="aspect-[16/9] rounded-2xl bg-bg-surface-2 border border-border-subtle overflow-hidden">
                {property.image ? (
                  <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-bg-surface" />
                )}
              </div>

              <ScrollReveal>
                <h2 className="font-heading font-semibold text-xl text-brand-charcoal mb-4">
                  Description
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  {property.description}
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="font-heading font-semibold text-xl text-brand-charcoal mb-4">
                  Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.features.map((f) => (
                    <div
                      key={f}
                      className="flex items-center gap-3 text-text-secondary"
                    >
                      <CheckCircle size={16} className="text-brand-red shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <GlassCard>
                <div className="space-y-4">
                  <div>
                    <span className="text-text-muted text-xs font-heading uppercase tracking-wider">
                      Status
                    </span>
                    <p
                      className={`font-heading font-semibold ${
                        property.status === 'Available'
                          ? 'text-brand-red'
                          : property.status === 'Pre-Leasing'
                          ? 'text-accent-cyan'
                          : 'text-accent-gold'
                      }`}
                    >
                      {property.status}
                    </p>
                  </div>
                  <div>
                    <span className="text-text-muted text-xs font-heading uppercase tracking-wider">
                      Price
                    </span>
                    <p className="font-data text-brand-red font-semibold text-lg">
                      {property.price}
                    </p>
                  </div>
                  <div className="flex gap-6">
                    <div>
                      <span className="text-text-muted text-xs font-heading uppercase tracking-wider">
                        Size
                      </span>
                      <p className="text-brand-charcoal flex items-center gap-1.5">
                        <Maximize2 size={14} />
                        {property.size}
                      </p>
                    </div>
                    <div>
                      <span className="text-text-muted text-xs font-heading uppercase tracking-wider">
                        Year
                      </span>
                      <p className="text-brand-charcoal flex items-center gap-1.5">
                        <Calendar size={14} />
                        {property.year}
                      </p>
                    </div>
                  </div>
                  <div>
                    <span className="text-text-muted text-xs font-heading uppercase tracking-wider">
                      Location
                    </span>
                    <p className="text-brand-charcoal flex items-center gap-1.5">
                      <MapPin size={14} />
                      {property.address}
                    </p>
                  </div>
                </div>
              </GlassCard>

              <Button to="/contact" className="w-full">
                Inquire About This Property
              </Button>
              <Button to="/properties" variant="glass" className="w-full">
                View All Properties
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
