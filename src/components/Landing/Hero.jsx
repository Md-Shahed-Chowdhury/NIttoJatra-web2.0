import React from 'react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import { ChevronRight, Users, Route, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-16 md:pt-32 md:pb-24">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-primary-light/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-secondary-light/10 rounded-full blur-3xl opacity-50" />

      <div className="section-container relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light/5 text-primary-light font-medium border border-primary-light/10 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-primary-light animate-pulse" />
            Better Commute, Better Earnings
          </div>

          <h1 className="heading-1 leading-[1.1] md:text-7xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Your Daily Commute, <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent italic">Simplified</span>
          </h1>

          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Connect with daily commuters for cost-effective, recurring ride arrangements. 
            Join the community that's redefining the way we travel.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link to="/rider/find" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full sm:w-auto text-lg h-14 px-10 group">
                Find a Ride
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/driver" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto text-lg h-14 px-10">
                Become a Driver
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-16 border-t border-background-muted animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="space-y-1 text-center">
              <p className="text-3xl font-bold font-accent text-text-primary">10K+</p>
              <p className="text-sm font-medium text-text-secondary uppercase tracking-widest">Active Users</p>
            </div>
            <div className="space-y-1 text-center">
              <p className="text-3xl font-bold font-accent text-text-primary">500+</p>
              <p className="text-sm font-medium text-text-secondary uppercase tracking-widest">Routes</p>
            </div>
            <div className="hidden md:block space-y-1 text-center">
              <p className="text-3xl font-bold font-accent text-text-primary">2M+</p>
              <p className="text-sm font-medium text-text-secondary uppercase tracking-widest">KM Traveled</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
