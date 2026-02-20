import { Shield, Zap, Anchor, GraduationCap } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import GlassCard from '../components/ui/GlassCard';
import ScrollReveal from '../components/ui/ScrollReveal';
import { leadershipTeam, team } from '../data/team';

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description:
      'We conduct business with the highest ethical standards, building trust through transparency and honesty in every transaction.',
  },
  {
    icon: Zap,
    title: 'Responsiveness',
    description:
      'Your time matters. We act with urgency, delivering timely solutions and keeping you informed at every step.',
  },
  {
    icon: Anchor,
    title: 'Reliability',
    description:
      'Consistent performance, every project, every time. You can count on Baker First to deliver what we promise.',
  },
  {
    icon: GraduationCap,
    title: 'Expertise',
    description:
      'Decades of specialized knowledge across every commercial real estate discipline, backed by CCIM credentials and market intelligence.',
  },
];

const milestones = [
  { year: '1988', title: 'Baker First Founded', description: 'Rod Baker establishes Baker First Commercial Real Estate in Oklahoma City.' },
  { year: '1995', title: 'Alliance Property Development', description: 'Alliance Property Development is established to expand into ground-up development.' },
  { year: '2005', title: 'Full-Service Expansion', description: 'Construction division launches, completing the full-lifecycle service model.' },
  { year: '2020', title: '2M+ SF Under Management', description: 'Property management portfolio surpasses 2 million square feet.' },
  { year: '2024', title: 'Best in Oklahoma', description: 'Named "Best Commercial Real Estate Company in Oklahoma" for excellence in service.' },
  { year: '2025', title: 'Quail Lakes Office Park', description: 'Flagship development at NW 150th & Serenita Ave begins multi-phase construction.' },
];

export default function About() {
  return (
    <>
      <PageHero
        badge="Our Story"
        title="37 Years of"
        highlight="Building Oklahoma"
        description="From a single brokerage in 1988 to Oklahoma's premier full-lifecycle commercial real estate firm."
      />

      {/* Story */}
      <section className="section-padding">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="rounded-2xl border border-border-subtle overflow-hidden bg-bg-surface">
                <img src="/assets/legacy-leadership.png" alt="Baker First Legacy of Leadership" className="w-full h-auto object-contain" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <h2 className="font-display text-2xl sm:text-4xl mb-4 sm:mb-6 text-brand-charcoal">
                A Legacy of <span className="text-brand-red">Leadership</span>
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Founded by Rod Baker in 1988, Baker First began as a
                  commercial brokerage focused on serving the Oklahoma City
                  business community. Over nearly four decades, we have grown
                  into Oklahoma&apos;s preeminent full-service commercial real
                  estate firm.
                </p>
                <p>
                  In 1995, we established Alliance Property Development to
                  expand into ground-up development. Today, our four integrated
                  divisions — Brokerage &amp; Investing, Property Management,
                  Construction, and Development — provide comprehensive services
                  to clients ranging from local entrepreneurs to national
                  tenants.
                </p>
                <blockquote className="border-l-2 border-brand-red pl-4 italic text-brand-charcoal">
                  &ldquo;Our mission is to provide the most responsive and
                  effective delivery of service to our clients, maximizing their
                  satisfaction and return on investment.&rdquo;
                  <footer className="text-text-muted text-sm mt-2 not-italic">
                    — Rod Baker, President &amp; CEO
                  </footer>
                </blockquote>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-bg-surface">
        <div className="container-max mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-display text-2xl sm:text-4xl mb-4 text-brand-charcoal">
              Our <span className="text-brand-red">Journey</span>
            </h2>
          </ScrollReveal>
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-red/20 via-brand-red/10 to-brand-red/20 md:-translate-x-px" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <ScrollReveal key={m.year} delay={i * 100}>
                  <div className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-brand-red border-2 border-white -translate-x-1.5 md:-translate-x-1.5 mt-2 z-10" />

                    <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                      <span className="font-data text-brand-red font-bold text-sm">
                        {m.year}
                      </span>
                      <h3 className="font-heading font-semibold text-brand-charcoal mt-1">
                        {m.title}
                      </h3>
                      <p className="text-text-secondary text-sm mt-1">
                        {m.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-max mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-display text-2xl sm:text-4xl mb-4 text-brand-charcoal">
              Our <span className="text-brand-red">Values</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <GlassCard className="text-center h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand-red-light border border-brand-red/10 mb-4">
                    <v.icon size={24} className="text-brand-red" />
                  </div>
                  <h3 className="font-heading font-semibold text-brand-charcoal mb-2">
                    {v.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {v.description}
                  </p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="section-padding bg-bg-surface">
        <div className="container-max mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-display text-2xl sm:text-4xl mb-4 text-brand-charcoal">
              Our <span className="text-brand-red">Team</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Experienced professionals dedicated to delivering exceptional
              results for every client.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 100}>
                <GlassCard className="text-center h-full">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-2 border-brand-red/10"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-brand-red-light border border-brand-red/10 mx-auto mb-4 flex items-center justify-center">
                      <span className="font-heading font-bold text-xl text-brand-red">
                        {member.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </span>
                    </div>
                  )}
                  <h3 className="font-heading font-semibold text-brand-charcoal">
                    {member.name}
                  </h3>
                  <p className="text-brand-red text-sm font-heading mb-3">
                    {member.title}
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
