import { AudienceSection } from '../components/home/AudienceSection';
import { ExampleCarousel } from '../components/home/ExampleCarousel';
import { FAQSection } from '../components/home/FAQSection';
import { FeatureMarquee } from '../components/home/FeatureMarquee';
import { FinalCTA } from '../components/home/FinalCTA';
import { HeroSection } from '../components/home/HeroSection';
import { HowItWorksSection } from '../components/home/HowItWorksSection';
import { PricingSection } from '../components/home/PricingSection';
import { ProductDemoSection } from '../components/home/ProductDemoSection';
import { QualitySection } from '../components/home/QualitySection';
import { usePageTitle } from '../hooks/usePageTitle';

export function HomePage() {
  usePageTitle(
    'SiteLike | Describe Your Idea. Build the Website.',
    'SiteLike is an AI-powered website builder designed to turn a simple description into a polished, responsive website.',
  );

  return (
    <>
      <HeroSection />
      <FeatureMarquee />
      <HowItWorksSection />
      <ProductDemoSection />
      <QualitySection />
      <ExampleCarousel />
      <AudienceSection />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
