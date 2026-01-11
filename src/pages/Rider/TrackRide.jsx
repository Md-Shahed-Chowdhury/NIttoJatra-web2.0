import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { 
  ArrowLeft, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Shield, 
  HelpCircle,
  Navigation,
  MoreVertical,
  Zap,
  Info
} from 'lucide-react';

const TrackRide = () => {
  const navigate = useNavigate();
  const [distance, setDistance] = useState(1.8);
  const [eta, setEta] = useState(6);

  // Simulated movement
  useEffect(() => {
    const timer = setInterval(() => {
      setDistance(prev => Math.max(0, prev - 0.01));
      setEta(prev => Math.max(0, prev - 1/60));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const ride = {
    driver: 'Karim Uddin',
    avatar: 'https://i.pravatar.cc/150?u=d001',
    vehicle: 'Toyota Corolla • Midnight Blue',
    plate: 'DHA-MET-GA-12-34',
    from: 'Uttara Sector 7',
    to: 'Dhanmondi 27'
  };

  return (
    <div className="relative min-h-screen bg-background flex flex-col">
      {/* Map Header (Large) */}
      <div className="flex-1 relative bg-background-muted min-h-[400px]">
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80" 
          alt="Live Map" 
          className="w-full h-full object-cover opacity-60 grayscale"
        />
        
        {/* Navigation Bar Over Map */}
        <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
           <Link to="/rider" className="p-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl flex items-center gap-2 font-black text-xs uppercase tracking-widest border border-white/20">
              <ArrowLeft size={18} /> Back
           </Link>
           <div className="px-5 py-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest">Live Tracking Active</span>
           </div>
        </div>

        {/* Animated Car Marker */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <div className="relative">
              <div className="absolute inset-0 bg-primary-light/30 rounded-full animate-ping scale-150" />
              <div className="relative bg-white p-4 rounded-full shadow-2xl border-2 border-primary-light">
                 <Navigation size={32} className="text-primary-light rotate-45" />
              </div>
           </div>
        </div>
      </div>

      {/* Floating Info Cards */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
         <div className="max-w-4xl mx-auto space-y-4">
            {/* ETA Card */}
            <div className="grid grid-cols-2 gap-4">
               <Card className="bg-gradient-primary text-white border-0 shadow-2xl p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                     <Zap size={24} className="animate-pulse" />
                  </div>
                  <div>
                     <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">Estimated Arrival</p>
                     <p className="text-3xl font-black italic">{Math.ceil(eta)} MINS</p>
                  </div>
               </Card>
               <Card className="bg-white/90 backdrop-blur-xl shadow-2xl p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-light/10 text-primary-light flex items-center justify-center">
                     <MapPin size={24} />
                  </div>
                  <div>
                     <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Distance</p>
                     <p className="text-3xl font-black italic">{distance.toFixed(1)} KM</p>
                  </div>
               </Card>
            </div>

            {/* Bottom Panel */}
            <Card className="p-0 overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.1)] border-0">
               <div className="p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white">
                  <div className="md:col-span-4 flex items-center gap-4 border-r border-background-muted pr-8">
                     <img src={ride.avatar} alt={ride.driver} className="w-16 h-16 rounded-2xl object-cover ring-4 ring-background-alt" />
                     <div className="space-y-1">
                        <h4 className="font-black text-xl leading-none">{ride.driver}</h4>
                        <p className="text-xs font-bold text-text-secondary">{ride.vehicle}</p>
                        <p className="text-[10px] font-mono font-black text-primary-light bg-primary-light/5 px-2 py-0.5 rounded tracking-widest uppercase">{ride.plate}</p>
                     </div>
                  </div>

                  <div className="md:col-span-5 flex flex-col gap-3">
                     <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <p className="text-sm font-bold text-text-primary">Heading to <span className="opacity-70">{ride.to}</span></p>
                     </div>
                     <div className="flex gap-2">
                        <div className="px-3 py-1 bg-emerald-500/10 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5">
                           <Shield size={12} /> Safe Route Active
                        </div>
                        <div className="px-3 py-1 bg-amber-500/10 text-amber-600 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5">
                           <Info size={12} /> SOS Enabled
                        </div>
                     </div>
                  </div>

                  <div className="md:col-span-3 flex gap-3">
                     <Button variant="outline" className="flex-1 h-14 rounded-2xl border-background-muted hover:border-emerald-500 text-emerald-600" icon={Phone}>Call</Button>
                     <Button variant="primary" className="flex-1 h-14 rounded-2xl shadow-xl shadow-primary-light/20 italic font-black" icon={MessageSquare}>Chat</Button>
                  </div>
               </div>
            </Card>
         </div>
      </div>
    </div>
  );
};

export default TrackRide;
