import { Link } from 'react-router-dom';

const variants = {
  primary:
    'bg-brand-red text-white font-heading font-semibold px-6 py-3 rounded-lg hover:bg-brand-red-hover hover:shadow-red-glow transition-all duration-300',
  glass:
    'bg-white border border-border-subtle shadow-card hover:shadow-card-hover px-6 py-3 rounded-lg font-heading font-semibold transition-all duration-300 text-text-primary',
  'glass-dark':
    'bg-white/10 backdrop-blur-[20px] border border-white/15 hover:bg-white/15 px-6 py-3 rounded-lg font-heading font-semibold transition-all duration-300 text-white',
  outline:
    'border border-brand-red/30 text-brand-red hover:bg-brand-red/5 px-6 py-3 rounded-lg font-heading font-semibold transition-all duration-300',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base',
  lg: 'px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  ...props
}) {
  const classes = `${variants[variant]} ${sizes[size]} inline-flex items-center justify-center gap-2 ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
