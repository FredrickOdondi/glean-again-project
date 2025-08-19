import React from 'react';

const CustomerLogos = () => {
  const customers = [
    { name: 'Safaricom', logo: 'S' },
    { name: 'Equity Bank', logo: 'E' },
    { name: 'KCB Bank', logo: 'K' },
    { name: 'I and M Bank', logo: 'I&M' },
    { name: 'Kenyatta University', logo: 'KU' },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
          Trusted by leading companies
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {customers.map((customer, index) => (
            <div
              key={customer.name}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">{customer.logo}</span>
              </div>
              <span className="ml-3 text-foreground font-medium text-lg">{customer.name}</span>
            </div>
          ))}
        </div>

        {/* Scrolling animation for mobile */}
        <div className="md:hidden mt-8 overflow-hidden">
          <div className="flex animate-scroll space-x-8">
            {customers.concat(customers).map((customer, index) => (
              <div key={`scroll-${index}`} className="flex items-center justify-center whitespace-nowrap">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">{customer.logo}</span>
                </div>
                <span className="ml-2 text-foreground font-medium">{customer.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerLogos;