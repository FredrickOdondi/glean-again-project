import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Search, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Lock, 
  Globe 
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Assistant',
      description: 'Every employee gets a personalized AI assistant that knows your company inside and out.',
      badge: 'Core Feature',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Search,
      title: 'Smart Search',
      description: 'Find anything across all your company documents, emails, and conversations instantly.',
      badge: 'Popular',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'AI Agents',
      description: 'Deploy specialized AI agents for sales, support, engineering, and more.',
      badge: 'New',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with SOC 2 compliance and enterprise SSO integration.',
      badge: 'Enterprise',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Get answers in seconds, not minutes. Powered by advanced vector search.',
      badge: 'Fast',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Track usage patterns and get insights into how your team uses AI.',
      badge: 'Analytics',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything you need to{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              work smarter
            </span>
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            From AI assistants to specialized agents, we've built the complete platform 
            for enterprise AI that actually works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <p className="text-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-foreground mb-4">
            Ready to see these features in action?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Badge className="gradient-card border-0 px-6 py-3 text-base font-medium cursor-pointer hover:scale-105 transition-transform">
              Schedule a demo
            </Badge>
            <Badge variant="outline" className="px-6 py-3 text-base font-medium cursor-pointer hover:bg-muted transition-colors">
              View documentation
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
