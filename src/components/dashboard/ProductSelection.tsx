import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/auth';
import { Bot, Users, Search, BarChart3 } from 'lucide-react';

interface ProductSelectionProps {
  onSelectProduct: (product: Product) => void;
}

const ProductSelection: React.FC<ProductSelectionProps> = ({ onSelectProduct }) => {
  const products = [
    {
      name: 'AI Assistants' as Product,
      icon: Bot,
      description: 'Intelligent assistants to help with your daily tasks',
      color: 'bg-blue-500',
    },
    {
      name: 'AI Agents' as Product,
      icon: Users,
      description: 'Autonomous agents that work on your behalf',
      color: 'bg-green-500',
    },
    {
      name: 'Search' as Product,
      icon: Search,
      description: 'Advanced search capabilities across your organization',
      color: 'bg-purple-500',
    },
    {
      name: 'Analytics' as Product,
      icon: BarChart3,
      description: 'Data insights and analytics dashboard',
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Choose Your Product</h2>
        <p className="text-muted-foreground">Select a product to get started with AI-powered solutions</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => {
          const Icon = product.icon;
          return (
            <Card key={product.name} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-lg ${product.color}`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => onSelectProduct(product.name)}
                  className="w-full"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSelection;