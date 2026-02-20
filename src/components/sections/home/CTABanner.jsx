import { ArrowRight, Phone } from 'lucide-react';
import Button from '../../ui/Button';
import ScrollReveal from '../../ui/ScrollReveal';

export default function CTABanner() {
  return (
    <section className="section-padding bg-bg-surface">
      <div className="container-max mx-auto">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white border border-border-subtle shadow-card p-5 sm:p-12 lg:p-16">
            {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl mb-3 text-brand-charcoal">
                  Ready to Make Your{' '}
                  <span className="text-brand-red">Next Move?</span>
                </h2>
                <p className="text-text-secondary text-base sm:text-lg max-w-lg">
                  Whether you&apos;re buying, selling, developing, or managing
                  — Baker First has the expertise to maximize your investment.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Button to="/contact" size="lg">
                  Schedule a Consultation
                  <ArrowRight size={18} />
                </Button>
                <Button
                  href="tel:+14059477200"
                  variant="glass"
                  size="lg"
                >
                  <Phone size={18} />
                  Call 405-947-7200
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
