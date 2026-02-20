import ScrollReveal from '../../ui/ScrollReveal';
import StatCounter from '../../ui/StatCounter';

const stats = [
  { end: 37, suffix: '+', label: 'Years of Excellence' },
  { end: 2, suffix: 'M+', label: 'Square Feet Managed' },
  { end: 500, suffix: '+', label: 'Projects Completed' },
  { end: 4, label: 'Integrated Divisions' },
];

export default function StatsCounter() {
  return (
    <section className="section-padding bg-white border-y border-border-subtle">
      <div className="container-max mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
