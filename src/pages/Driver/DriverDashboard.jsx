import { useNavigate, Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { 
  Users, 
  TrendingUp, 
  MapPin, 
  Clock, 
  BarChart3, 
  Star,
  ChevronRight,
  PlusCircle,
  Activity,
  Calendar
} from 'lucide-react';

const DriverDashboard = () => {
  const navigate = useNavigate();
  const stats = [
    { label: 'Active Riders', value: '18', trend: '+3 this week', icon: Users, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { label: 'This Month', value: '৳24,500', trend: '+12% vs last month', icon: TrendingUp, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { label: 'Avg Rating', value: '4.9', trend: '124 reviews', icon: Star, color: 'text-amber-500', bg: 'bg-amber-500/10' },
    { label: 'Trips Done', value: '1,204', trend: 'Total lifetime', icon: Activity, color: 'text-purple-500', bg: 'bg-purple-500/10' },
  ];

  const activeRoutes = [
    {
      from: 'Uttara Sector 7',
      to: 'Dhanmondi 27',
      riders: 4,
      capacity: 4,
      time: '08:00 AM',
      earnings: '12,000'
    },
    {
      from: 'Mirpur 10',
      to: 'Gulshan 1',
      riders: 2,
      capacity: 4,
      time: '04:30 PM',
      earnings: '8,400'
    }
  ];

  return (
    <div className="space-y-10 animate-fade-in pb-10">
      {/* Welcome Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black font-heading">Welcome back, Karim! 🚀</h1>
          <p className="text-text-secondary mt-1">You have 2 scheduled trips today.</p>
        </div>
        <Link to="/driver/post">
          <Button variant="primary" className="h-14 px-8 bg-gradient-secondary border-0 shadow-lg" icon={PlusCircle}>
             Create New Route
          </Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="space-y-4 cursor-pointer hover:border-secondary/20 transition-all" onClick={() => navigate('/driver/earnings')}>
             <div className="flex items-center justify-between">
                <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                   <stat.icon size={24} />
                </div>
                <div className="text-[10px] font-black uppercase text-text-secondary bg-background-muted px-2 py-1 rounded-lg">
                   {stat.trend}
                </div>
             </div>
             <div>
                <p className="text-xs font-bold text-text-secondary uppercase tracking-widest">{stat.label}</p>
                <p className="text-3xl font-black font-accent">{stat.value}</p>
             </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Active Routes */}
        <div className="lg:col-span-2 space-y-6">
           <div className="flex items-center justify-between">
              <h2 className="text-xl font-black font-heading">Active Routes</h2>
              <button className="text-sm font-bold text-secondary" onClick={() => navigate('/driver/routes')}>Manage All</button>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeRoutes.map((route, i) => (
                <Card key={i} className="p-0 overflow-hidden group hover:border-secondary/20 cursor-pointer" onClick={() => navigate('/driver/routes')}>
                   <div className="p-6 space-y-6">
                      <div className="flex justify-between items-start">
                         <div className="space-y-1">
                            <p className="text-[10px] font-black text-secondary uppercase tracking-widest">Morning Commute</p>
                            <h3 className="font-bold text-lg">{route.from.split(' ')[0]} → {route.to.split(' ')[0]}</h3>
                         </div>
                         <div className="w-10 h-10 rounded-xl bg-background-muted flex items-center justify-center text-text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                            <ChevronRight size={20} />
                         </div>
                      </div>

                      <div className="flex items-center gap-6">
                         <div className="flex-1 space-y-1">
                            <p className="text-[10px] font-bold text-text-secondary uppercase">Schedule</p>
                            <div className="flex items-center gap-2 font-black text-sm">
                               <Clock size={14} className="text-text-secondary" />
                               {route.time}
                            </div>
                         </div>
                         <div className="flex-1 space-y-1">
                            <p className="text-[10px] font-bold text-text-secondary uppercase">Capacity</p>
                            <div className="flex items-center gap-2 font-black text-sm">
                               <Users size={14} className="text-text-secondary" />
                               {route.riders}/{route.capacity} Riders
                            </div>
                         </div>
                      </div>

                      <div className="w-full h-1.5 bg-background-muted rounded-full overflow-hidden">
                         <div 
                           className="h-full bg-secondary rounded-full" 
                           style={{ width: `${(route.riders / route.capacity) * 100}%` }} 
                         />
                      </div>
                   </div>

                   <div className="p-4 bg-background-alt border-t border-background-muted flex justify-between items-center">
                      <span className="text-xs font-bold text-text-secondary">Earning this Mo.</span>
                      <span className="font-black text-emerald-600">৳{route.earnings}</span>
                   </div>
                </Card>
              ))}
           </div>
        </div>

        {/* Recent Performance */}
        <div className="space-y-6">
           <h2 className="text-xl font-black font-heading">Performance</h2>
           <Card className="p-8 flex flex-col items-center justify-center space-y-6">
              <div className="relative w-40 h-40">
                 <svg className="w-full h-full transform -rotate-90">
                    <circle cx="80" cy="80" r="70" className="stroke-current text-background-muted" strokeWidth="12" fill="transparent" />
                    <circle cx="80" cy="80" r="70" className="stroke-current text-secondary" strokeWidth="12" fill="transparent" strokeDasharray="440" strokeDashoffset="44" strokeLinecap="round" />
                 </svg>
                 <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-black">92%</span>
                    <span className="text-[10px] font-bold text-text-secondary uppercase">On Time</span>
                 </div>
              </div>
              
              <div className="w-full space-y-4">
                 <div className="flex justify-between items-center text-sm">
                    <span className="flex items-center gap-2 text-text-secondary"><Calendar size={14} /> Pickup Punctuality</span>
                    <span className="font-bold">98%</span>
                 </div>
                 <div className="flex justify-between items-center text-sm">
                    <span className="flex items-center gap-2 text-text-secondary"><Star size={14} /> Rider Sentiment</span>
                    <span className="font-bold">Excellent</span>
                 </div>
              </div>

              <Button variant="ghost" className="w-full text-xs font-black uppercase tracking-widest text-secondary hover:bg-secondary/5" onClick={() => navigate('/driver/earnings')}>View Full Analytics</Button>
           </Card>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <Card className="space-y-6">
            <div className="flex items-center justify-between">
               <h3 className="font-black text-lg">Next Trip Riders</h3>
               <span className="text-xs font-bold text-secondary">Start in 45 min</span>
            </div>
            <div className="space-y-4">
               {[
                 { name: 'Ahmed Rahman', from: 'Uttara', to: 'Banani', img: 'https://i.pravatar.cc/150?u=u001' },
                 { name: 'Sara Khan', from: 'Uttara', to: 'Dhanmondi', img: 'https://i.pravatar.cc/150?u=u002' },
               ].map((rider, i) => (
                 <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-background-alt border border-background-muted hover:border-secondary/20 transition-all cursor-pointer" onClick={() => navigate('/driver/riders')}>
                    <div className="flex items-center gap-4">
                       <img src={rider.img} alt={rider.name} className="w-10 h-10 rounded-xl" />
                       <div>
                          <p className="font-bold text-sm">{rider.name}</p>
                          <p className="text-[10px] text-text-secondary uppercase">{rider.from} → {rider.to}</p>
                       </div>
                    </div>
                    <div className="flex gap-2">
                       <button className="w-8 h-8 rounded-lg bg-white border border-background-muted flex items-center justify-center text-text-secondary hover:text-secondary hover:border-secondary transition-all">
                          <PlusCircle size={16} />
                       </button>
                    </div>
                 </div>
               ))}
            </div>
         </Card>

         <Card className="bg-gradient-secondary text-white border-0 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-20 transform translate-x-1/4 -translate-y-1/4">
               <BarChart3 size={200} />
            </div>
            <div className="relative z-10 space-y-6">
               <h3 className="text-2xl font-black font-heading">Ready for Payout?</h3>
               <p className="text-white/80 max-w-xs text-sm">You have <span className="text-white font-black">৳4,520</span> ready to be transferred to your bank account.</p>
               <div className="flex gap-4">
                  <Button className="bg-white text-secondary font-black hover:bg-white/90 shadow-xl px-8 h-12" onClick={() => navigate('/driver/earnings')}>Withdraw Now</Button>
                  <Button variant="ghost" className="text-white hover:bg-white/10 px-6 h-12 border border-white/20" onClick={() => navigate('/driver/earnings')}>History</Button>
               </div>
            </div>
         </Card>
      </div>
    </div>
  );
};

export default DriverDashboard;
