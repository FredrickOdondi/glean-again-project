import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Stay updated with{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Zillo
              </span>
            </h3>
            <p className="text-foreground mb-6">
              Get the latest insights on AI in the workplace, product updates, and industry trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button className="gradient-hero text-white px-6 py-2">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-2xl font-bold text-foreground">zillo</span>
            </div>
            <p className="text-foreground text-sm leading-relaxed max-w-md">
              Work AI that puts your company's knowledge to work for every employee. 
              Transform how teams collaborate, search, and make decisions.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Product</h4>
            <ul className="space-y-2 text-sm text-foreground">
              <li><Button variant="link" className="p-0 h-auto font-normal hover:text-foreground">AI Assistant</Button></li>
              <li><Button variant="link" className="p-0 h-auto font-normal hover:text-foreground">AI Agents</Button></li>
              <li><Button variant="link" className="p-0 h-auto font-normal hover:text-foreground">Smart Search</Button></li>
              <li><Button variant="link" className="p-0 h-auto font-normal hover:text-foreground">Analytics</Button></li>
              <li><Button variant="link" className="p-0 h-auto font-normal hover:text-foreground">Security</Button></li>
              <li><Button variant="link" className="p-0 h-auto font-normal hover:text-foreground">Integrations</Button></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Solutions</h4>
            <ul className="space-y-2 text-sm text-foreground">
              <li><Button variant="link" className="p-0 h-auto font-normal hover:text-foreground">Engineering</Button></li>
              <li><Button variant="link" className="p-0 h-auto font-normal hover:text-foreground">Sales</Button></li>
              <li><Button variant="link" className="p-0 h-auto font-normal hover:text-foreground">Support</Button></li>
              <li><Button variant="link" className="p-0 h-auto font-normal hover:text-foreground">HR</Button></li>
              <li><Button variant="link" className="p-0 h-auto font-normal hover:text-foreground">Legal</Button></li>
              <li><Button variant="link" className="p-0 h-auto font-normal hover:text-foreground">Marketing</Button></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-foreground">
              <li><Button variant="link" className="p-0 h-auto font-normal hover:text-foreground">About</Button></li>
              <li><Button variant="link" className="p-0 h-auto font-normal hover:text-foreground">Careers</Button></li>
              <li><Button variant="link" className="p-0 h-auto font-normal hover:text-foreground">Blog</Button></li>
              <li><Button variant="link" className="p-0 h-auto font-normal hover:text-foreground">Press</Button></li>
              <li><Button variant="link" className="p-0 h-auto font-normal hover:text-foreground">Contact</Button></li>
              <li><Button variant="link" className="p-0 h-auto font-normal hover:text-foreground">Partners</Button></li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-foreground" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-foreground">hello@zillo.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-foreground" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-sm text-foreground">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-foreground" />
              <div>
                <p className="font-medium">Office</p>
                <p className="text-sm text-foreground">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <p className="text-sm text-foreground">
              © {currentYear} Zillo. All rights reserved.
            </p>
            <Badge variant="secondary" className="text-xs">
              v2.1.0
            </Badge>
          </div>
          <div className="flex space-x-6">
            <Button variant="link" className="p-0 h-auto text-sm text-foreground hover:text-foreground">Privacy</Button>
            <Button variant="link" className="p-0 h-auto text-sm text-foreground hover:text-foreground">Terms</Button>
            <Button variant="link" className="p-0 h-auto text-sm text-foreground hover:text-foreground">Security</Button>
            <Button variant="link" className="p-0 h-auto text-sm text-foreground hover:text-foreground">Cookies</Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;