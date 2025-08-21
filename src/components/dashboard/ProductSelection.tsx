import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/auth';
import { Bot, Users, Search, BarChart3, ArrowRight, Sparkles } from 'lucide-react';

interface ProductSelectionProps {
  onSelectProduct: (product: Product) => void;
}

const ProductSelection: React.FC<ProductSelectionProps> = ({ onSelectProduct }) => {
  const products = [
    {
      name: 'AI Assistants' as Product,
      icon: Bot,
      description: 'Intelligent assistants to help with your daily tasks and workflows',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      features: ['Task automation', 'Smart responses', '24/7 availability'],
      status: 'Popular'
    },
    {
      name: 'AI Agents' as Product,
      icon: Users,
      description: 'Autonomous agents that work on your behalf to complete complex tasks',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      features: ['Autonomous operation', 'Multi-step workflows', 'Learning capabilities'],
      status: 'New'
    },
    {
      name: 'Search' as Product,
      icon: Search,
      description: 'Advanced search capabilities across your organization and data sources',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      features: ['Semantic search', 'Real-time indexing', 'Advanced filters'],
      status: 'Beta'
    },
    {
      name: 'Analytics' as Product,
      icon: BarChart3,
      description: 'Data insights and analytics dashboard for informed decision making',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      features: ['Real-time data', 'Custom dashboards', 'Predictive insights'],
      status: 'Coming Soon'
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Choose Your Product</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Select a product to get started with AI-powered solutions that will transform your workflow
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {products.map((product) => {
          const Icon = product.icon;
          return (
            <Card 
              key={product.name} 
              className={`
                group hover:shadow-md transition-all duration-200 cursor-pointer border border-gray-200/60 hover:border-gray-300/80
                hover:bg-gray-50/30
              `}
              onClick={() => onSelectProduct(product.name)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className={`p-2.5 rounded-lg ${product.bgColor} ${product.borderColor} border`}>
                    <Icon className={`h-5 w-5 ${product.color}`} />
                  </div>
                  {product.status && (
                    <span className={`
                      px-2.5 py-1 rounded-full text-xs font-medium
                      ${product.bgColor} ${product.color} border ${product.borderColor}
                    `}>
                      {product.status}
                    </span>
                  )}
                </div>
                
                <div>
                  <CardTitle className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed">
                    {product.description}
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                {/* Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, index) => (
                      <span 
                        key={index}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200/60"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant="outline"
                  className="w-full border-gray-200/60 text-gray-700 hover:text-gray-900 hover:bg-gray-50 hover:border-gray-300/80 transition-all duration-200 group-hover:shadow-sm"
                  size="default"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="text-center pt-8">
        <div className="inline-flex items-center space-x-2 text-gray-500 text-sm">
          <Sparkles className="h-4 w-4" />
          <span>More products coming soon</span>
        </div>
      </div>
    </div>
  );
};

export default ProductSelection;