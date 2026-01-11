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
    <section className="py-24 bg-gray-900 border-t border-white/5">
      <div className="section-container">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white">Start Commuting Better in <br /> <span className="text-primary-light">3 Simple Steps</span></h2>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[100px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="relative mb-12">
                  <div className="w-20 h-20 rounded-2xl bg-black border border-white/10 flex items-center justify-center relative z-20 group-hover:border-primary-light/50 transition-colors duration-300 shadow-2xl">
                    <span className="text-2xl font-bold font-mono text-white group-hover:text-primary-light transition-colors">{step.num}</span>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary-light/10 rounded-full z-10 blur-xl group-hover:bg-primary-light/20 transition-all duration-300" />
                </div>
                
                <div className="w-full aspect-[4/3] max-w-[260px] mb-8 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 group-hover:ring-primary-light/30 transition-all duration-500 grayscale group-hover:grayscale-0">
                   <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 font-heading tracking-wide">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
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
