import React from 'react';
import Navigation from '@/components/ui/navigation';
import HeroSection from '@/components/HeroSection';
import CustomerLogos from '@/components/CustomerLogos';
import AIDemo from '@/components/AIDemo';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <CustomerLogos />
      <AIDemo />
      <Footer />
    </div>
  );
};

export default Index;
