import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import GlassCard from '../components/ui/GlassCard';
import ScrollReveal from '../components/ui/ScrollReveal';

const categories = ['All', 'Market Report', 'Company News', 'Insights'];

const articles = [
  {
    id: 1,
    slug: 'quail-lakes-phase-2-breaks-ground',
    title: 'Quail Lakes Phase 2 Breaks Ground',
    excerpt:
      'The second phase of Quail Lakes Office Park is officially underway, bringing additional Class A office space to the NW 150th corridor.',
    category: 'Company News',
    date: 'Feb 10, 2026',
    readTime: '3 min read',
  },
  {
    id: 2,
    slug: 'baker-first-best-in-oklahoma-2026',
    title: 'Baker First Named Best in Oklahoma Again',
    excerpt:
      'For the second consecutive year, Baker First Commercial Real Estate has been recognized as the Best Commercial Real Estate Company in Oklahoma.',
    category: 'Company News',
    date: 'Jan 28, 2026',
    readTime: '2 min read',
  },
  {
    id: 3,
    slug: '2026-cre-outlook',
    title: '2026 Commercial Real Estate Outlook: Opportunities Ahead',
    excerpt:
      'Our annual market forecast examines key trends in office, industrial, retail, and mixed-use sectors across the Oklahoma City metro area.',
    category: 'Insights',
    date: 'Jan 15, 2026',
    readTime: '8 min read',
  },
  {
    id: 4,
    slug: 'okc-industrial-market-growth',
    title: 'OKC Industrial Market Sees Strong Growth',
    excerpt:
      'Oklahoma City\'s industrial sector continues to outperform, with new distribution and logistics facilities driving record absorption levels.',
    category: 'Market Report',
    date: 'Dec 20, 2025',
    readTime: '4 min read',
  },
  {
    id: 5,
    slug: 'baker-first-community-investment',
    title: 'Baker First Announces Community Investment Initiative',
    excerpt:
      'A new program supports workforce development and community revitalization across the Oklahoma City metro area.',
    category: 'Company News',
    date: 'Dec 5, 2025',
    readTime: '3 min read',
  },
  {
    id: 6,
    slug: 'office-market-trends-remote-work',
    title: 'How Remote Work is Reshaping OKC Office Demand',
    excerpt:
      'Flexible workspace, flight to quality, and suburban migration are driving new patterns in the Oklahoma City office market.',
    category: 'Insights',
    date: 'Nov 18, 2025',
    readTime: '6 min read',
  },
];

export default function News() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <>
      <PageHero
        badge="Stay Informed"
        title="News &"
        highlight="Insights"
        description="Market reports, company updates, and expert analysis from the Baker First team."
      />

      {/* Filters */}
      <section className="px-4 sm:px-6 lg:px-8 -mt-4 relative z-10">
        <div className="container-max mx-auto">
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-heading font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-brand-red text-white'
                    : 'bg-white border border-border-subtle text-text-secondary hover:text-brand-charcoal shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="section-padding">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article, i) => (
              <ScrollReveal key={article.id} delay={i * 80}>
                <Link to={`/news/${article.slug}`}>
                  <GlassCard className="group h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-heading font-semibold text-brand-red bg-brand-red-light px-2.5 py-1 rounded-full">
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
                      <span className="text-text-muted text-xs">
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-brand-red font-heading font-medium group-hover:gap-2 transition-all">
                        Read <ArrowRight size={14} />
                      </span>
                    </div>
                  </GlassCard>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
