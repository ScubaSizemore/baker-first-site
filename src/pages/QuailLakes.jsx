import { MapPin, TreePine, Building2, Compass, ArrowRight } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import GlassCard from '../components/ui/GlassCard';
import ScrollReveal from '../components/ui/ScrollReveal';
import StatCounter from '../components/ui/StatCounter';
import Button from '../components/ui/Button';

const highlights = [
  {
    icon: Building2,
    title: 'Premier Office Development',
    description:
      'A 10-acre, 3-phase Class A office park designed for modern businesses seeking a prestigious Northwest OKC address.',
  },
  {
    icon: TreePine,
    title: 'Natural Beauty',
    description:
      'Reflective lake, walking trails, and native Oklahoma landscaping create an inspiring campus environment.',
  },
  {
    icon: Compass,
    title: 'Strategic Location',
    description:
      'Positioned at NW 150th & Serenita Ave with excellent access to major corridors and the growing NW OKC market.',
  },
  {
    icon: MapPin,
    title: 'NW Corridor Growth',
    description:
      'Located in one of Oklahoma City\'s fastest-growing commercial corridors with strong demographics and infrastructure.',
  },
];

const phases = [
  {
    name: 'Phase 1',
    status: 'In Development',
    details: 'Initial office buildings and lake amenity',
  },
  {
    name: 'Phase 2',
    status: 'Planning',
    details: 'Additional office space and campus expansion',
  },
  {
    name: 'Phase 3',
    status: 'Future',
    details: 'Final buildout completing the 10-acre vision',
  },
];

export default function QuailLakes() {
  return (
    <>
      <PageHero
        badge="Featured Development · Alliance Property Development"
        title="Quail Lakes"
        highlight="Office Park"
        description="A premier 10-acre office development in Northwest Oklahoma City."
      />

      {/* Stats bar */}
      <section className="px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="container-max mx-auto">
          <GlassCard>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <StatCounter end={10} label="Acres" />
              <StatCounter end={3} label="Phases" />
              <div className="text-center">
                <div className="font-data text-xl sm:text-3xl font-bold text-brand-red">NW 150th</div>
                <div className="text-text-secondary text-sm mt-1">& Serenita Ave</div>
              </div>
              <div className="text-center">
                <div className="font-data text-xl sm:text-3xl font-bold text-brand-red">Class A</div>
                <div className="text-text-secondary text-sm mt-1">Office Space</div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Vision image placeholder */}
      <section className="section-padding">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="aspect-[4/3] rounded-2xl bg-bg-surface-2 border border-border-subtle overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/assets/quail-lakes-video.mp4" type="video/mp4" />
                </video>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <h2 className="font-display text-2xl sm:text-4xl mb-4 text-brand-charcoal">
                The <span className="text-brand-red">Vision</span>
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Quail Lakes represents the future of Oklahoma City&apos;s
                commercial landscape — a thoughtfully designed office environment
                that harmonizes modern architecture with natural beauty.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Developed by Alliance Property Development, this 10-acre campus
                will deliver Class A office space in three phases, featuring a
                signature reflective lake, walking trails, and contemporary
                architectural design that sets a new standard for the NW OKC
                corridor.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-bg-surface">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <ScrollReveal key={h.title} delay={i * 100}>
                <GlassCard className="h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-red-light border border-brand-red/10 mb-4">
                    <h.icon size={22} className="text-brand-red" />
                  </div>
                  <h3 className="font-heading font-semibold text-brand-charcoal mb-2">
                    {h.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {h.description}
                  </p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="section-padding">
        <div className="container-max mx-auto">
          <ScrollReveal className="mb-12">
            <h2 className="font-display text-2xl sm:text-4xl mb-4 text-brand-charcoal">
              Development <span className="text-brand-red">Phases</span>
            </h2>
            <p className="text-text-secondary max-w-2xl">
              Quail Lakes will be delivered in three carefully planned phases,
              each building on the last to create a cohesive office campus.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {phases.map((phase, i) => (
              <ScrollReveal key={phase.name} delay={i * 100}>
                <GlassCard className="h-full">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-heading font-semibold text-brand-charcoal text-lg">
                      {phase.name}
                    </h3>
                    <span className={`text-xs font-heading font-semibold px-2.5 py-1 rounded-full ${
                      phase.status === 'In Development'
                        ? 'bg-brand-red-light text-brand-red'
                        : phase.status === 'Planning'
                        ? 'bg-accent-cyan/20 text-accent-cyan'
                        : 'bg-bg-surface text-text-muted border border-border-subtle'
                    }`}>
                      {phase.status}
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm">{phase.details}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-bg-surface">
        <div className="container-max mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-2xl sm:text-4xl mb-4 text-brand-charcoal">
              Interested in <span className="text-brand-red">Quail Lakes?</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto mb-8">
              Whether you&apos;re looking to lease, purchase, or learn more
              about the development, our team is ready to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/contact" size="lg">
                Schedule a Tour
                <ArrowRight size={18} />
              </Button>
              <Button href="tel:+14059477200" variant="glass" size="lg">
                Call 405-947-7200
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
