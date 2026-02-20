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
        className="absolute inset-x-0 top-14 sm:-top-10 bottom-0 sm:bottom-24 w-full object-contain"
      >
        <source src="/assets/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Subtle bottom gradient for readability over buttons */}
      <div className="absolute bottom-0 left-0 right-0 h-6 sm:h-64 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />

      {/* CTA buttons */}
      <div className="absolute inset-x-0 px-6 sm:px-0 sm:left-28 lg:left-40 sm:right-auto bottom-[5%] sm:bottom-[40%] z-10">
        <div className="flex flex-col items-center sm:items-start gap-3 opacity-0 animate-fade-in-up [animation-delay:600ms] max-w-[360px] mx-auto sm:mx-0">
          <Button to="/properties" size="lg" className="w-full sm:w-auto justify-center">
            Explore Our Properties
            <ArrowRight size={18} />
          </Button>
          <Button to="/contact" variant="glass" size="lg" className="w-full sm:w-auto justify-center">
            Get In Touch
          </Button>
        </div>
      </div>

    </section>
  );
}
