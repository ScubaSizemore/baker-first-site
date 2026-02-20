import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Maximize2, Calendar, ArrowRight, Search } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import GlassCard from '../components/ui/GlassCard';
import ScrollReveal from '../components/ui/ScrollReveal';
import { properties, propertyTypes, propertyStatuses } from '../data/properties';

export default function Properties() {
  const [typeFilter, setTypeFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (typeFilter !== 'All' && p.type !== typeFilter) return false;
      if (statusFilter !== 'All' && p.status !== statusFilter) return false;
      if (
        searchQuery &&
        !p.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !p.address.toLowerCase().includes(searchQuery.toLowerCase())
      )
        return false;
      return true;
    });
  }, [typeFilter, statusFilter, searchQuery]);

  return (
    <>
      <PageHero
        badge="Our Portfolio"
        title="Available"
        highlight="Properties"
        description="Browse our current listings across office, industrial, retail, and mixed-use properties."
      />

      {/* Filters */}
      <section className="px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="container-max mx-auto">
          <GlassCard className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
            <div className="relative flex-1">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
              />
              <input
                type="text"
                placeholder="Search properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-bg-surface border border-border-subtle rounded-lg pl-10 pr-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-red/30 focus:ring-1 focus:ring-brand-red/20 transition-colors"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {propertyTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setTypeFilter(type)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-heading font-medium transition-colors ${
                    typeFilter === type
                      ? 'bg-brand-red text-white'
                      : 'bg-bg-surface border border-border-subtle text-text-secondary hover:text-brand-charcoal'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            <div className="flex gap-2 flex-wrap">
              {propertyStatuses.map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-heading font-medium transition-colors ${
                    statusFilter === status
                      ? 'bg-brand-red text-white'
                      : 'bg-bg-surface border border-border-subtle text-text-secondary hover:text-brand-charcoal'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding">
        <div className="container-max mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-text-muted text-lg">
                No properties match your filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((property, index) => (
                <ScrollReveal key={property.id} delay={index * 80}>
                  <Link to={`/properties/${property.id}`}>
                    <GlassCard padding={false} className="group overflow-hidden">
                      <div className="relative h-48 bg-bg-surface-2 overflow-hidden">
                        {property.image && (
                          <img src={property.image} alt={property.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        )}
                        <div className="absolute top-3 left-3">
                          <span
                            className={`text-xs font-heading font-semibold px-2.5 py-1 rounded-full ${
                              property.status === 'Available'
                                ? 'bg-brand-red-light text-brand-red'
                                : property.status === 'Pre-Leasing'
                                ? 'bg-accent-cyan/20 text-accent-cyan'
                                : 'bg-accent-gold/20 text-accent-gold'
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
                          <span className="flex items-center gap-1.5">
                            <Calendar size={14} />
                            {property.year}
                          </span>
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
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
