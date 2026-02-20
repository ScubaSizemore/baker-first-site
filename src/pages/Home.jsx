import Hero from '../components/sections/home/Hero';
import ClientLogos from '../components/sections/home/ClientLogos';
import ServicesGrid from '../components/sections/home/ServicesGrid';
import Lifecycle from '../components/sections/home/Lifecycle';
import FeaturedProperty from '../components/sections/home/FeaturedProperty';
import StatsCounter from '../components/sections/home/StatsCounter';
import RecentNews from '../components/sections/home/RecentNews';
import CTABanner from '../components/sections/home/CTABanner';

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <ServicesGrid />
      <Lifecycle />
      <FeaturedProperty />
      <StatsCounter />
      <RecentNews />
      <CTABanner />
    </>
  );
}
