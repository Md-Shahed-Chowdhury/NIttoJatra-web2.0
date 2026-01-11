import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-24 md:pt-48 md:pb-32">
      {/* Background Gradient & Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="section-container relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-primary-light font-medium animate-fade-in mx-auto">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Live: Dhaka's Smartest Commute
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Commute <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-light">Without Limits</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Join the elite network of daily commuters. Experience comfort, reliability, and savings like never before.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link to="/rider/find" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto text-lg h-14 px-12 rounded-full bg-white text-black hover:bg-gray-100 transition-all font-bold tracking-wide">
                Start Riding
              </Button>
            </Link>
            <Link to="/driver" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto text-lg h-14 px-12 rounded-full border-white/20 text-white hover:bg-white/10 font-medium">
                Drive with Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Floating Stats or Element */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {[
                { label: 'Active Users', value: '10K+' },
                { label: 'Daily Routes', value: '500+' },
                { label: 'Money Saved', value: '40%' },
                { label: 'Safety Score', value: '4.9/5' }
            ].map((stat, i) => (
                <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
