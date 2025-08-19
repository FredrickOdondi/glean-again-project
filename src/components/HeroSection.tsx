import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        {/* Announcement Banner */}
        <div className="mb-8">
          <Badge className="gradient-card border-0 px-4 py-2 text-sm font-medium">
            August Drop 2025: New chat, Debug Mode, 3 quickstart agents. 
            <span className="text-primary ml-1 font-semibold">See what's new →</span>
          </Badge>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Work AI for{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              all.
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Give every employee an{' '}
            <span className="font-semibold text-foreground">AI Assistant</span>{' '}
            and{' '}
            <span className="font-semibold text-foreground">Agents</span>{' '}
            that put your company's knowledge to work.
          </p>
        </div>

        {/* Reviews */}
        <div className="flex items-center justify-center space-x-6 mb-8">
          <div className="flex items-center space-x-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium">4.5 (110+)</span>
          </div>
          <div className="flex items-center space-x-2">
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
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button size="lg" className="gradient-hero shadow-hero px-8 py-3 text-lg font-semibold">
            Get a demo
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3 text-lg font-semibold flex items-center space-x-2">
            <Play className="h-5 w-5" />
            <span>Watch video</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;