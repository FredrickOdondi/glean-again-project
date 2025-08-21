import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/contexts/AuthContext';
import { UserRole } from '@/types/auth';
import { useToast } from '@/hooks/use-toast';
import { Mail, Lock, Users, Loader2, Sparkles } from 'lucide-react';

interface LoginFormProps {
  onSwitchToRegister: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSwitchToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('Engineering');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password || !role) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const success = await login(email, password, role);
      
      if (success) {
        toast({
          title: "Success",
          description: "Logged in successfully!",
        });
      } else {
        toast({
          title: "Error",
          description: "Invalid credentials. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred. Please try again.",
        variant: "destructive",
      });
    }
    
    setIsLoading(false);
  };

  return (
    <Card className="w-full max-w-md mx-auto backdrop-blur-sm bg-background/80 border-border/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
      <CardHeader className="text-center space-y-4 pb-6">
        <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-4">
          <Sparkles className="w-8 h-8 text-primary" />
        </div>
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Welcome back
        </CardTitle>
        <CardDescription className="text-muted-foreground text-base">
          Sign in to your Zillo account to continue
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-3">
            <Label htmlFor="email" className="text-sm font-medium text-foreground flex items-center space-x-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>Email Address</span>
            </Label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-10 h-12 border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all duration-200 bg-background/50 backdrop-blur-sm"
              />
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </div>
          </div>
          
          <div className="space-y-3">
            <Label htmlFor="password" className="text-sm font-medium text-foreground flex items-center space-x-2">
              <Lock className="w-4 h-4 text-primary" />
              <span>Password</span>
            </Label>
            <div className="relative">
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="pl-10 h-12 border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all duration-200 bg-background/50 backdrop-blur-sm"
              />
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </div>
          </div>
          
          <div className="space-y-3">
            <Label htmlFor="role" className="text-sm font-medium text-foreground flex items-center space-x-2">
              <Users className="w-4 h-4 text-primary" />
              <span>Department</span>
            </Label>
            <Select value={role} onValueChange={(value) => setRole(value as UserRole)}>
              <SelectTrigger className="h-12 border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all duration-200 bg-background/50 backdrop-blur-sm">
                <SelectValue placeholder="Select your department" />
              </SelectTrigger>
              <SelectContent className="bg-background/95 backdrop-blur-sm border-border/50">
                <SelectItem value="Engineering" className="hover:bg-primary/10 focus:bg-primary/10">Engineering</SelectItem>
                <SelectItem value="Sales" className="hover:bg-primary/10 focus:bg-primary/10">Sales</SelectItem>
                <SelectItem value="Support" className="hover:bg-primary/10 focus:bg-primary/10">Support</SelectItem>
                <SelectItem value="HR" className="hover:bg-primary/10 focus:bg-primary/10">HR</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button 
            type="submit" 
            className="w-full h-12 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none" 
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Signing in...</span>
              </div>
            ) : (
              <span>Sign in to Zillo</span>
            )}
          </Button>
        </form>
        
        <div className="pt-4 border-t border-border/30">
          <Button 
            variant="ghost" 
            onClick={onSwitchToRegister}
            className="w-full text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
          >
            Don't have an account? <span className="font-medium text-primary">Sign up</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginForm;