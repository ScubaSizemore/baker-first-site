const LOGO_TOKEN = 'pk_PHwf0pYtRLWbKulgfJJGmQ';

const clients = [
  { name: 'AT&T', domain: 'att.com' },
  { name: 'Edward Jones', domain: 'edwardjones.com' },
  { name: 'Little Caesars', domain: 'littlecaesars.com' },
  { name: 'Enterprise', domain: 'enterprise.com' },
  { name: 'Supercuts', domain: 'supercuts.com' },
  { name: 'Farmers Insurance', domain: 'farmers.com' },
  { name: 'H&R Block', domain: 'hrblock.com' },
];

function LogoTile({ client }) {
  const logoUrl = `https://img.logo.dev/${client.domain}?token=${LOGO_TOKEN}&retina=true`;

  return (
    <div className="flex-shrink-0 mx-3 sm:mx-6 group">
      <div className="w-[56px] h-[56px] sm:w-[72px] sm:h-[72px] rounded-xl sm:rounded-2xl bg-white border border-border-subtle shadow-card flex items-center justify-center p-2 sm:p-3 group-hover:shadow-card-hover group-hover:scale-105 transition-all duration-300 overflow-hidden">
        <img
          src={logoUrl}
          alt={client.name}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
      <p className="text-text-muted text-[11px] font-heading font-medium text-center mt-2 whitespace-nowrap group-hover:text-text-secondary transition-colors">
        {client.name}
      </p>
    </div>
  );
}

export default function ClientLogos() {
  const doubled = [...clients, ...clients];

  return (
    <section className="py-8 sm:py-14 border-b border-border-subtle bg-bg-surface overflow-hidden">
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-text-muted text-xs font-heading font-semibold uppercase tracking-widest text-center">
          Trusted by Industry Leaders
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-bg-surface to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-bg-surface to-transparent z-10" />

        <div className="flex animate-marquee items-start">
          {doubled.map((client, i) => (
            <LogoTile key={i} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
