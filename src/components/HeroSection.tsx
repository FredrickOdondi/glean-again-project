import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Star, ArrowRight, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Announcement Banner */}
        <div className="mb-8 animate-fade-in">
          <Badge className="gradient-card border-0 px-4 py-2 text-sm font-medium hover:scale-105 transition-transform cursor-pointer">
            <Sparkles className="h-4 w-4 mr-2" />
            August Drop 2025: New chat, Debug Mode, 3 quickstart agents. 
            <span className="text-primary ml-1 font-semibold">See what's new →</span>
          </Badge>
        </div>

        {/* Main Headline */}
        <div className="max-w-5xl mx-auto mb-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            Work AI for{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-blue-500 bg-clip-text text-transparent animate-gradient">
              all.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground leading-relaxed max-w-3xl mx-auto">
            Give every employee an{' '}
            <span className="font-semibold text-foreground">AI Assistant</span>{' '}
            and{' '}
            <span className="font-semibold text-foreground">Agents</span>{' '}
            that put your company's knowledge to work.
          </p>
        </div>

        {/* Reviews */}
        <div className="flex items-center justify-center space-x-6 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium">4.5 (110+)</span>
          </div>
          <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
            <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">G</span>
            </div>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium">4.8 (130+)</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="gradient-hero shadow-hero px-8 py-3 text-lg font-semibold hover:scale-105 transition-all duration-300 group">
            Get a demo
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3 text-lg font-semibold flex items-center space-x-2 hover:bg-muted transition-colors">
            <Play className="h-5 w-5" />
            <span>Watch video</span>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-sm text-foreground mb-4">Trusted by leading companies worldwide</p>
          <div className="flex items-center justify-center space-x-8 opacity-60">
            <div className="w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">G</span>
            </div>
            <div className="w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">M</span>
            </div>
            <div className="w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">A</span>
            </div>
            <div className="w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">N</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;