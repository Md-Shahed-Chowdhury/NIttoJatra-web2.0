import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { 
  Users, 
  MessageSquare, 
  Phone, 
  Star, 
  MapPin, 
  Clock,
  MoreHorizontal,
  Search,
  CheckCircle2,
  Calendar,
  XCircle
} from 'lucide-react';

const mockRiders = [
  {
    id: 1,
    name: "Ahmed Rahman",
    avatar: "https://i.pravatar.cc/150?u=a001",
    rating: 4.8,
    route: "Uttara ↔ Dhanmondi",
    plan: "Monthly Premium",
    joinDate: "Jan 1, 2024",
    status: "Active",
    days: "Mon, Wed, Fri"
  },
  {
    id: 2,
    name: "Nabil Khan",
    avatar: "https://i.pravatar.cc/150?u=a002",
    rating: 4.5,
    route: "Mirpur ↔ Gulshan",
    plan: "Weekly Base",
    joinDate: "Jan 5, 2024",
    status: "Active",
    days: "Sun - Thu"
  },
  {
    id: 3,
    name: "Sarah Islam",
    avatar: "https://i.pravatar.cc/150?u=a003",
    rating: 4.9,
    route: "Uttara ↔ Dhanmondi",
    plan: "Monthly Premium",
    joinDate: "Dec 15, 2023",
    status: "Pending",
    days: "Mon, Wed, Fri"
  },
  {
    id: 4,
    name: "Karim Sheikh",
    avatar: "https://i.pravatar.cc/150?u=a004",
    rating: 4.2,
    route: "Banani ↔ Motijheel",
    plan: "Single Ride",
    joinDate: "Jan 10, 2024",
    status: "Cancelled",
    days: "Tue, Thu"
  }
];

const RidersList = () => {
  const [filter, setFilter] = useState('All');

  const filteredRiders = filter === 'All' 
    ? mockRiders 
    : mockRiders.filter(r => r.status === filter);

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading">Your Riders</h1>
          <p className="text-text-secondary">Manage your subscribers and route community.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-12" icon={MessageSquare}>Broadcast Message</Button>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between py-2">
        <div className="flex p-1 bg-background-alt rounded-xl border border-background-muted overflow-x-auto w-full md:w-auto">
          {['All', 'Active', 'Pending', 'Cancelled'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-all whitespace-nowrap ${
                filter === f 
                  ? 'bg-white text-primary shadow-sm ring-1 ring-background-muted' 
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
          <input 
            type="text" 
            placeholder="Search riders by name..." 
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-background-muted focus:ring-2 focus:ring-primary-light transition-all text-sm outline-none"
          />
        </div>
      </div>

      {/* Riders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRiders.map((rider) => (
          <Card key={rider.id} className="group hover:border-primary-light/20 relative">
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img src={rider.avatar} alt={rider.name} className="w-16 h-16 rounded-2xl object-cover ring-2 ring-background-muted group-hover:ring-primary-light/30 transition-all" />
                    <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center text-white ${rider.status === 'Active' ? 'bg-emerald-500' : rider.status === 'Pending' ? 'bg-amber-500' : 'bg-red-500'}`}>
                      {rider.status === 'Active' ? <CheckCircle2 size={12} /> : rider.status === 'Pending' ? <Clock size={12} /> : <XCircle size={12} />}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{rider.name}</h3>
                    <div className="flex items-center gap-1.5 text-amber-500 text-xs font-bold">
                      <Star size={14} fill="currentColor" />
                      <span>{rider.rating}</span>
                      <span className="text-text-secondary font-medium">• {rider.plan}</span>
                    </div>
                  </div>
                </div>
                <button className="p-2 hover:bg-background-muted rounded-lg transition-colors">
                  <MoreHorizontal size={20} className="text-text-secondary" />
                </button>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-text-secondary">
                  <MapPin size={16} className="text-primary-light" />
                  <span className="font-medium">{rider.route}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-text-secondary">
                  <Calendar size={16} className="text-primary-light" />
                  <span className="font-medium">{rider.days}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-text-secondary">
                  <Clock size={16} className="text-primary-light" />
                  <span className="font-medium italic">Joined {rider.joinDate}</span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Button variant="primary" className="flex-1 h-11 text-xs" icon={MessageSquare}>Chat</Button>
                <Button variant="outline" className="flex-1 h-11 text-xs" icon={Phone}>Call</Button>
              </div>
            </div>
          </Card>
        ))}

        {filteredRiders.length === 0 && (
          <div className="col-span-full py-12 text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-background-alt flex items-center justify-center mx-auto text-text-secondary">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold">No riders found</h3>
            <p className="text-text-secondary">Adjust your filters to see more people.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RidersList;
