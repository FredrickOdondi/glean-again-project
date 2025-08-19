import React from 'react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-bold text-foreground">glean</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Work AI that puts your company's knowledge to work for every employee.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Button variant="link" className="p-0 h-auto font-normal">AI Assistant</Button></li>
              <li><Button variant="link" className="p-0 h-auto font-normal">AI Agents</Button></li>
              <li><Button variant="link" className="p-0 h-auto font-normal">Search</Button></li>
              <li><Button variant="link" className="p-0 h-auto font-normal">Analytics</Button></li>
              <li><Button variant="link" className="p-0 h-auto font-normal">Security</Button></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Solutions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Button variant="link" className="p-0 h-auto font-normal">Engineering</Button></li>
              <li><Button variant="link" className="p-0 h-auto font-normal">Sales</Button></li>
              <li><Button variant="link" className="p-0 h-auto font-normal">Support</Button></li>
              <li><Button variant="link" className="p-0 h-auto font-normal">HR</Button></li>
              <li><Button variant="link" className="p-0 h-auto font-normal">Legal</Button></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Button variant="link" className="p-0 h-auto font-normal">About</Button></li>
              <li><Button variant="link" className="p-0 h-auto font-normal">Careers</Button></li>
              <li><Button variant="link" className="p-0 h-auto font-normal">Blog</Button></li>
              <li><Button variant="link" className="p-0 h-auto font-normal">Press</Button></li>
              <li><Button variant="link" className="p-0 h-auto font-normal">Contact</Button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Glean. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground">Privacy</Button>
            <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground">Terms</Button>
            <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground">Security</Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;