export default function Badge({ children, className = '', variant = 'default' }) {
  const variants = {
    default: 'bg-brand-red-light text-brand-red border-brand-red/15',
    dark: 'bg-white/10 text-white/90 border-white/20',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-heading font-semibold border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
