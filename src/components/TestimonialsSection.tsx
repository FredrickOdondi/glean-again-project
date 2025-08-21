import React from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'VP of Engineering',
      company: 'TechFlow Inc',
      avatar: 'SC',
      content: 'Zillo has transformed how our engineering team works. We can now find any piece of code, documentation, or conversation in seconds. It\'s like having a super-powered search engine for our entire company.',
      rating: 5,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Sales',
      company: 'CloudScale',
      avatar: 'MR',
      content: 'Our sales team is 3x more productive with Zillo. The AI assistant knows our product inside and out, and helps us prepare for every customer meeting with relevant insights.',
      rating: 5,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'CTO',
      company: 'HealthTech Solutions',
      avatar: 'EW',
      content: 'As a healthcare company, security is everything. Zillo not only meets our compliance requirements but has become the central nervous system of our knowledge management.',
      rating: 5,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Loved by teams{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              worldwide
            </span>
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            See how companies are transforming their workflows with AI that actually understands their business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="p-6 relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="h-12 w-12 text-muted-foreground" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className={`bg-gradient-to-r ${testimonial.color} text-white font-semibold`}>
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-foreground">{testimonial.role}</p>
                  <p className="text-sm text-foreground font-medium">{testimonial.company}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-foreground mb-2">98%</div>
            <div className="text-foreground">Customer Satisfaction</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-foreground mb-2">3.2x</div>
            <div className="text-foreground">Productivity Boost</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-foreground mb-2">500+</div>
            <div className="text-foreground">Enterprise Customers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-foreground mb-2">99.9%</div>
            <div className="text-foreground">Uptime SLA</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
