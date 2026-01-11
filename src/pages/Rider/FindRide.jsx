import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { 
  Search, 
  MapPin, 
  Clock, 
  Users, 
  Filter, 
  Car, 
  Zap, 
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

const FindRide = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const mockRides = [
    {
      id: 1,
      driver: 'Karim Uddin',
      avatar: 'https://i.pravatar.cc/150?u=d001',
      rating: 4.9,
      from: 'Uttara Sector 7',
      to: 'Dhanmondi 27',
      time: '08:00 AM',
      days: ['Mon', 'Wed', 'Fri'],
      seats: '2/4',
      vehicle: 'Toyota Corolla',
      price: '150',
      subPrice: '2,400',
      womenOnly: false,
      amenities: ['AC', 'Music']
    },
    {
      id: 2,
      driver: 'Nusrat Jahan',
      avatar: 'https://i.pravatar.cc/150?u=d002',
      rating: 4.8,
      from: 'Mirpur 10',
      to: 'Gulshan 1',
      time: '08:30 AM',
      days: ['Sun', 'Tue', 'Thu'],
      seats: '1/4',
      vehicle: 'Honda Civic',
      price: '180',
      subPrice: '2,800',
      womenOnly: true,
      amenities: ['AC', 'Charging']
    },
    {
      id: 3,
      driver: 'Rahat Ahmed',
      avatar: 'https://i.pravatar.cc/150?u=d003',
      rating: 4.7,
      from: 'Banani',
      to: 'Motijheel',
      time: '09:00 AM',
      days: ['Daily'],
      seats: '3/4',
      vehicle: 'Nissan Sunny',
      price: '120',
      subPrice: '2,000',
      womenOnly: false,
      amenities: ['AC']
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Search Header */}
      <div className="space-y-6">
        <h1 className="text-3xl font-bold font-heading">Find Your Perfect Commute</h1>
        
        <Card className="p-2 md:p-4 shadow-xl border-primary-light/10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-1">
              <Input 
                placeholder="From where?" 
                icon={MapPin} 
                className="bg-transparent" 
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>
            <div className="md:col-span-1">
              <Input 
                placeholder="To where?" 
                icon={MapPin} 
                className="bg-transparent"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </div>
            <div className="md:col-span-1">
              <div className="relative">
                <Input placeholder="Schedule" icon={Clock} className="bg-transparent" readOnly />
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
              </div>
            </div>
            <Button variant="primary" className="h-[52px] shadow-lg">
              Search Rides
            </Button>
          </div>
        </Card>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full lg:w-64 space-y-6">
           <div className="flex items-center justify-between">
              <h2 className="font-bold flex items-center gap-2">
                <Filter size={18} />
                Filters
              </h2>
              <button className="text-xs text-primary-light font-bold">Reset All</button>
           </div>
           
           <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-bold text-text-secondary uppercase tracking-widest">Vehicle Type</p>
                <div className="grid grid-cols-2 gap-2">
                   {['Car', 'Bike', 'Van', 'SUV'].map(type => (
                     <button key={type} className="px-4 py-2 rounded-xl border border-background-muted text-sm font-medium hover:border-primary-light hover:text-primary-light transition-all">
                       {type}
                     </button>
                   ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-bold text-text-secondary uppercase tracking-widest">Amenities</p>
                <div className="space-y-2">
                   {['AC', 'Music', 'No Smoking', 'Phone Charging'].map(label => (
                     <label key={label} className="flex items-center gap-2 cursor-pointer group">
                        <div className="w-5 h-5 rounded border-2 border-background-muted group-hover:border-primary-light transition-all flex items-center justify-center">
                           <div className="w-2.5 h-2.5 bg-primary-light rounded-sm opacity-0 group-has-[:checked]:opacity-100" />
                        </div>
                        <input type="checkbox" className="hidden" />
                        <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">{label}</span>
                     </label>
                   ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-primary-light/5 border border-primary-light/10 space-y-3">
                 <div className="flex items-center justify-between">
                    <span className="text-sm font-bold">Women-Only</span>
                    <div className="w-10 h-5 bg-background-muted rounded-full relative cursor-pointer">
                       <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5 shadow-sm" />
                    </div>
                 </div>
                 <p className="text-[10px] text-text-secondary">Only show rides with women drivers or passengers.</p>
              </div>
           </div>
        </div>

        {/* Results Grid */}
        <div className="flex-1 space-y-6">
           <div className="flex items-center justify-between">
              <p className="text-sm text-text-secondary">Showing <span className="font-bold text-text-primary">{mockRides.length} rides</span> matching your criteria</p>
              <div className="flex items-center gap-2 text-sm font-medium">
                Sort by: <span className="text-primary-light cursor-pointer flex items-center gap-1">Relavance <ChevronDown size={14} /></span>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockRides.map((ride) => (
                <Card key={ride.id} className="p-0 overflow-hidden flex flex-col group h-full">
                  <div className="p-6 space-y-4 flex-1">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <img src={ride.avatar} alt={ride.driver} className="w-10 h-10 rounded-full border border-background-muted" />
                        <div>
                          <p className="font-bold text-sm leading-none">{ride.driver}</p>
                          <p className="text-[10px] text-amber-500 font-bold tracking-tight">⭐ {ride.rating} Driver</p>
                        </div>
                      </div>
                      {ride.womenOnly && (
                        <div className="bg-pink-100 text-pink-600 px-2 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider">
                          Women Only
                        </div>
                      )}
                    </div>

                    <div className="space-y-4 pt-2">
                       <div className="flex items-start gap-3">
                          <div className="flex flex-col items-center pt-1">
                             <div className="w-2 h-2 rounded-full border-2 border-primary-light" />
                             <div className="w-px h-6 bg-background-muted" />
                             <div className="w-2 h-2 rounded-full bg-secondary" />
                          </div>
                          <div className="space-y-3 flex-1">
                             <div>
                               <p className="text-[10px] uppercase font-bold text-text-secondary tracking-tighter">Pickup</p>
                               <p className="text-sm font-bold truncate">{ride.from}</p>
                             </div>
                             <div>
                               <p className="text-[10px] uppercase font-bold text-text-secondary tracking-tighter">Dropoff</p>
                               <p className="text-sm font-bold truncate">{ride.to}</p>
                             </div>
                          </div>
                       </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                       <div className="flex items-center gap-1 px-2 py-1 bg-background-muted rounded-lg text-[10px] font-bold">
                          <Clock size={12} /> {ride.time}
                       </div>
                       <div className="flex items-center gap-1 px-2 py-1 bg-background-muted rounded-lg text-[10px] font-bold">
                          <Users size={12} /> {ride.seats} seats
                       </div>
                       <div className="flex items-center gap-1 px-2 py-1 bg-background-muted rounded-lg text-[10px] font-bold">
                          <Car size={12} /> {ride.vehicle.split(' ')[0]}
                       </div>
                    </div>
                  </div>

                  <div className="p-6 bg-background-alt border-t border-background-muted mt-auto">
                    <div className="flex items-end justify-between mb-4">
                       <div>
                          <p className="text-[10px] font-bold text-text-secondary uppercase">From</p>
                          <p className="text-xl font-black">৳{ride.price}<span className="text-xs font-normal text-text-secondary"> /ride</span></p>
                       </div>
                       <div className="text-right">
                          <p className="text-[10px] font-bold text-primary-light uppercase">Subscribed</p>
                          <p className="text-lg font-black text-primary-light">৳{ride.subPrice}<span className="text-xs font-normal text-text-secondary"> /mo</span></p>
                       </div>
                    </div>
                    <Button variant="primary" className="w-full h-12 shadow-md group-hover:shadow-primary-light/20 transition-all">
                      View Details
                    </Button>
                  </div>
                </Card>
              ))}
           </div>
           
           {/* Load More */}
           <div className="flex justify-center pt-8">
              <Button variant="outline" className="px-12">Load More Rides</Button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default FindRide;
