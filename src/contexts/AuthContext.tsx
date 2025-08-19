import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, AuthState, UserRole } from '@/types/auth';

interface AuthContextType extends AuthState {
  login: (email: string, password: string, role: UserRole) => Promise<boolean>;
  register: (email: string, password: string, name: string, role: UserRole) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
  });

  const login = async (email: string, password: string, role: UserRole): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simple validation (in real app, this would be server-side)
    if (email && password.length >= 6) {
      const user: User = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        name: email.split('@')[0],
        role,
      };
      
      setAuthState({
        user,
        isAuthenticated: true,
      });
      
      return true;
    }
    
    return false;
  };

  const register = async (email: string, password: string, name: string, role: UserRole): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simple validation
    if (email && password.length >= 6 && name) {
      const user: User = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        name,
        role,
      };
      
      setAuthState({
        user,
        isAuthenticated: true,
      });
      
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setAuthState({
      user: null,
      isAuthenticated: false,
    });
  };

  return (
    <AuthContext.Provider value={{
      ...authState,
      login,
      register,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
};