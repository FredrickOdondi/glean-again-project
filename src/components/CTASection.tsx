import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Zap, Shield } from 'lucide-react';

const CTASection = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Get started in minutes',
      description: 'No complex setup. Connect your data sources and start using AI immediately.'
    },
    {
      icon: Shield,
      title: 'Enterprise-grade security',
      description: 'SOC 2 compliant with enterprise SSO, RBAC, and data encryption at rest.'
    },
    {
      icon: CheckCircle,
      title: 'Free trial available',
      description: 'Try Zillo with your team for 14 days. No credit card required.'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <Card className="gradient-card border-0 p-12 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to transform your{' '}
              <span className="text-yellow-200">workplace?</span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto mb-8 leading-relaxed">
              Join 500+ companies that are already using AI to boost productivity, 
              improve decision-making, and create better employee experiences.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit.title}
                  className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-white text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Start free trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold transition-all duration-300"
              >
                Schedule a demo
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
