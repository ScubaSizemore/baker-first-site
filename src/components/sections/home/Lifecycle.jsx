import { Search, Compass, Hammer, Building2, ClipboardList, TrendingUp } from 'lucide-react';
import ScrollReveal from '../../ui/ScrollReveal';
import Badge from '../../ui/Badge';

const stages = [
  {
    icon: Search,
    title: 'Land Acquisition',
    description: 'Identifying prime opportunities and securing strategic sites.',
  },
  {
    icon: Compass,
    title: 'Development',
    description: 'Feasibility studies, entitlements, and project planning.',
  },
  {
    icon: Hammer,
    title: 'Construction',
    description: 'Ground-up builds and tenant improvements, on time and on budget.',
  },
  {
    icon: ClipboardList,
    title: 'Leasing',
    description: 'Strategic tenant placement and lease negotiation.',
  },
  {
    icon: Building2,
    title: 'Management',
    description: 'Day-to-day operations, maintenance, and tenant satisfaction.',
  },
  {
    icon: TrendingUp,
    title: 'Brokerage',
    description: 'Investment sales, dispositions, and portfolio optimization.',
  },
];

export default function Lifecycle() {
  return (
    <section className="section-padding bg-bg-surface">
      <div className="container-max mx-auto">
        <ScrollReveal className="text-center mb-16">
          <Badge className="mb-4">Our Approach</Badge>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-4 text-brand-charcoal">
            From Vision to <span className="text-brand-red">Value</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Baker First guides you through every phase of the commercial real
            estate lifecycle — all under one roof.
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[8%] right-[8%] h-px bg-gradient-to-r from-brand-red/20 via-brand-red/10 to-brand-red/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
            {stages.map((stage, index) => (
              <ScrollReveal key={stage.title} delay={index * 100}>
                <div className="text-center group">
                  <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white border border-border-subtle shadow-card group-hover:shadow-card-hover group-hover:border-brand-red/20 transition-all duration-300 mb-4 mx-auto">
                    <stage.icon
                      size={28}
                      className="text-brand-red"
                    />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-red text-white flex items-center justify-center text-xs font-data font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-brand-charcoal mb-2 text-sm">
                    {stage.title}
                  </h3>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
