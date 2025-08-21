import React, { useMemo } from 'react';
import { Badge } from '@/components/ui/badge';
import { Building2, GraduationCap, Banknote, Shield, Zap } from 'lucide-react';

const CustomerLogos = () => {
  // Memoize the customers array to prevent recreation on each render
  const customers = useMemo(() => [
    { 
      name: 'Safaricom', 
      logo: 'S',
      industry: 'Telecommunications',
      icon: Zap,
      color: 'from-green-500 to-emerald-600'
    },
    { 
      name: 'Equity Bank', 
      logo: 'E',
      industry: 'Banking',
      icon: Banknote,
      color: 'from-blue-500 to-cyan-600'
    },
    { 
      name: 'KCB Bank', 
      logo: 'K',
      industry: 'Banking',
      icon: Banknote,
      color: 'from-red-500 to-pink-600'
    },
    { 
      name: 'I&M Bank', 
      logo: 'I&M',
      industry: 'Banking',
      icon: Banknote,
      color: 'from-purple-500 to-indigo-600'
    },
    { 
      name: 'Kenyatta University', 
      logo: 'KU',
      industry: 'Education',
      icon: GraduationCap,
      color: 'from-orange-500 to-red-600'
    },
    { 
      name: 'TechCorp', 
      logo: 'TC',
      industry: 'Technology',
      icon: Building2,
      color: 'from-indigo-500 to-blue-600'
    }
  ], []);

  // Debug log to check if component is rendering multiple times
  console.log('CustomerLogos component rendered, customers count:', customers.length);

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Trusted by leading companies{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              worldwide
            </span>
          </h3>
          <p className="text-foreground max-w-2xl mx-auto">
            Join hundreds of organizations that trust Zillo to power their AI initiatives
          </p>
        </div>
        
        {/* Company Logos - Simplified layout to prevent duplication */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center items-start gap-12">
            {customers.map((customer, index) => (
              <div
                key={`customer-${customer.name}-${index}`}
                className="flex flex-col items-center text-center w-32"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${customer.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <customer.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-1">
                  {customer.name}
                </h4>
                <p className="text-xs text-foreground">
                  {customer.industry}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mb-16">
          <div className="p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:shadow-lg transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-foreground">Enterprise Customers</div>
          </div>
          <div className="p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:shadow-lg transition-all duration-300">
            <div className="text-3xl font-bold text-secondary mb-2">50+</div>
            <div className="text-foreground">Countries</div>
          </div>
          <div className="p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:shadow-lg transition-all duration-300">
            <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
            <div className="text-foreground">Uptime SLA</div>
          </div>
          <div className="p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:shadow-lg transition-all duration-300">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-foreground">Support</div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="text-center">
          <p className="text-sm text-foreground mb-6">Certified and Compliant</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium">SOC 2 Type II</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium">GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium">ISO 27001</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerLogos;