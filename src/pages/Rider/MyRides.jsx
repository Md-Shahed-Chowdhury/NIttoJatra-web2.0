import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  Activity,
  Download,
  Shield,
  Phone,
  X,
  Send,
  Navigation
} from 'lucide-react';

const MyRides = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [showTrackModal, setShowTrackModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showRateModal, setShowRateModal] = useState(false);
  const [selectedRide, setSelectedRide] = useState(null);

  const activeRides = [
    {
      id: 's001',
      route: 'Uttara to Dhanmondi',
      driver: 'Karim Uddin',
      avatar: 'https://i.pravatar.cc/150?u=d001',
      schedule: 'Mon - Fri, 08:00 AM',
      progress: 8,
      total: 20,
      nextRide: '24 mins away',
      status: 'Active',
      type: 'Premium Sedan'
    }
  ];

  const pastRides = [
    { id: 'p001', route: 'Mirpur to Gulshan', driver: 'Nusrat Jahan', date: '12 Jan 2026', status: 'Completed', rating: 5, price: '৳2,800' },
    { id: 'p002', route: 'Banani to Motijheel', driver: 'Rahat Ahmed', date: '05 Jan 2026', status: 'Cancelled', rating: null, price: '৳2,000' }
  ];

  const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-text-primary/60 backdrop-blur-sm" onClick={onClose} />
        <Card className="relative z-10 w-full max-w-lg p-0 overflow-hidden animate-scale-in">
          <div className="p-6 border-b border-background-muted flex justify-between items-center">
            <h3 className="text-xl font-black font-heading">{title}</h3>
            <button onClick={onClose} className="p-2 hover:bg-background-muted rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>
          <div className="p-6">{children}</div>
        </Card>
      </div>
    );
  };

  return (
    <div className="space-y-10 animate-fade-in pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-black font-heading tracking-tight">My Subscriptions</h1>
          <p className="text-text-secondary font-medium italic">Manage your active commutes and ride history.</p>
        </div>
        <div className="flex bg-background-muted p-1.5 rounded-2xl w-fit shadow-inner">
          <button 
            onClick={() => setActiveTab('active')}
            className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
              activeTab === 'active' ? 'bg-white text-primary-light shadow-premium' : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Active Rides
          </button>
          <button 
            onClick={() => setActiveTab('past')}
            className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
              activeTab === 'past' ? 'bg-white text-primary-light shadow-premium' : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Past History
          </button>
        </div>
      </div>

      {activeTab === 'active' ? (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {activeRides.map((ride) => (
            <Card key={ride.id} className="p-0 overflow-hidden relative group border-primary-light/5 hover:border-primary-light/20 transition-all shadow-xl hover:shadow-2xl">
               <div className="p-8 space-y-8">
                  <div className="flex justify-between items-start">
                     <div className="flex items-center gap-5">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center text-white shadow-lg">
                           <Calendar size={32} />
                        </div>
                        <div className="space-y-1">
                           <h3 className="text-2xl font-black leading-tight tracking-tight">{ride.route}</h3>
                           <div className="flex items-center gap-3 text-sm font-bold text-text-secondary">
                              <span className="flex items-center gap-1.5"><Clock size={16} /> {ride.schedule}</span>
                           </div>
                        </div>
                     </div>
                     <div className="relative">
                        <button className="p-2 hover:bg-background-muted rounded-full transition-colors">
                           <MoreVertical size={20} />
                        </button>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 border-y border-background-muted">
                     <div className="flex items-center gap-4">
                        <img src={ride.avatar} alt={ride.driver} className="w-12 h-12 rounded-2xl border-2 border-white shadow-md object-cover" />
                        <div className="flex-1">
                           <p className="text-[10px] text-text-secondary font-bold uppercase tracking-widest leading-none mb-1">Driver</p>
                           <p className="font-black text-base">{ride.driver}</p>
                           <div className="flex items-center gap-1 text-[10px] font-bold text-amber-500">
                              <Star size={10} fill="currentColor" /> 4.9 • {ride.type}
                           </div>
                        </div>
                     </div>
                     <div className="flex items-center justify-end gap-3">
                        <Button variant="outline" className="h-12 w-12 p-0 rounded-2xl bg-white shadow-sm border-background-muted hover:border-primary-light text-primary-light" icon={MessageSquare} />
                        <Button 
                          variant="primary" 
                          className="h-12 px-6 rounded-2xl bg-gradient-primary shadow-xl italic font-black"
                          onClick={() => setShowTrackModal(true)}
                        >
                          Track Live
                        </Button>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-4">
                        <div className="flex justify-between text-xs font-black uppercase tracking-widest text-text-secondary">
                           <span>Subscription Progress</span>
                           <span className="text-primary-light font-black">{ride.progress} / {ride.total} Rides</span>
                        </div>
                        <div className="w-full h-3 bg-background-muted rounded-full overflow-hidden shadow-inner">
                           <div 
                             className="h-full bg-gradient-secondary rounded-full relative overflow-hidden" 
                             style={{ width: `${(ride.progress / ride.total) * 100}%` }} 
                           >
                              <div className="absolute inset-0 bg-white/20 animate-shimmer" />
                           </div>
                        </div>
                     </div>
                     <div className="p-5 bg-secondary/5 border border-secondary/10 rounded-2xl flex items-center justify-between group/next hover:bg-secondary/10 transition-colors cursor-pointer">
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-white shadow-lg">
                              <Activity size={20} className="animate-pulse" />
                           </div>
                           <div>
                              <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Next Countdown</p>
                              <p className="text-lg font-black text-secondary italic leading-none">{ride.nextRide}</p>
                           </div>
                        </div>
                        <ChevronRight size={20} className="text-secondary group-hover/next:translate-x-1 transition-transform" />
                     </div>
                  </div>
               </div>

               <div className="p-6 bg-background-alt border-t border-background-muted grid grid-cols-3 gap-4">
                  <Button variant="outline" className="h-12 text-[10px] font-black uppercase tracking-widest border-red-500/20 text-red-600 hover:bg-red-500/5" onClick={() => setShowReportModal(true)} icon={AlertCircle}>Report Issue</Button>
                  <Button variant="outline" className="h-12 text-[10px] font-black uppercase tracking-widest" onClick={() => setShowRateModal(true)} icon={Star}>Rate Driver</Button>
                  <Button variant="outline" className="h-12 text-[10px] font-black uppercase tracking-widest border-primary-light/20 text-primary-light">Manage Plan</Button>
               </div>
            </Card>
          ))}
          
          <Link to="/rider/find" className="border-4 border-dashed border-background-muted rounded-[40px] p-12 flex flex-col items-center justify-center gap-6 text-text-secondary hover:border-primary-light/40 hover:text-primary-light hover:bg-primary-light/5 transition-all duration-500 group">
             <div className="w-20 h-20 rounded-full bg-background-muted flex items-center justify-center group-hover:scale-110 group-hover:bg-primary-light group-hover:text-white transition-all duration-500">
                <Calendar size={40} />
             </div>
             <div className="text-center space-y-2">
                <p className="font-black text-2xl font-heading">New Subscription</p>
                <p className="text-sm font-medium italic opacity-70">Find another route for your schedule.</p>
             </div>
          </Link>
        </div>
      ) : (
        <Card className="p-0 overflow-hidden shadow-2xl border-background-muted">
           <div className="p-6 border-b border-background-muted flex justify-between items-center bg-background-alt">
              <h3 className="font-black font-heading text-lg">Subscription History</h3>
              <Button variant="outline" className="h-10 text-[10px] font-black uppercase tracking-widest gap-2" icon={Download}>Export PDF</Button>
           </div>
           <div className="overflow-x-auto">
              <table className="w-full text-left">
                 <thead className="bg-background-muted/50 border-b border-background-muted">
                    <tr>
                       <th className="px-8 py-5 text-[10px] font-black uppercase text-text-secondary tracking-widest">Route Subscription</th>
                       <th className="px-8 py-5 text-[10px] font-black uppercase text-text-secondary tracking-widest">Driver</th>
                       <th className="px-8 py-5 text-[10px] font-black uppercase text-text-secondary tracking-widest">Price</th>
                       <th className="px-8 py-5 text-[10px] font-black uppercase text-text-secondary tracking-widest">Status</th>
                       <th className="px-8 py-5 text-[10px] font-black uppercase text-text-secondary tracking-widest">Actions</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-background-muted">
                    {pastRides.map((ride) => (
                      <tr key={ride.id} className="hover:bg-background-alt/50 transition-colors group">
                         <td className="px-8 py-8">
                            <p className="font-black text-base text-text-primary tracking-tight">{ride.route}</p>
                            <p className="text-[10px] text-text-secondary font-bold uppercase tracking-widest mt-1 italic">{ride.date}</p>
                         </td>
                         <td className="px-8 py-8">
                            <div className="flex items-center gap-3">
                               <div className="w-10 h-10 rounded-xl bg-background-muted p-1">
                                  <img src={`https://i.pravatar.cc/150?u=${ride.id}`} className="w-full h-full rounded-lg object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                               </div>
                               <span className="font-bold text-sm text-text-primary">{ride.driver}</span>
                            </div>
                         </td>
                         <td className="px-8 py-8 text-sm font-black text-text-primary">
                            {ride.price}
                         </td>
                         <td className="px-8 py-8">
                            <span className={`px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm ${
                              ride.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-red-500/10 text-red-600'
                            }`}>
                              {ride.status}
                            </span>
                         </td>
                         <td className="px-8 py-8">
                            <Button variant="ghost" className="h-9 px-4 text-[10px] font-black uppercase tracking-widest text-primary-light hover:bg-primary-light/5">View Reciept</Button>
                         </td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </Card>
      )}

      {/* Modals */}
      <Modal isOpen={showTrackModal} onClose={() => setShowTrackModal(false)} title="Live Tracking">
        <div className="space-y-6">
           <div className="h-80 bg-background-muted rounded-3xl overflow-hidden relative shadow-inner">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80" 
                className="w-full h-full object-cover opacity-60 grayscale" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="relative">
                    <div className="absolute inset-0 bg-primary-light/20 rounded-full animate-ping" />
                    <div className="relative bg-white p-3 rounded-full shadow-2xl border-2 border-primary-light">
                       <Navigation size={24} className="text-primary-light rotate-45" />
                    </div>
                 </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-between border border-white/20">
                 <div>
                    <p className="text-[10px] font-black text-text-secondary uppercase tracking-widest">Current ETA</p>
                    <p className="text-xl font-black italic">6 min 12 sec</p>
                 </div>
                 <div className="flex gap-2">
                    <button className="h-10 w-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-lg"><Phone size={18} /></button>
                    <button className="h-10 w-10 rounded-xl bg-primary-light text-white flex items-center justify-center shadow-lg"><Send size={18} /></button>
                 </div>
              </div>
           </div>
           
           <div className="space-y-4">
              <h4 className="font-bold text-sm uppercase tracking-widest text-text-secondary">Security Info</h4>
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 flex items-center gap-3">
                    <Shield className="text-emerald-500" size={18} />
                    <span className="text-xs font-bold text-emerald-700">Safe Route Active</span>
                 </div>
                 <Button variant="outline" className="h-12 border-red-500/20 text-red-600 font-black italic">Emergency SOS</Button>
              </div>
           </div>
        </div>
      </Modal>

      <Modal isOpen={showReportModal} onClose={() => setShowReportModal(false)} title="Report an Issue">
        <div className="space-y-6">
           <div className="space-y-3">
              <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest">Category</label>
              <div className="grid grid-cols-2 gap-3">
                 {['Late Pickup', 'Rude Behavior', 'Vehicle Issue', 'Safety Concern'].map(cat => (
                   <button key={cat} className="p-4 rounded-2xl border-2 border-background-muted text-left hover:border-primary-light transition-all">
                      <p className="text-sm font-black">{cat}</p>
                   </button>
                 ))}
              </div>
           </div>
           <div className="space-y-3">
              <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest">Description</label>
              <textarea 
                className="w-full h-32 p-4 rounded-2xl border-2 border-background-muted focus:border-primary-light focus:ring-4 focus:ring-primary-light/5 transition-all resize-none outline-none" 
                placeholder="Tell us what happened..."
              />
           </div>
           <Button variant="primary" className="w-full h-14 bg-red-600 shadow-xl shadow-red-600/20 text-lg italic font-black">Submit Report</Button>
        </div>
      </Modal>

      <Modal isOpen={showRateModal} onClose={() => setShowRateModal(false)} title="Rate Your Driver">
        <div className="space-y-8 text-center py-4">
           <div className="space-y-4">
              <div className="flex justify-center gap-3">
                 {[1,2,3,4,5].map(s => (
                   <Star key={s} size={40} className="cursor-pointer text-background-muted hover:text-amber-400 transition-colors" />
                 ))}
              </div>
              <p className="text-sm font-bold text-text-secondary italic">How was your overall experience with Karim?</p>
           </div>
           
           <div className="space-y-4">
              <p className="text-[10px] font-black text-text-secondary uppercase tracking-widest">Add Badges</p>
              <div className="flex flex-wrap justify-center gap-3">
                 {['Punctual', 'Friendly', 'Safe Driver', 'Clean Car'].map(badge => (
                   <button key={badge} className="px-4 py-2 rounded-xl bg-background-muted text-xs font-bold hover:bg-primary-light hover:text-white transition-all">
                      {badge}
                   </button>
                 ))}
              </div>
           </div>

           <textarea 
              className="w-full h-24 p-4 rounded-2xl border-2 border-background-muted focus:border-primary-light outline-none resize-none" 
              placeholder="Leave a comment (optional)"
           />
           
           <Button variant="primary" className="w-full h-14 bg-amber-400 text-text-primary shadow-xl shadow-amber-400/20 text-lg italic font-black" onClick={() => setShowRateModal(false)}>Submit Review</Button>
        </div>
      </Modal>
    </div>
  );
};

export default MyRides;
