import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  Info, 
  ChevronRight,
  Share2,
  Printer,
  Calendar,
  AlertTriangle
} from 'lucide-react';

const ViewRoute = () => {
  const ride = {
    name: 'Uttara Morning Commute',
    from: 'Uttara Sector 7',
    to: 'Dhanmondi 32',
    distance: '14.2 KM',
    duration: '45 MIN',
    time: '08:00 AM',
    days: 'Mon - Fri',
    stops: [
      { name: 'Uttara Sector 7', time: '08:00 AM', type: 'Pickup', details: 'Beside North Tower' },
      { name: 'Airport Road', time: '08:12 AM', type: 'Stop', details: 'Airport Foot-overbridge' },
      { name: 'Banani', time: '08:28 AM', type: 'Stop', details: 'Chairman Bari' },
      { name: 'Farmgate', time: '08:45 AM', type: 'Stop', details: 'Near Ananda Cinema' },
      { name: 'Dhanmondi 32', time: '09:05 AM', type: 'Dropoff', details: 'In front of Metro Shopping' }
    ]
  };

  return (
    <div className="space-y-10 animate-fade-in pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
           <Link to="/rider" className="inline-flex items-center gap-2 text-text-secondary hover:text-primary-light transition-colors font-black text-xs uppercase tracking-widest">
              <ArrowLeft size={16} /> Back to Dashboard
           </Link>
           <h1 className="text-4xl font-black font-heading tracking-tight">{ride.name}</h1>
           <p className="text-text-secondary font-medium flex items-center gap-4">
              <span className="flex items-center gap-1.5"><Calendar size={16} /> {ride.days}</span>
              <span className="flex items-center gap-1.5"><Clock size={16} /> {ride.time} Departure</span>
           </p>
        </div>
        <div className="flex gap-3 h-fit">
           <Button variant="outline" className="h-12 w-12 p-0 border-background-muted" icon={Share2} />
           <Button variant="outline" className="h-12 px-6 border-background-muted text-xs font-black uppercase tracking-widest gap-2" icon={Printer}>Export Route</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
         {/* Map Column */}
         <div className="lg:col-span-12 xl:col-span-8 space-y-8">
            <Card className="p-0 overflow-hidden relative h-[500px] shadow-2xl group border-0">
               <img 
                 src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1400&q=80" 
                 alt="Route Map" 
                 className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
               
               {/* Map Overlays */}
               <div className="absolute top-6 left-6 flex flex-col gap-3">
                  <div className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl shadow-xl border border-white/20 flex items-center gap-3">
                     <div className="w-2.5 h-2.5 rounded-full bg-primary-light" />
                     <span className="text-xs font-black uppercase tracking-tight">{ride.from}</span>
                  </div>
                  <div className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl shadow-xl border border-white/20 flex items-center gap-3">
                     <div className="w-2.5 h-2.5 rounded-full bg-secondary" />
                     <span className="text-xs font-black uppercase tracking-tight">{ride.to}</span>
                  </div>
               </div>

               <div className="absolute bottom-6 right-6">
                  <div className="px-6 py-4 bg-primary-dark/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 text-white flex gap-8">
                     <div>
                        <p className="text-[10px] font-bold uppercase opacity-50">Total Dist</p>
                        <p className="text-xl font-black italic">{ride.distance}</p>
                     </div>
                     <div className="w-px h-10 bg-white/10" />
                     <div>
                        <p className="text-[10px] font-bold uppercase opacity-50">Est. Time</p>
                        <p className="text-xl font-black italic">{ride.duration}</p>
                     </div>
                  </div>
               </div>
            </Card>

            {/* Route Stats Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <Card className="p-6 space-y-3 bg-emerald-500/5 border-emerald-500/10">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-lg">
                     <Info size={20} />
                  </div>
                  <h4 className="font-bold text-sm uppercase tracking-widest text-emerald-700">Fixed Path</h4>
                  <p className="text-xs text-emerald-600 font-medium">This route follows a strictly pre-defined path for maximum punctuality.</p>
               </Card>
               <Card className="p-6 space-y-3 bg-secondary/5 border-secondary/10">
                  <div className="w-10 h-10 rounded-xl bg-secondary text-white flex items-center justify-center shadow-lg">
                     <Clock size={20} />
                  </div>
                  <h4 className="font-bold text-sm uppercase tracking-widest text-secondary-dark">Time Optimized</h4>
                  <p className="text-xs text-secondary-dark font-medium">Route algorithms adjust for peak traffic patterns daily.</p>
               </Card>
               <Card className="p-6 space-y-3 bg-primary-light/5 border-primary-light/10">
                  <div className="w-10 h-10 rounded-xl bg-primary-light text-white flex items-center justify-center shadow-lg">
                     <AlertTriangle size={20} />
                  </div>
                  <h4 className="font-bold text-sm uppercase tracking-widest text-primary-dark">Safety Zone</h4>
                  <p className="text-xs text-primary-dark font-medium">Constant GPS monitoring and route exception alerts active.</p>
               </Card>
            </div>
         </div>

         {/* Sidebar Timeline */}
         <div className="lg:col-span-12 xl:col-span-4 space-y-8">
            <h3 className="text-2xl font-black font-heading flex items-center gap-3">
               <div className="w-1.5 h-8 bg-secondary rounded-full" />
               Stop-by-Stop Breakdown
            </h3>
            
            <div className="relative pl-6 space-y-0">
               <div className="absolute left-[31px] top-4 bottom-4 w-1 bg-background-muted ltr" />
               
               {ride.stops.map((stop, i) => (
                 <div key={i} className={`relative pb-10 group`}>
                    <div className={`absolute left-[-2px] w-4 h-4 rounded-full border-4 border-white shadow-md z-10 transition-all group-hover:scale-125 ${
                       stop.type === 'Pickup' ? 'bg-emerald-500 w-8 h-8 left-[-10px]' : 
                       stop.type === 'Dropoff' ? 'bg-secondary w-8 h-8 left-[-10px]' : 
                       'bg-background-muted'
                    }`} />
                    
                    <Card className={`ml-10 p-6 border-0 shadow-premium transition-all group-hover:translate-x-2 ${
                       stop.type === 'Pickup' ? 'bg-emerald-500/5 ring-1 ring-emerald-500/20' : 
                       stop.type === 'Dropoff' ? 'bg-secondary/5 ring-1 ring-secondary/20' : 
                       'bg-white'
                    }`}>
                       <div className="flex justify-between items-start mb-2">
                          <p className="font-black text-base text-text-primary tracking-tight">{stop.name}</p>
                          <span className="text-xs font-black italic text-primary-light">{stop.time}</span>
                       </div>
                       <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-2 flex items-center gap-1.5">
                          <MapPin size={10} /> {stop.details}
                       </p>
                       <div className="flex justify-between items-center pt-2 border-t border-background-muted/50">
                          <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${
                             stop.type === 'Pickup' ? 'bg-emerald-500 text-white' : 
                             stop.type === 'Dropoff' ? 'bg-secondary text-white' : 
                             'bg-background-muted text-text-secondary'
                          }`}>{stop.type}</span>
                          <ChevronRight size={14} className="text-background-muted" />
                       </div>
                    </Card>
                 </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
};

export default ViewRoute;
