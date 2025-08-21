import React from 'react';
import {
  ChevronDown,
  Brain,
  Search,
  BarChart3,
  Users,
  Briefcase,
  HeadphonesIcon,
  UserCheck,
  FileText,
  BookOpen,
  FileSpreadsheet,
  HelpCircle,
  Building2,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 gradient-hero rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">Z</span>
          </div>
          <span className="text-xl font-bold text-foreground">Zillo</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-1 hover:bg-muted/50 transition-colors">
                <span>Product</span>
                <ChevronDown className="h-4 w-4 transition-transform duration-200" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 p-2" align="start">
              <DropdownMenuLabel className="text-xs font-medium text-foreground px-2 py-1.5">
                Core Features
              </DropdownMenuLabel>
              <DropdownMenuItem className="flex items-center space-x-3 px-3 py-2.5 cursor-pointer hover:bg-muted/50 rounded-md">
                <Brain className="h-4 w-4 text-primary" />
                <div>
                  <div className="font-medium">AI Assistant</div>
                  <div className="text-xs text-foreground">Personalized AI for every employee</div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center space-x-3 px-3 py-2.5 cursor-pointer hover:bg-muted/50 rounded-md">
                <Search className="h-4 w-4 text-primary" />
                <div>
                  <div className="font-medium">Smart Search</div>
                  <div className="text-xs text-foreground">Find anything across your company</div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center space-x-3 px-3 py-2.5 cursor-pointer hover:bg-muted/50 rounded-md">
                <Users className="h-4 w-4 text-primary" />
                <div>
                  <div className="font-medium">AI Agents</div>
                  <div className="text-xs text-foreground">Specialized AI for different teams</div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel className="text-xs font-medium text-foreground px-2 py-1.5">
                Analytics & Insights
              </DropdownMenuLabel>
              <DropdownMenuItem className="flex items-center space-x-3 px-3 py-2.5 cursor-pointer hover:bg-muted/50 rounded-md">
                <BarChart3 className="h-4 w-4 text-primary" />
                <div>
                  <div className="font-medium">Analytics</div>
                  <div className="text-xs text-foreground">Track usage and insights</div>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" className="hover:bg-muted/50 transition-colors">
            Customers
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-1 hover:bg-muted/50 transition-colors">
                <span>Solutions</span>
                <ChevronDown className="h-4 w-4 transition-transform duration-200" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 p-2" align="start">
              <DropdownMenuLabel className="text-xs font-medium text-foreground px-2 py-1.5">
                By Team
              </DropdownMenuLabel>
              <DropdownMenuItem className="flex items-center space-x-3 px-3 py-2.5 cursor-pointer hover:bg-muted/50 rounded-md">
                <Briefcase className="h-4 w-4 text-blue-500" />
                <div>
                  <div className="font-medium">Engineering</div>
                  <div className="text-xs text-foreground">Code search and documentation</div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center space-x-3 px-3 py-2.5 cursor-pointer hover:bg-muted/50 rounded-md">
                <Users className="h-4 w-4 text-green-500" />
                <div>
                  <div className="font-medium">Sales</div>
                  <div className="text-xs text-foreground">Customer insights and CRM</div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center space-x-3 px-3 py-2.5 cursor-pointer hover:bg-muted/50 rounded-md">
                <HeadphonesIcon className="h-4 w-4 text-purple-500" />
                <div>
                  <div className="font-medium">Support</div>
                  <div className="text-xs text-foreground">Knowledge base and tickets</div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center space-x-3 px-3 py-2.5 cursor-pointer hover:bg-muted/50 rounded-md">
                <UserCheck className="h-4 w-4 text-orange-500" />
                <div>
                  <div className="font-medium">HR</div>
                  <div className="text-xs text-foreground">Employee policies and benefits</div>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-1 hover:bg-muted/50 transition-colors">
                <span>Resources</span>
                <ChevronDown className="h-4 w-4 transition-transform duration-200" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 p-2" align="start">
              <DropdownMenuLabel className="text-xs font-medium text-muted-foreground px-2 py-1.5">
                Learning & Support
              </DropdownMenuLabel>
              <DropdownMenuItem className="flex items-center space-x-3 px-3 py-2.5 cursor-pointer hover:bg-muted/50 rounded-md">
                <FileText className="h-4 w-4 text-primary" />
                <div>
                  <div className="font-medium">Documentation</div>
                  <div className="text-xs text-muted-foreground">API docs and guides</div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center space-x-3 px-3 py-2.5 cursor-pointer hover:bg-muted/50 rounded-md">
                <BookOpen className="h-4 w-4 text-primary" />
                <div>
                  <div className="font-medium">Blog</div>
                  <div className="text-xs text-muted-foreground">Latest insights and updates</div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center space-x-3 px-3 py-2.5 cursor-pointer hover:bg-muted/50 rounded-md">
                <FileSpreadsheet className="h-4 w-4 text-primary" />
                <div>
                  <div className="font-medium">Case Studies</div>
                  <div className="text-xs text-muted-foreground">Customer success stories</div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center space-x-3 px-3 py-2.5 cursor-pointer hover:bg-muted/50 rounded-md">
                <HelpCircle className="h-4 w-4 text-primary" />
                <div>
                  <div className="font-medium">Support</div>
                  <div className="text-xs text-muted-foreground">Get help and contact us</div>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-1 hover:bg-muted/50 transition-colors">
                <span>Company</span>
                <ChevronDown className="h-4 w-4 transition-transform duration-200" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 p-2" align="start">
              <DropdownMenuLabel className="text-xs font-medium text-muted-foreground px-2 py-1.5">
                About Zillo
              </DropdownMenuLabel>
              <DropdownMenuItem className="flex items-center space-x-3 px-3 py-2.5 cursor-pointer hover:bg-muted/50 rounded-md">
                <Building2 className="h-4 w-4 text-primary" />
                <div>
                  <div className="font-medium">About Us</div>
                  <div className="text-xs text-muted-foreground">Our mission and team</div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center space-x-3 px-3 py-2.5 cursor-pointer hover:bg-muted/50 rounded-md">
                <Globe className="h-4 w-4 text-primary" />
                <div>
                  <div className="font-medium">Careers</div>
                  <div className="text-xs text-muted-foreground">Join our team</div>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" onClick={() => window.location.href = '/auth'} className="hover:bg-muted/50 transition-colors">
            Sign in
          </Button>
          <Button className="gradient-hero shadow-hero hover:shadow-xl transition-all duration-300 hover:scale-105" onClick={() => window.location.href = '/auth'}>
            Get a demo
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;