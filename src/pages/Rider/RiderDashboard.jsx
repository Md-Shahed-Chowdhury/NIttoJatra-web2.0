import React from 'react';
import Card from '../../components/ui/Card';
import { 
  Bell, 
  ChevronRight, 
  MapPin, 
  Clock, 
  Shield, 
  Search, 
  History, 
  Wallet,
  TrendingUp,
  Award
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../../components/ui/Button';

const RiderDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 md:p-12 shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold font-heading mb-2">Good morning, Ahmed! 👋</h1>
            <p className="text-slate-300 text-lg">Your commute is looking smooth today.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/rider/notifications">
              <Button className="h-11 px-6 bg-white/10 hover:bg-white/20 text-white border border-white/10 backdrop-blur-sm" icon={Bell}>
                Alerts
              </Button>
            </Link>
            <Link to="/rider/find">
              <Button className="h-11 shadow-lg bg-white text-slate-900 hover:bg-slate-50 border-0 font-bold" icon={Search}>
                Find a Ride
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Widgets Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Next Ride Card */}
        <Card className="lg:col-span-2 relative overflow-hidden group border-slate-200">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <MapPin size={120} className="text-slate-900" />
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 relative z-10">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm uppercase tracking-widest">
                <span className="flex h-2 w-2 rounded-full bg-slate-900 animate-pulse" />
                Next Ride in 24 Minutes
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-slate-900" />
                    <div className="w-0.5 h-10 bg-slate-200" />
                    <div className="w-3 h-3 rounded-full bg-slate-400" />
                  </div>
                  <div className="space-y-8 flex-1">
                    <div>
                      <p className="text-xs text-slate-500 font-bold tracking-wider">PICKUP</p>
                      <p className="font-bold text-slate-900 text-lg">Uttara Sector 7</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold tracking-wider">DROPOFF</p>
                      <p className="font-bold text-slate-900 text-lg">Dhanmondi 27</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                <Button className="flex-1 md:flex-none h-12 shadow-md" onClick={() => navigate('/rider/track')}>Track Live</Button>
                <Button variant="outline" className="flex-1 md:flex-none h-12" onClick={() => navigate('/rider/view-route')}>View Route</Button>
              </div>
            </div>
            
            <div className="w-full md:w-64 bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-4">
               <div className="flex items-center gap-3">
                  <img src="https://i.pravatar.cc/150?u=d001" alt="Driver" className="w-12 h-12 rounded-full border-2 border-white shadow-md" />
                  <div>
                    <p className="font-bold text-sm text-slate-900">Karim Uddin</p>
                    <p className="text-xs text-slate-500">Toyota Corolla • 4.9★</p>
                  </div>
               </div>
               <div className="pt-4 border-t border-slate-200">
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-2">Vehicle Plate</p>
                  <p className="font-mono font-bold text-sm bg-white px-3 py-1.5 rounded-lg border border-slate-100 inline-block text-slate-700">
                    DHA-MET-GA-12-34
                  </p>
               </div>
            </div>
          </div>
        </Card>

        {/* Subscription Status */}
        <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white border-0 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-10 -translate-y-10"></div>
          <div className="space-y-6 relative z-10">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-white/80 text-sm font-medium">Active Plan</p>
                <h3 className="text-xl font-bold">Monthly Premium</h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                <Award size={24} />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-white/90">
                <span>Rides Used</span>
                <span>8 / 20</span>
              </div>
              <div className="w-full h-2 bg-black/20 rounded-full overflow-hidden">
                <div className="h-full bg-white rounded-full shadow-lg" style={{ width: '40%' }} />
              </div>
            </div>
            
            <p className="text-sm text-white/90 font-medium">
              Renews in <span className="font-bold text-white">12 days</span>.
            </p>
            
            <Link to="/rider/payment">
              <Button className="w-full bg-white text-indigo-600 hover:bg-indigo-50 border-0 shadow-lg py-3 font-bold">
                Manage Subscription
              </Button>
            </Link>
          </div>
        </Card>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Rides', value: '45', icon: History, bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100' },
          { label: 'Money Saved', value: '৳8,450', icon: TrendingUp, bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-100' },
          { label: 'CO2 Reduced', value: '124kg', icon: Shield, bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-100' },
          { label: 'Wallet Balance', value: '৳520', icon: Wallet, bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-100' },
        ].map((stat, i) => (
          <div key={i} className={`p-5 rounded-2xl flex items-center gap-4 transition-all hover:-translate-y-1 hover:shadow-lg border ${stat.bg} ${stat.border}`}>
            <div className={`p-3 rounded-xl bg-white shadow-sm ${stat.text}`}>
              <stat.icon size={22} />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{stat.label}</p>
              <p className={`text-xl font-black ${stat.text}`}>{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions & Notifications */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-10">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold font-heading">Recent Notifications</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-background-muted hover:border-primary-light/20 transition-all cursor-pointer group">
                <div className="w-12 h-12 rounded-xl bg-background-muted flex items-center justify-center text-primary-light group-hover:bg-primary-light group-hover:text-white transition-colors">
                  <Bell size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm">Ride Confirmation</p>
                  <p className="text-xs text-text-secondary">Your ride for tomorrow at 8:00 AM has been confirmed by Karim.</p>
                </div>
                <span className="text-[10px] text-text-secondary font-medium">2h ago</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-xl font-bold font-heading">Your Badges</h2>
          <Card className="flex flex-col items-center justify-center p-8 space-y-4">
             <div className="flex -space-x-4">
                {['Eco Warrior', 'Early Bird', '5-Star'].map((badge, i) => (
                  <div key={i} className="w-16 h-16 rounded-full bg-white shadow-premium border-4 border-background-muted flex items-center justify-center group cursor-help relative">
                    <Award className="text-primary" />
                    <div className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity bg-text-primary text-white text-[10px] px-2 py-1 rounded whitespace-nowrap z-50">
                      {badge}
                    </div>
                  </div>
                ))}
             </div>
             <p className="text-sm font-medium text-text-secondary italic">Keep riding to unlock more!</p>
             <Button variant="ghost" className="text-xs">View Achievement Gallery</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RiderDashboard;
