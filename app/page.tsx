import { HeroSection } from '@/components/HeroSection';
import { AppDownloadSection } from '@/components/AppDownloadSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { StatsSection } from '@/components/StatsSection';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <AppDownloadSection />
    </div>
  );
}