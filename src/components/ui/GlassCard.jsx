export default function GlassCard({
  children,
  className = '',
  hover = true,
  padding = true,
  as: Component = 'div',
  ...props
}) {
  return (
    <Component
      className={`bg-white border border-border-subtle rounded-2xl shadow-card ${
        hover
          ? 'hover:shadow-card-hover hover:border-border-hover transition-all duration-300'
          : ''
      } ${padding ? 'p-4 sm:p-6' : ''} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
