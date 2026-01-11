import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  MessageSquare, 
  MoreVertical, 
  AlertCircle,
  Star,
  ChevronRight,
  Activity
} from 'lucide-react';

const MyRides = () => {
  const [activeTab, setActiveTab] = useState('active');

  const activeRides = [
    {
      id: 's001',
      route: 'Uttara to Dhanmondi',
      driver: 'Karim Uddin',
      avatar: 'https://i.pravatar.cc/150?u=d001',
      schedule: 'Mon - Fri, 08:00 AM',
      progress: 8,
      total: 20,
      nextRide: 'Tomorrow, 08:00 AM',
      status: 'Active'
    }
  ];

  const pastRides = [
    {
      id: 'p001',
      route: 'Mirpur to Gulshan',
      driver: 'Nusrat Jahan',
      date: 'Dec 2025',
      status: 'Completed',
      rating: 5
    },
    {
      id: 'p002',
      route: 'Banani to Motijheel',
      driver: 'Rahat Ahmed',
      date: 'Nov 2025',
      status: 'Cancelled',
      rating: null
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black font-heading">My Subscriptions</h1>
          <p className="text-text-secondary">Manage your active routes and view history.</p>
        </div>
        <div className="flex bg-background-muted p-1 rounded-2xl w-fit">
          <button 
            onClick={() => setActiveTab('active')}
            className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'active' ? 'bg-white text-primary-light shadow-premium' : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Active Rides
          </button>
          <button 
            onClick={() => setActiveTab('past')}
            className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'past' ? 'bg-white text-primary-light shadow-premium' : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Past History
          </button>
        </div>
      </div>

      {activeTab === 'active' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activeRides.map((ride) => (
            <Card key={ride.id} className="p-0 overflow-hidden relative group">
               <div className="absolute top-0 right-0 p-4">
                  <button className="text-text-secondary hover:text-text-primary transition-colors">
                     <MoreVertical size={20} />
                  </button>
               </div>
               
               <div className="p-8 space-y-6">
                  <div className="flex items-center gap-4">
                     <div className="w-14 h-14 rounded-2xl bg-primary-light/10 flex items-center justify-center text-primary-light">
                        <Calendar size={28} />
                     </div>
                     <div>
                        <h3 className="text-xl font-black">{ride.route}</h3>
                        <p className="text-sm font-medium text-text-secondary">{ride.schedule}</p>
                     </div>
                  </div>

                  <div className="flex items-center gap-4 py-4 border-y border-background-muted">
                     <img src={ride.avatar} alt={ride.driver} className="w-10 h-10 rounded-full border border-background-muted" />
                     <div className="flex-1">
                        <p className="text-xs text-text-secondary font-medium uppercase">Driver</p>
                        <p className="font-bold text-sm">{ride.driver}</p>
                     </div>
                     <div className="flex items-center gap-2">
                        <Button variant="outline" className="h-10 w-10 p-0" icon={MessageSquare} />
                        <Button variant="outline" className="h-10 px-4 text-xs font-bold">Track</Button>
                     </div>
                  </div>

                  <div className="space-y-3">
                     <div className="flex justify-between text-xs font-bold uppercase">
                        <span className="text-text-secondary">Subscription Progress</span>
                        <span className="text-primary-light">{ride.progress} / {ride.total} Rides</span>
                     </div>
                     <div className="w-full h-2 bg-background-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-primary rounded-full" 
                          style={{ width: `${(ride.progress / ride.total) * 100}%` }} 
                        />
                     </div>
                  </div>

                  <div className="p-4 bg-secondary/5 border border-secondary/10 rounded-2xl flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <Activity size={18} className="text-secondary" />
                        <div>
                           <p className="text-[10px] font-bold text-text-secondary uppercase">Next Ride</p>
                           <p className="text-sm font-black text-secondary">{ride.nextRide}</p>
                        </div>
                     </div>
                     <ChevronRight size={20} className="text-secondary" />
                  </div>
               </div>

               <div className="p-6 bg-background-alt border-t border-background-muted grid grid-cols-2 gap-4">
                  <Button variant="outline" className="h-11 text-xs font-bold uppercase tracking-wider" icon={AlertCircle}>Report Issue</Button>
                  <Button variant="primary" className="h-11 text-xs font-bold uppercase tracking-wider">Manage Plan</Button>
               </div>
            </Card>
          ))}
          
          <Link to="/rider/find" className="border-2 border-dashed border-background-muted rounded-3xl p-10 flex flex-col items-center justify-center gap-4 text-text-secondary hover:border-primary-light hover:text-primary-light transition-all group">
             <div className="w-16 h-16 rounded-full bg-background-muted flex items-center justify-center group-hover:bg-primary-light/10 transition-colors">
                <Calendar size={32} />
             </div>
             <div className="text-center">
                <p className="font-black text-lg">New Subscription</p>
                <p className="text-sm">Find another route for your schedule.</p>
             </div>
          </Link>
        </div>
      ) : (
        <Card className="p-0 overflow-hidden">
           <table className="w-full text-left">
              <thead className="bg-background-muted">
                 <tr>
                    <th className="px-8 py-4 text-[10px] font-black uppercase text-text-secondary tracking-widest">Route</th>
                    <th className="px-8 py-4 text-[10px] font-black uppercase text-text-secondary tracking-widest">Driver</th>
                    <th className="px-8 py-4 text-[10px] font-black uppercase text-text-secondary tracking-widest">Period</th>
                    <th className="px-8 py-4 text-[10px] font-black uppercase text-text-secondary tracking-widest">Status</th>
                    <th className="px-8 py-4 text-[10px] font-black uppercase text-text-secondary tracking-widest">Rating</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-background-muted">
                 {pastRides.map((ride) => (
                   <tr key={ride.id} className="hover:bg-background-alt transition-colors group cursor-pointer">
                      <td className="px-8 py-6">
                         <p className="font-bold text-sm text-text-primary">{ride.route}</p>
                         <p className="text-[10px] text-text-secondary font-medium">Daily Subscription</p>
                      </td>
                      <td className="px-8 py-6">
                         <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-background-muted" />
                            <span className="font-semibold text-sm">{ride.driver}</span>
                         </div>
                      </td>
                      <td className="px-8 py-6 text-sm font-medium text-text-secondary">
                         {ride.date}
                      </td>
                      <td className="px-8 py-6">
                         <span className={`px-2 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter ${
                           ride.status === 'Completed' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'
                         }`}>
                           {ride.status}
                         </span>
                      </td>
                      <td className="px-8 py-6">
                         {ride.rating ? (
                           <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                             <Star size={14} fill="currentColor" /> {ride.rating}
                           </div>
                         ) : (
                           <button className="text-primary-light text-xs font-bold hover:underline">Rate Now</button>
                         )}
                      </td>
                   </tr>
                 ))}
              </tbody>
           </table>
        </Card>
      )}
    </div>
  );
};

export default MyRides;
