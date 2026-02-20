import { ArrowRight } from 'lucide-react';
import Button from '../../ui/Button';
import StatCounter from '../../ui/StatCounter';

export default function Hero() {
  return (
    <section className="relative flex flex-col bg-[#EAEAEA] overflow-hidden hero-section">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-x-0 top-0 sm:-top-10 bottom-0 sm:bottom-24 w-full object-contain"
      >
        <source src="/assets/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Subtle bottom gradient for readability over buttons */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-64 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />

      {/* CTA buttons */}
      <div className="absolute left-4 sm:left-28 lg:left-40 bottom-[28%] sm:bottom-[40%] z-10">
        <div className="flex flex-col gap-3 opacity-0 animate-fade-in-up [animation-delay:600ms]">
          <Button to="/properties" size="lg">
            Explore Our Properties
            <ArrowRight size={18} />
          </Button>
          <Button to="/contact" variant="glass" size="lg">
            Get In Touch
          </Button>
        </div>
      </div>

    </section>
  );
}
