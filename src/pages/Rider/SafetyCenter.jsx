import React from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { 
  Shield, 
  MapPin, 
  Phone, 
  Users, 
  Bell, 
  AlertTriangle,
  Heart,
  Eye,
  CheckCircle2,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';

const SafetyCenter = () => {
  const safetyFeatures = [
    {
      title: "Real-time Tracking",
      desc: "Share your live location with family or friends for every trip.",
      icon: MapPin,
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      title: "Verified Drivers",
      desc: "Every driver undergoes rigorous background and document checks.",
      icon: CheckCircle2,
      color: "text-emerald-500",
      bg: "bg-emerald-50"
    },
    {
      title: "Emergency SOS",
      desc: "One-tap emergency button to alert our safety team and local authorities.",
      icon: ShieldAlert,
      color: "text-red-500",
      bg: "bg-red-50"
    },
    {
      title: "Privacy Protected",
      desc: "Your personal number is never shared. All calls are masked.",
      icon: Eye,
      color: "text-purple-500",
      bg: "bg-purple-50"
    }
  ];

  return (
    <div className="space-y-10 animate-fade-in pb-12">
      {/* Hero Section */}
      <div className="relative py-16 px-8 rounded-[2.5rem] bg-gradient-primary text-white overflow-hidden text-center space-y-6">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 space-y-4">
          <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto border border-white/30 shadow-2xl animate-pulse">
            <Shield size={40} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-heading italic tracking-tight">Your Safety is Our <br /> Top Priority</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto font-medium">
            We've built NittoJatra with security at its core. From verified profiles to real-time tracking, your commute is protected at every turn.
          </p>
        </div>
      </div>

      {/* SOS Button Section */}
      <Card className="border-red-100 bg-red-50/30 p-8 flex flex-col md:flex-row items-center gap-8 shadow-xl shadow-red-500/5">
        <div className="relative">
          <button className="w-32 h-32 rounded-full bg-red-600 text-white flex flex-col items-center justify-center gap-2 shadow-2xl shadow-red-600/40 relative z-10 active:scale-95 transition-transform group">
            <ShieldAlert size={32} />
            <span className="font-black text-xs uppercase tracking-widest">SOS</span>
            <div className="absolute inset-0 rounded-full bg-red-600 animate-ping opacity-25" />
          </button>
        </div>
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h2 className="text-2xl font-black font-heading text-red-700">In Case of Emergency</h2>
          <p className="text-red-900/70 font-medium">
            Press and hold the SOS button for 3 seconds to immediately alert our 24/7 Safety Command Center. 
            We will share your location with emergency contacts and call local authorities.
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50 h-11" icon={Phone}>Add Emergency Contact</Button>
            <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50 h-11" icon={Users}>Share Activity with Friends</Button>
          </div>
        </div>
      </Card>

      {/* Features Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-black font-heading">Our Safety Ecosystem</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {safetyFeatures.map((feature, i) => (
            <Card key={i} className="group hover:bg-white hover:border-primary-light/10 transition-all border-transparent">
              <div className={`w-14 h-14 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon size={28} />
              </div>
              <h3 className="font-bold text-lg mb-3">{feature.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {feature.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-6">
        {/* Safety Tips */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-black font-heading">Ride Safety Tips</h2>
          <div className="space-y-4">
            {[
              { q: "Verify the Vehicle", a: "Always check the license plate and car model against the info in your app before entering." },
              { q: "Confirm your Driver", a: "Ask the driver 'Who are you picking up?' to ensure they know your name." },
              { q: "Share your ETA", a: "Use the 'Share Journey' feature to let loved ones know where you are in real-time." },
              { q: "Follow your Intuition", a: "If something doesn't feel right, you have the right to end the ride or call for help." }
            ].map((tip, i) => (
              <div key={i} className="p-6 rounded-3xl bg-white border border-background-muted hover:border-primary-light/10 transition-all">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <h4 className="font-bold">{tip.q}</h4>
                </div>
                <p className="text-sm text-text-secondary pl-12">
                  {tip.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="space-y-6">
           <h2 className="text-2xl font-black font-heading">Resources</h2>
           <div className="space-y-3">
              {[
                { label: "Community Guidelines", icon: Heart },
                { label: "Safety Policy", icon: Shield },
                { label: "Report a Concern", icon: AlertTriangle },
                { label: "Safety FAQs", icon: Bell }
              ].map((res, i) => (
                <button key={i} className="w-full flex items-center justify-between p-4 rounded-2xl bg-background-alt hover:bg-white border border-transparent hover:border-background-muted hover:shadow-sm transition-all group">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-text-secondary group-hover:text-primary-light transition-colors">
                        <res.icon size={20} />
                      </div>
                      <span className="font-bold text-sm">{res.label}</span>
                   </div>
                   <ChevronRight size={18} className="text-text-secondary opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0" />
                </button>
              ))}
           </div>
           
           <Card className="bg-gradient-secondary text-white border-0 mt-8 relative overflow-hidden group">
              <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:scale-110 transition-transform">
                <Shield size={120} />
              </div>
              <div className="relative z-10 space-y-4">
                <p className="font-bold">Insurance Coverage</p>
                <p className="text-xs text-white/80 leading-relaxed">
                  All NittoJatra ride subscriptions are covered by our comprehensive insurance policy for your peace of mind.
                </p>
                <Button className="w-full bg-white text-secondary hover:bg-white/90 text-xs h-10 font-bold">Policy Details</Button>
              </div>
           </Card>
        </div>
      </div>
    </div>
  );
};

export default SafetyCenter;
