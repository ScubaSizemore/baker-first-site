import Badge from './Badge';

export default function PageHero({ badge, title, highlight, description }) {
  return (
    <section className="relative pt-20 pb-8 sm:pt-24 sm:pb-12 section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-surface to-white" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-brand-red/5 rounded-full blur-[100px]" />

      <div className="container-max mx-auto relative z-10">
        {badge && <Badge className="mb-4">{badge}</Badge>}
        <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[0.95] mb-4 text-brand-charcoal">
          {title}{' '}
          {highlight && <span className="text-brand-red">{highlight}</span>}
        </h1>
        {description && (
          <p className="text-text-secondary text-base sm:text-xl max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
