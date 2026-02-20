import { ArrowRight, Clock } from 'lucide-react';
import GlassCard from '../../ui/GlassCard';
import Button from '../../ui/Button';
import Badge from '../../ui/Badge';
import ScrollReveal from '../../ui/ScrollReveal';

const articles = [
  {
    id: 1,
    title: 'Quail Lakes Phase 2 Breaks Ground',
    excerpt:
      'The second phase of Quail Lakes Office Park is officially underway, bringing additional Class A office space to the NW 150th corridor.',
    category: 'Development',
    date: 'Feb 10, 2026',
    readTime: '3 min read',
  },
  {
    id: 2,
    title: 'Baker First Named Best in Oklahoma Again',
    excerpt:
      'For the second consecutive year, Baker First Commercial Real Estate has been recognized as the Best Commercial Real Estate Company in Oklahoma.',
    category: 'Award',
    date: 'Jan 28, 2026',
    readTime: '2 min read',
  },
  {
    id: 3,
    title: 'OKC Commercial Market Q4 Report',
    excerpt:
      'Our quarterly market analysis examines key trends in office, retail, and industrial sectors across the Oklahoma City metro area.',
    category: 'Market Update',
    date: 'Jan 15, 2026',
    readTime: '6 min read',
  },
];

const categoryColors = {
  Development: 'text-brand-red bg-brand-red-light',
  Award: 'text-accent-gold bg-accent-gold/10',
  'Market Update': 'text-accent-cyan bg-accent-cyan/10',
};

export default function RecentNews() {
  return (
    <section className="section-padding bg-bg-surface">
      <div className="container-max mx-auto">
        <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <Badge className="mb-4">Latest Updates</Badge>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-brand-charcoal">
              News & <span className="text-brand-red">Insights</span>
            </h2>
          </div>
          <Button to="/news" variant="glass" size="sm">
            View All News
            <ArrowRight size={16} />
          </Button>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <ScrollReveal key={article.id} delay={index * 100}>
              <GlassCard className="group h-full flex flex-col">
                {/* Category & date */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-heading font-semibold px-2.5 py-1 rounded-full ${categoryColors[article.category] || 'text-brand-red bg-brand-red-light'}`}>
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-text-muted text-xs">
                    <Clock size={12} />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="font-heading font-semibold text-lg text-brand-charcoal group-hover:text-brand-red transition-colors mb-3">
                  {article.title}
                </h3>

                <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
                  <span className="text-text-muted text-xs">{article.date}</span>
                  <span className="flex items-center gap-1 text-sm text-brand-red font-heading font-medium group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight size={14} />
                  </span>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
