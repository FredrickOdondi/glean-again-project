export type UserRole = 'Engineering' | 'Sales' | 'Support' | 'HR';

export type Product = 'AI Assistants' | 'AI Agents' | 'Search' | 'Analytics';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}