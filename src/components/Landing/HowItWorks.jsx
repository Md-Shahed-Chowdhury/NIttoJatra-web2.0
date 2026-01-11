import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Create Your Profile',
    description: 'Sign up as a rider or driver and verify your identity in minutes.',
    img: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=400&h=400&q=80'
  },
  {
    num: '02',
    title: 'Find Your Route',
    description: 'Search for routes that match your daily commute path and timings.',
    img: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=400&h=400&q=80'
  },
  {
    num: '03',
    title: 'Subscribe & Ride',
    description: 'Choose a plan, confirm your seat, and enjoy your hassle-free commute.',
    img: 'https://images.unsplash.com/photo-1449965072335-657bd207573b?auto=format&fit=crop&w=400&h=400&q=80'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold font-heading">Start Commuting Better in <br /> <span className="text-secondary">3 Simple Steps</span></h2>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-background-muted -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 rounded-full bg-white shadow-premium border border-background-muted flex items-center justify-center relative z-20 group-hover:border-primary-light transition-colors duration-300">
                    <span className="text-2xl font-bold font-accent bg-gradient-primary bg-clip-text text-transparent">{step.num}</span>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-primary-light/5 rounded-full z-10 animate-ping group-hover:animate-none opacity-20" />
                </div>
                
                <div className="w-full aspect-square max-w-[200px] mb-6 rounded-3xl overflow-hidden shadow-premium group-hover:scale-105 transition-transform duration-500">
                   <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                </div>

                <h3 className="text-xl font-bold text-text-primary mb-2 font-heading">{step.title}</h3>
                <p className="text-text-secondary">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
