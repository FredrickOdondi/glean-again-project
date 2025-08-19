import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import ProductSelection from './ProductSelection';
import ChatInterface from '../chat/ChatInterface';
import { Product } from '@/types/auth';
import { LogOut } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  if (!user) return null;

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null);
  };

  if (selectedProduct) {
    return <ChatInterface product={selectedProduct} onBack={handleBackToProducts} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <span className="text-xl font-bold">Orion Tech</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Card className="p-3">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-muted-foreground">{user.role}</p>
                  </div>
                </div>
              </Card>
              
              <Button variant="outline" onClick={logout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}!</h1>
          <p className="text-muted-foreground">Choose a product to start working with AI-powered solutions.</p>
        </div>
        
        <ProductSelection onSelectProduct={handleSelectProduct} />
      </main>
    </div>
  );
};

export default Dashboard;