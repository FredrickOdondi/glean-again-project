import React from 'react';
import Navigation from '@/components/ui/navigation';
import HeroSection from '@/components/HeroSection';
import CustomerLogos from '@/components/CustomerLogos';
import FeaturesSection from '@/components/FeaturesSection';
import AIDemo from '@/components/AIDemo';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <CustomerLogos />
      <FeaturesSection />
      <AIDemo />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
