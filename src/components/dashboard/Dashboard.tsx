import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import ProductSelection from './ProductSelection';
import ChatInterface from '../chat/ChatInterface';
import { Product } from '@/types/auth';
import { 
  LogOut, 
  Home, 
  Bot, 
  Users, 
  Search, 
  BarChart3, 
  Settings, 
  HelpCircle,
  Menu,
  X,
  Plus,
  Star,
  Clock,
  Video,
  MessageCircle,
  ExternalLink
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!user) return null;

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null);
  };

  const launchApp = (appName: string, webUrl: string, storeUrls: { windows: string, mac: string }) => {
    // Try to open the web version first, then offer app store options
    const platform = navigator.platform.toLowerCase();
    
    // Open the web version in a new tab
    window.open(webUrl, '_blank');
    
    // Show a notification about the app store option
    setTimeout(() => {
      const shouldOpenStore = window.confirm(
        `Opened ${appName} in your browser. Would you like to download the desktop app for a better experience?`
      );
      
      if (shouldOpenStore) {
        if (platform.includes('win')) {
          window.open(storeUrls.windows, '_blank');
        } else if (platform.includes('mac')) {
          window.open(storeUrls.mac, '_blank');
        } else {
          window.open(storeUrls.windows, '_blank');
        }
      }
    }, 1000);
  };

  const handleLaunchTeams = () => {
    launchApp(
      'Microsoft Teams', 
      'https://teams.microsoft.com/',
      { 
        windows: 'https://www.microsoft.com/en-us/microsoft-teams/download-app', 
        mac: 'https://apps.apple.com/us/app/microsoft-teams/id1113153706' 
      }
    );
  };

  const handleLaunchZoom = () => {
    launchApp(
      'Zoom', 
      'https://zoom.us/',
      { 
        windows: 'https://www.microsoft.com/en-us/p/zoom-cloud-meetings/9ncrdc37k29z', 
        mac: 'https://apps.apple.com/us/app/zoom-cloud-meetings/id546505307' 
      }
    );
  };

  const handleLaunchGoogleMeet = () => {
    launchApp(
      'Google Meet', 
      'https://meet.google.com/',
      { 
        windows: 'https://meet.google.com/', 
        mac: 'https://meet.google.com/' 
      }
    );
  };

  const navigationItems = [
    { name: 'Dashboard', icon: Home, href: '#', active: true },
    { name: 'AI Assistants', icon: Bot, href: '#', product: 'AI Assistants' as Product },
    { name: 'AI Agents', icon: Users, href: '#', product: 'AI Agents' as Product },
    { name: 'Search', icon: Search, href: '#', product: 'Search' as Product },
    { name: 'Analytics', icon: BarChart3, href: '#', product: 'Analytics' as Product },
  ];

  const communicationTools = [
    { 
      name: 'Microsoft Teams', 
      icon: MessageCircle, 
      onClick: handleLaunchTeams,
      description: 'Launch Teams meeting'
    },
    { 
      name: 'Zoom', 
      icon: Video, 
      onClick: handleLaunchZoom,
      description: 'Start Zoom call'
    },
    { 
      name: 'Google Meet', 
      icon: Video, 
      onClick: handleLaunchGoogleMeet,
      description: 'Join Google Meet'
    },
  ];

  const handleNavigationClick = (item: any) => {
    if (item.product) {
      handleSelectProduct(item.product);
    }
    setSidebarOpen(false);
  };

  if (selectedProduct) {
    return <ChatInterface product={selectedProduct} onBack={handleBackToProducts} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-200/60 transform transition-transform duration-300 ease-in-out md:translate-x-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200/60">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-sm">Z</span>
              </div>
              <span className="text-lg font-semibold text-gray-900">Zillo</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-8 w-8 text-gray-500 hover:text-gray-700"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavigationClick(item)}
                  className={`
                    w-full flex items-center space-x-3 px-3 py-2.5 rounded-md text-left transition-all duration-200 group
                    ${item.active 
                      ? 'bg-gray-100 text-gray-900' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }
                  `}
                >
                  <Icon className={`h-4 w-4 ${item.active ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-700'}`} />
                  <span className="text-sm font-medium">{item.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Communication Tools Section */}
          <div className="px-3 py-4 border-t border-gray-200/60">
            <div className="mb-3">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2">
                Communication Tools
              </h3>
            </div>
            <div className="space-y-1">
              {communicationTools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <button
                    key={tool.name}
                    onClick={tool.onClick}
                    className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-md text-left transition-all duration-200 group text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    title={tool.description}
                  >
                    <Icon className="h-4 w-4 text-gray-500 group-hover:text-gray-700" />
                    <span className="text-sm font-medium flex-1">{tool.name}</span>
                    <ExternalLink className="h-3 w-3 text-gray-400 group-hover:text-gray-600" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-gray-200/60 space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-600 hover:text-gray-900 hover:bg-gray-50 h-9 px-3"
            >
              <Settings className="h-4 w-4 mr-3" />
              <span className="text-sm">Settings</span>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-600 hover:text-gray-900 hover:bg-gray-50 h-9 px-3"
            >
              <HelpCircle className="h-4 w-4 mr-3" />
              <span className="text-sm">Help & Support</span>
            </Button>
            <Separator className="my-2" />
            <Button
              variant="ghost"
              onClick={logout}
              className="w-full justify-start text-gray-600 hover:text-gray-900 hover:bg-gray-50 h-9 px-3"
            >
              <LogOut className="h-4 w-4 mr-3" />
              <span className="text-sm">Sign Out</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:ml-72">
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-sm border-b border-gray-200/60">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden h-9 w-9 text-gray-500 hover:text-gray-700"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-4 w-4" />
              </Button>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
                <p className="text-sm text-gray-500">Welcome back, {user.name}</p>
              </div>
            </div>
            
            {/* User Profile */}
            <div className="flex items-center space-x-3">
              <Card className="border-0 shadow-sm bg-gray-50/50">
                <CardContent className="p-2">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-gray-200 text-gray-700 text-sm font-medium">
                        {user.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="hidden sm:block">
                      <p className="text-sm font-medium text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 max-w-6xl">
          {/* Welcome Section */}
          <div className="mb-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl p-8 border border-gray-200/60">
              <div className="flex items-start justify-between">
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Ready to get started?</h2>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Choose a product below to begin working with our AI-powered solutions. 
                    Each product is designed to enhance your workflow and productivity.
                  </p>
                </div>
                <div className="hidden lg:flex items-center space-x-2 text-gray-400">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">Last updated: {new Date().toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Selection */}
          <ProductSelection onSelectProduct={handleSelectProduct} />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;