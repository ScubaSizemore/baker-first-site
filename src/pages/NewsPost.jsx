import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';

export default function NewsPost() {
  const { slug } = useParams();

  return (
    <>
      <PageHero
        badge="Article"
        title="News"
        highlight="Post"
        description="Full article content will be loaded here."
      />

      <section className="section-padding">
        <div className="container-max mx-auto max-w-3xl">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-brand-red text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to News
          </Link>

          <ScrollReveal>
            <article className="prose max-w-none">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-8">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  February 10, 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} />
                  5 min read
                </span>
              </div>

              <div className="space-y-6 text-text-secondary leading-relaxed">
                <p>
                  This is a placeholder for the full article content. In a
                  production implementation, article content would be fetched
                  from a CMS or API based on the slug parameter:{' '}
                  <code className="text-brand-red bg-brand-red-light px-2 py-0.5 rounded text-sm">
                    {slug}
                  </code>
                </p>
                <p>
                  The Baker First news section will feature market reports,
                  company announcements, and expert insights about the Oklahoma
                  City commercial real estate market.
                </p>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
