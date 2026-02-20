import { useCountUp } from '../../hooks/useCountUp';

export default function StatCounter({
  end,
  suffix = '',
  prefix = '',
  label,
  duration = 2000,
  decimals = 0,
  dark = false,
}) {
  const { ref, display } = useCountUp({
    end,
    suffix,
    prefix,
    duration,
    decimals,
  });

  return (
    <div ref={ref} className="text-center">
      <div className={`font-data text-3xl sm:text-4xl font-bold ${dark ? 'text-white' : 'text-brand-red'}`}>
        {display}
      </div>
      <div className={`text-sm mt-1 font-heading ${dark ? 'text-gray-400' : 'text-text-secondary'}`}>
        {label}
      </div>
    </div>
  );
}
