import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Search, User, Briefcase, FileText, Clock, CheckCircle } from 'lucide-react';

const AIDemo = () => {
  const [query, setQuery] = useState('Pull together a 360 on Acme Corp');
  const [isThinking, setIsThinking] = useState(false);

  const handleSearch = () => {
    setIsThinking(true);
    setTimeout(() => setIsThinking(false), 3000);
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Team Avatars */}
        <div className="flex justify-center items-center space-x-8 mb-12">
          <div className="flex items-center space-x-2">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-blue-100 text-blue-600">S</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">Sales</span>
          </div>
          <div className="flex items-center space-x-2">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-green-100 text-green-600">E</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium text-muted-foreground">Engineering</span>
          </div>
          <div className="flex items-center space-x-2">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-purple-100 text-purple-600">CS</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium text-muted-foreground">Customer Support</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Chat Interface */}
          <div className="flex-1">
            <Card className="p-6 gradient-card border-2 gradient-border">
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="pr-12 h-12 text-lg"
                    placeholder="Ask anything about your company..."
                  />
                  <Button 
                    size="sm" 
                    className="absolute right-1 top-1 h-10 w-10"
                    onClick={handleSearch}
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {isThinking && (
                <div className="mb-6">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <div className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full"></div>
                    <span>Show thinking • 12 sources</span>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Pulling account activity from Salesforce</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="h-4 w-4 bg-blue-500 rounded flex items-center justify-center">
                        <div className="h-2 w-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-blue-600">Open opportunities for Acme Corp</span>
                      <div className="h-4 w-4 bg-blue-500 rounded flex items-center justify-center">
                        <div className="h-2 w-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-blue-600">Recent meetings, activity logs, and AE notes</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Surfacing recent notes and internal updates</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Checking Acme's website and recent news</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  <strong>Acme Corp</strong> is a private company headquartered in Acme, CA, primarily engaged in 
                  manufacturing and distributing consumer packaged goods.
                </p>
                <p className="text-foreground leading-relaxed">
                  <strong>The latest Q3 reports show Salesforce says they had 20+ key people...</strong>
                </p>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80">
            <Card className="p-4">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 gradient-hero rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <span className="font-medium">Account snapshot</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                  <span>Enterprise account</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span>12 active opportunities</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>Last contact: 2 days ago</span>
                </div>
                <div className="mt-4">
                  <Badge variant="secondary" className="text-xs">
                    High priority
                  </Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDemo;