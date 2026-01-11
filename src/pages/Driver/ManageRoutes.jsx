import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { 
  Plus, 
  Search, 
  MoreVertical, 
  MapPin, 
  Calendar, 
  Users, 
  TrendingUp,
  Filter,
  ArrowUpRight,
  Pause,
  Play,
  Trash2,
  Edit2
} from 'lucide-react';

const mockRoutes = [
  {
    id: 'r1',
    from: 'Uttara Sector 7',
    to: 'Dhanmondi 27',
    schedule: 'Mon, Wed, Fri',
    time: '8:00 AM',
    riders: 3,
    capacity: 4,
    status: 'Active',
    earnings: 'BDR 12,400',
    color: 'bg-emerald-500'
  },
  {
    id: 'r2',
    from: 'Mirpur 10',
    to: 'Gulshan 2',
    schedule: 'Sun - Thu',
    time: '9:15 AM',
    riders: 4,
    capacity: 4,
    status: 'Full',
    earnings: 'BDR 18,200',
    color: 'bg-blue-500'
  },
  {
    id: 'r3',
    from: 'Banani',
    to: 'Motijheel',
    schedule: 'Tue, Thu',
    time: '8:30 AM',
    riders: 1,
    capacity: 3,
    status: 'Paused',
    earnings: 'BDR 4,500',
    color: 'bg-amber-500'
  }
];

const ManageRoutes = () => {
  const [activeTab, setActiveTab] = useState('Active');

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading">Manage Your Routes</h1>
          <p className="text-text-secondary">View and organize all your posted ride subscriptions.</p>
        </div>
        <Button variant="primary" className="shadow-lg shadow-primary/20" icon={Plus}>
          Post New Route
        </Button>
      </div>

      {/* Tabs & Search */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between py-2">
        <div className="flex p-1 bg-background-alt rounded-xl border border-background-muted overflow-x-auto w-full md:w-auto">
          {['Active', 'Scheduled', 'Past', 'Drafts'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-all whitespace-nowrap ${
                activeTab === tab 
                  ? 'bg-white text-primary shadow-sm ring-1 ring-background-muted' 
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
          <input 
            type="text" 
            placeholder="Search routes..." 
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-background-muted focus:ring-2 focus:ring-primary-light transition-all text-sm outline-none"
          />
        </div>
      </div>

      {/* Routes Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockRoutes.map((route) => (
          <Card key={route.id} className="group hover:border-primary-light/20">
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-2xl ${route.color} flex items-center justify-center text-white shadow-lg`}>
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${route.status === 'Active' ? 'bg-emerald-500' : route.status === 'Full' ? 'bg-blue-500' : 'bg-amber-500'}`} />
                      <span className="text-xs font-bold uppercase tracking-widest">{route.status}</span>
                    </div>
                    <p className="font-bold text-lg">{route.from} ↔ {route.to}</p>
                  </div>
                </div>
                <button className="p-2 hover:bg-background-muted rounded-lg transition-colors">
                  <MoreVertical size={20} className="text-text-secondary" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 py-4 border-y border-background-muted/50">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-text-secondary">
                    <Calendar size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-tighter">Schedule</span>
                  </div>
                  <p className="text-xs font-bold truncate">{route.schedule}</p>
                </div>
                <div className="space-y-1 border-x border-background-muted/50 px-4">
                  <div className="flex items-center gap-1.5 text-text-secondary">
                    <Users size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-tighter">Riders</span>
                  </div>
                  <p className="text-xs font-bold">{route.riders} / {route.capacity}</p>
                </div>
                <div className="space-y-1 pl-4">
                  <div className="flex items-center gap-1.5 text-text-secondary">
                    <ArrowUpRight size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-tighter">Earnings</span>
                  </div>
                  <p className="text-xs font-bold text-emerald-600">{route.earnings}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1 h-11 text-xs" icon={Edit2}>Edit</Button>
                {route.status === 'Paused' ? (
                  <Button variant="outline" className="flex-1 h-11 text-xs border-emerald-500 text-emerald-600 hover:bg-emerald-50" icon={Play}>Resume</Button>
                ) : (
                  <Button variant="outline" className="flex-1 h-11 text-xs border-amber-500 text-amber-600 hover:bg-amber-50" icon={Pause}>Pause</Button>
                )}
                <Button variant="outline" className="h-11 w-11 p-0 border-red-200 text-red-500 hover:bg-red-50" icon={Trash2} />
              </div>
            </div>
          </Card>
        ))}
        
        {/* Add New Card Slot */}
        <button className="border-2 border-dashed border-background-muted rounded-3xl p-8 flex flex-col items-center justify-center text-text-secondary hover:border-primary-light hover:text-primary-light transition-all group min-h-[250px]">
          <div className="w-16 h-16 rounded-full bg-background-alt flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Plus size={32} />
          </div>
          <p className="font-bold">Post a New Route</p>
          <p className="text-xs">Expand your earning potential</p>
        </button>
      </div>
    </div>
  );
};

export default ManageRoutes;
