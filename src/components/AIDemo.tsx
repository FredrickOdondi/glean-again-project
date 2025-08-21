import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Search, User, Briefcase, FileText, Clock, CheckCircle, Zap, TrendingUp, MessageSquare } from 'lucide-react';

const AIDemo = () => {
  const [query, setQuery] = useState('Pull together a 360 on Acme Corp');
  const [isThinking, setIsThinking] = useState(false);
  const [activeTab, setActiveTab] = useState('chat');

  const handleSearch = () => {
    setIsThinking(true);
    setTimeout(() => setIsThinking(false), 3000);
  };

  const demoQueries = [
    'Pull together a 360 on Acme Corp',
    'What are our top sales opportunities?',
    'Show me recent customer feedback',
    'Find engineering documentation for API v2'
  ];

  const tabs = [
    { id: 'chat', label: 'AI Chat', icon: MessageSquare },
    { id: 'search', label: 'Smart Search', icon: Search },
    { id: 'agents', label: 'AI Agents', icon: Zap }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See AI in{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              action
            </span>
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Experience how Zillo transforms the way teams work with AI that understands your business context.
          </p>
        </div>

        {/* Team Avatars */}
        <div className="flex justify-center items-center space-x-8 mb-12">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <Avatar className="h-12 w-12 group-hover:scale-110 transition-transform">
              <AvatarFallback className="bg-blue-100 text-blue-600">S</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium group-hover:text-blue-600 transition-colors">Sales</span>
          </div>
          <div className="flex items-center space-x-2 group cursor-pointer">
            <Avatar className="h-12 w-12 group-hover:scale-110 transition-transform">
              <AvatarFallback className="bg-green-100 text-green-600">E</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium group-hover:text-green-600 transition-colors">Engineering</span>
          </div>
          <div className="flex items-center space-x-2 group cursor-pointer">
            <Avatar className="h-12 w-12 group-hover:scale-110 transition-transform">
              <AvatarFallback className="bg-purple-100 text-purple-600">CS</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium group-hover:text-purple-600 transition-colors">Customer Support</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-1 bg-muted p-1 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-foreground hover:text-foreground'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Main Demo Interface */}
          <div className="flex-1">
            <Card className="p-6 gradient-card border-2 gradient-border shadow-2xl">
              {/* Query Input */}
              <div className="mb-6">
                <div className="relative">
                  <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="pr-12 h-14 text-lg border-0 bg-white/10 backdrop-blur-sm"
                    placeholder="Ask anything about your company..."
                  />
                  <Button 
                    size="sm" 
                    className="absolute right-2 top-2 h-10 w-10 bg-primary hover:bg-primary/90"
                    onClick={handleSearch}
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
                
                {/* Quick Query Suggestions */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {demoQueries.map((suggestion) => (
                    <Badge
                      key={suggestion}
                      variant="secondary"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={() => setQuery(suggestion)}
                    >
                      {suggestion}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* AI Response */}
              {isThinking && (
                <div className="mb-6 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center space-x-2 text-white mb-4">
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                    <span className="font-medium">Show thinking • 12 sources</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-white/90">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Pulling account activity from Salesforce</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-white/90">
                      <div className="h-4 w-4 bg-blue-400 rounded flex items-center justify-center">
                        <div className="h-2 w-2 bg-white rounded-full"></div>
                      </div>
                      <span>Open opportunities for Acme Corp</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-white/90">
                      <div className="h-4 w-4 bg-blue-400 rounded flex items-center justify-center">
                        <div className="h-2 w-2 bg-white rounded-full"></div>
                      </div>
                      <span>Recent meetings, activity logs, and AE notes</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-white/90">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Surfacing recent notes and internal updates</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-white/90">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Checking Acme's website and recent news</span>
                    </div>
                  </div>
                </div>
              )}

              {/* AI Response Content */}
              <div className="space-y-4 text-white">
                <p className="leading-relaxed">
                  <strong>Acme Corp</strong> is a private company headquartered in Acme, CA, primarily engaged in 
                  manufacturing and distributing consumer packaged goods.
                </p>
                <p className="leading-relaxed">
                  <strong>The latest Q3 reports show Salesforce says they had 20+ key people...</strong>
                </p>
                
                {/* Source Links */}
                <div className="pt-4 border-t border-white/20">
                  <p className="text-sm text-white/80 mb-2">Sources:</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                      Salesforce CRM
                    </Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                      Company Wiki
                    </Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                      Email Threads
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Enhanced Sidebar */}
          <div className="w-full lg:w-80 space-y-4">
            {/* Account Snapshot */}
            <Card className="p-4 border-0 bg-card/80 backdrop-blur-sm">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 gradient-hero rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <span className="font-medium">Account snapshot</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <Briefcase className="h-4 w-4 text-foreground" />
                  <span>Enterprise account</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <FileText className="h-4 w-4 text-foreground" />
                  <span>12 active opportunities</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="h-4 w-4 text-foreground" />
                  <span>Last contact: 2 days ago</span>
                </div>
                <div className="mt-4">
                  <Badge variant="secondary" className="text-xs">
                    High priority
                  </Badge>
                </div>
              </div>
            </Card>

            {/* Performance Metrics */}
            <Card className="p-4 border-0 bg-card/80 backdrop-blur-sm">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-white" />
                </div>
                <span className="font-medium">Performance</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground">Response time</span>
                  <span className="text-sm font-medium">0.8s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground">Sources found</span>
                  <span className="text-sm font-medium">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground">Confidence</span>
                  <span className="text-sm font-medium text-green-600">98%</span>
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