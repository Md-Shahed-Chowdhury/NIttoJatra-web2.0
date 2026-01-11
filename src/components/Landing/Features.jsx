import React from 'react';
import Card from '../ui/Card';
import { 
  MapPin, 
  TrendingDown, 
  ShieldCheck, 
  Calendar, 
  MessageSquare, 
  Users 
} from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Fixed Route Matching',
    description: 'Find rides that perfectly match your daily commute path and schedule.',
    color: 'bg-blue-500/10 text-blue-500'
  },
  {
    icon: TrendingDown,
    title: 'Subscription Savings',
    description: 'Save up to 40% compared to traditional ride-sharing apps with weekly/monthly plans.',
    color: 'bg-emerald-500/10 text-emerald-500'
  },
  {
    icon: ShieldCheck,
    title: 'Safety First',
    description: 'Verified profiles, real-time tracking, and a robust rating system for peace of mind.',
    color: 'bg-purple-500/10 text-purple-500'
  },
  {
    icon: Calendar,
    title: 'Flexible Scheduling',
    description: 'Easily manage your ride days and times to fit your changing work week.',
    color: 'bg-amber-500/10 text-amber-500'
  },
  {
    icon: MessageSquare,
    title: 'In-App Communication',
    description: 'Chat directly with your driver or fellow riders to coordinate pickups.',
    color: 'bg-pink-500/10 text-pink-500'
  },
  {
    icon: Users,
    title: 'Women-Only Options',
    description: 'Special groups and filters for women passengers seeking female-only rides.',
    color: 'bg-indigo-500/10 text-indigo-500'
  }
];

const Features = () => {
  return (
    <section className="bg-background-alt py-24">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-text-primary uppercase tracking-tight">
            Designed for the <br /> 
            <span className="text-primary-light italic">Modern Commuter</span>
          </h2>
          <p className="text-text-secondary">
            Everything you need for a stress-free daily commute, packed into one elegant platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group p-8 hover:bg-white hover:border-primary-light/10">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${feature.color}`}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3 font-heading">{feature.title}</h3>
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
