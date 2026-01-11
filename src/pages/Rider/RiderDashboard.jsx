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
import Button from '../../components/ui/Button';

const RiderDashboard = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading">Good morning, Ahmed! 👋</h1>
          <p className="text-text-secondary">Here's what's happening with your commute today.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-11 px-4" icon={Bell}>
            Notifications
          </Button>
          <Button variant="primary" className="h-11 shadow-lg" icon={Search}>
            Find a Ride
          </Button>
        </div>
      </div>

      {/* Main Widgets Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Next Ride Card */}
        <Card className="lg:col-span-2 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
            <MapPin size={120} />
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 relative z-10">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-2 text-primary-light font-bold text-sm uppercase tracking-widest">
                <span className="flex h-2 w-2 rounded-full bg-primary-light animate-pulse" />
                Next Ride in 24 Minutes
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary-light" />
                    <div className="w-0.5 h-10 bg-background-muted" />
                    <div className="w-3 h-3 rounded-full bg-secondary" />
                  </div>
                  <div className="space-y-8 flex-1">
                    <div>
                      <p className="text-xs text-text-secondary font-medium">PICKUP</p>
                      <p className="font-bold">Uttara Sector 7</p>
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary font-medium">DROPOFF</p>
                      <p className="font-bold">Dhanmondi 27</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                <Button className="flex-1 md:flex-none h-12">Track Live</Button>
                <Button variant="outline" className="flex-1 md:flex-none h-12">View Route</Button>
              </div>
            </div>
            
            <div className="w-full md:w-64 bg-background-alt rounded-2xl p-6 border border-background-muted space-y-4">
               <div className="flex items-center gap-3">
                  <img src="https://i.pravatar.cc/150?u=d001" alt="Driver" className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
                  <div>
                    <p className="font-bold text-sm">Karim Uddin</p>
                    <p className="text-xs text-text-secondary">Toyota Corolla • 4.9★</p>
                  </div>
               </div>
               <div className="pt-4 border-t border-background-muted">
                  <p className="text-[10px] text-text-secondary font-bold uppercase mb-2">Vehicle Plate</p>
                  <p className="font-mono font-bold text-sm bg-white px-3 py-1.5 rounded-lg border border-background-muted inline-block">
                    DHA-MET-GA-12-34
                  </p>
               </div>
            </div>
          </div>
        </Card>

        {/* Subscription Status */}
        <Card className="bg-gradient-primary text-white border-0">
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-white/70 text-sm font-medium">Active Plan</p>
                <h3 className="text-xl font-bold">Monthly Premium</h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                <Award size={24} />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold uppercase">
                <span>Rides Used</span>
                <span>8 / 20</span>
              </div>
              <div className="w-full h-2.5 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white rounded-full" style={{ width: '40%' }} />
              </div>
            </div>
            
            <p className="text-sm text-white/80">
              Your subscription renews in <span className="font-bold text-white">12 days</span>.
            </p>
            
            <Button className="w-full bg-white text-primary-dark hover:bg-white/90 shadow-xl py-4">
              Manage Subscription
            </Button>
          </div>
        </Card>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Rides', value: '45', icon: History, color: 'text-blue-500' },
          { label: 'Money Saved', value: '৳8,450', icon: TrendingUp, color: 'text-emerald-500' },
          { label: 'CO2 Reduced', value: '124kg', icon: Shield, color: 'text-purple-500' },
          { label: 'Wallet Balance', value: '৳520', icon: Wallet, color: 'text-amber-500' },
        ].map((stat, i) => (
          <Card key={i} className="p-4 flex items-center gap-4">
            <div className={`p-3 rounded-xl bg-background-muted ${stat.color}`}>
              <stat.icon size={20} />
            </div>
            <div>
              <p className="text-xs text-text-secondary font-medium uppercase tracking-tighter">{stat.label}</p>
              <p className="text-lg font-black">{stat.value}</p>
            </div>
          </Card>
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
