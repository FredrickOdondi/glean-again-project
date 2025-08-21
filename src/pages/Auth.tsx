import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      {/* Back button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => window.location.href = '/'}
          className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-foreground hover:bg-background/80 backdrop-blur-sm transition-all duration-200 cursor-pointer rounded-md border border-border/50 bg-background/90"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to main site</span>
        </button>
      </div>

      {/* Company branding */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 gradient-hero rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl">Z</span>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground">Zillo</h1>
            <p className="text-sm text-muted-foreground">AI-Powered Company Knowledge</p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {isLogin ? (
            <LoginForm onSwitchToRegister={() => setIsLogin(false)} />
          ) : (
            <RegisterForm onSwitchToLogin={() => setIsLogin(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;