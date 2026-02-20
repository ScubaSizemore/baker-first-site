import { useEffect, useRef, useState } from 'react';

export default function VideoBackground({
  src,
  poster,
  overlay = true,
  className = '',
  children,
}) {
  const videoRef = useRef(null);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(mq.matches);
    const handler = (e) => setPrefersReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (videoRef.current && prefersReduced) {
      videoRef.current.pause();
    }
  }, [prefersReduced]);

  return (
    <div className={`relative overflow-hidden bg-bg-dark text-white ${className}`}>
      {src && !prefersReduced ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#242424] to-[#1A1A1A]" />
      )}

      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/60 via-[#1A1A1A]/40 to-[#1A1A1A]/80" />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}
