import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const animations = {
  'fade-up': {
    hidden: 'opacity-0 translate-y-8',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-down': {
    hidden: 'opacity-0 -translate-y-8',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-left': {
    hidden: 'opacity-0 translate-x-8',
    visible: 'opacity-100 translate-x-0',
  },
  'fade-right': {
    hidden: 'opacity-0 -translate-x-8',
    visible: 'opacity-100 translate-x-0',
  },
  'scale': {
    hidden: 'opacity-0 scale-95',
    visible: 'opacity-100 scale-100',
  },
};

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
  as: Component = 'div',
  threshold,
  rootMargin,
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold, rootMargin });
  const { hidden, visible } = animations[animation] || animations['fade-up'];

  return (
    <Component
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? visible : hidden
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}
