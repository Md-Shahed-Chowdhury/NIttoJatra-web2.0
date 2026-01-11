import React from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  Star, 
  ShieldCheck, 
  Zap, 
  Coffee, 
  Wifi, 
  Usb,
  ChevronRight,
  MessageCircle,
  Share2
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const RideDetails = () => {
  const { id } = useParams();

  // Mock data for a single ride
  const ride = {
    driver: 'Karim Uddin',
    avatar: 'https://i.pravatar.cc/150?u=d001',
    rating: 4.9,
    reviews: 124,
    vehicle: 'Toyota Corolla 2021',
    plate: 'DHA-MET-GA-12-34',
    from: 'Uttara Sector 7',
    to: 'Dhanmondi 27',
    stops: [
      { name: 'Airport', time: '08:10 AM' },
      { name: 'Banani', time: '08:35 AM' },
      { name: 'Farmgate', time: '08:50 AM' }
    ],
    time: '08:00 AM',
    days: 'Mon, Tue, Wed, Thu, Sun',
    amenities: ['Air Conditioning', 'Phone Charging', 'Bottle Holder'],
    plans: [
      { name: 'Weekly', price: '650', perRide: '130', savings: '15%' },
      { name: 'Monthly', price: '2,400', perRide: '120', savings: '25%', popular: true },
      { name: 'Quarterly', price: '6,500', perRide: '108', savings: '35%' }
    ]
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Back button */}
      <Link to="/rider/find" className="inline-flex items-center gap-2 text-text-secondary hover:text-primary-light transition-colors font-bold">
        <ArrowLeft size={20} />
        Back to Results
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Route & Driver */}
        <div className="lg:col-span-2 space-y-8">
          {/* Main Info Card */}
          <Card className="p-0 overflow-hidden">
            <div className="h-64 bg-background-muted relative overflow-hidden">
               {/* Map Placeholder */}
               <img 
                 src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80" 
                 alt="Map" 
                 className="w-full h-full object-cover opacity-50 grayscale"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
               <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="px-3 py-1 bg-primary-light text-white text-[10px] font-black rounded-full uppercase tracking-widest">
                    Fixed Route
                  </div>
                  <div className="px-3 py-1 bg-white/80 backdrop-blur-md shadow-sm border border-white/20 text-[10px] font-black rounded-full uppercase tracking-widest text-text-primary">
                    14.2 KM • 45 MIN
                  </div>
               </div>
            </div>

            <div className="p-8 space-y-8">
               <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="space-y-4 flex-1">
                     <h1 className="text-3xl font-black font-heading leading-tight">Uttara to Dhanmondi <br /> Morning Commute</h1>
                     <div className="flex items-center gap-4 text-sm font-medium text-text-secondary">
                        <span className="flex items-center gap-1"><Clock size={16} /> {ride.time} Depature</span>
                        <span className="flex items-center gap-1"><Zap size={16} /> {ride.days}</span>
                     </div>
                  </div>
                  <div className="flex gap-2 h-fit">
                    <Button variant="outline" className="h-12 w-12 p-0" icon={Share2} />
                    <Button variant="outline" className="h-12 w-12 p-0" icon={MessageCircle} />
                  </div>
               </div>

               {/* Timeline */}
               <div className="space-y-6 pt-4">
                  <div className="relative">
                    <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-background-muted" />
                    <div className="space-y-8 relative z-10">
                       <div className="flex items-start gap-6">
                          <div className="w-6 h-6 rounded-full bg-white border-4 border-primary-light mt-1 shadow-sm" />
                          <div>
                            <p className="font-black text-lg">{ride.from}</p>
                            <p className="text-sm text-text-secondary">{ride.time} • Origin Point</p>
                          </div>
                       </div>
                       {ride.stops.map((stop, i) => (
                         <div key={i} className="flex items-start gap-6">
                            <div className="w-6 h-6 rounded-full bg-white border-2 border-background-muted mt-1 shadow-sm" />
                            <div>
                              <p className="font-bold">{stop.name}</p>
                              <p className="text-sm text-text-secondary">{stop.time} • Intermediate Stop</p>
                            </div>
                         </div>
                       ))}
                       <div className="flex items-start gap-6">
                          <div className="w-6 h-6 rounded-full bg-white border-4 border-secondary mt-1 shadow-sm" />
                          <div>
                            <p className="font-black text-lg">{ride.to}</p>
                            <p className="text-sm text-text-secondary">09:00 AM • Destination</p>
                          </div>
                       </div>
                    </div>
                  </div>
               </div>
            </div>
          </Card>

          {/* Amenities & Safety */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <Card className="space-y-4">
                <h3 className="font-bold text-lg font-heading">Ride Amenities</h3>
                <div className="space-y-3">
                   {ride.amenities.map(item => (
                     <div key={item} className="flex items-center gap-3 text-sm text-text-secondary">
                        <div className="w-8 h-8 rounded-lg bg-background-muted flex items-center justify-center text-primary-light">
                           {item.includes('Air') ? <Zap size={16} /> : <Usb size={16} />}
                        </div>
                        {item}
                     </div>
                   ))}
                </div>
             </Card>
             <Card className="bg-emerald-500/5 border-emerald-500/10 space-y-4">
                <h3 className="font-bold text-lg font-heading text-emerald-700">Safety Features</h3>
                <div className="space-y-3">
                   <div className="flex items-center gap-3 text-sm text-emerald-600 font-medium">
                      <ShieldCheck size={18} />
                      Verified Profile & Vehicle
                   </div>
                   <div className="flex items-center gap-3 text-sm text-emerald-600 font-medium">
                      <ShieldCheck size={18} />
                      Real-time GPS Tracking
                   </div>
                   <div className="flex items-center gap-3 text-sm text-emerald-600 font-medium">
                      <ShieldCheck size={18} />
                      Emergency SOS Integration
                   </div>
                </div>
             </Card>
          </div>
        </div>

        {/* Right Column: Plans & Driver Info */}
        <div className="space-y-8">
           {/* Plans Card */}
           <Card className="p-0 border-2 border-primary-light shadow-2xl relative">
              {ride.plans.find(p => p.popular) && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-secondary text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="p-8 space-y-6">
                 <h3 className="text-xl font-black font-heading">Choose Your Plan</h3>
                 
                 <div className="space-y-4">
                    {ride.plans.map((plan) => (
                      <label key={plan.name} className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all group ${
                        plan.popular ? 'border-primary-light bg-primary-light/5' : 'border-background-muted hover:border-primary-light/30'
                      }`}>
                         <div className="flex items-center gap-4">
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              plan.popular ? 'border-primary-light' : 'border-background-muted'
                            }`}>
                               {plan.popular && <div className="w-2.5 h-2.5 bg-primary-light rounded-full" />}
                            </div>
                            <div>
                               <p className="font-bold text-sm">{plan.name} Plan</p>
                               <p className="text-[10px] text-text-secondary font-bold uppercase tracking-tight">Save {plan.savings}</p>
                            </div>
                         </div>
                         <div className="text-right">
                            <p className="text-lg font-black leading-none">৳{plan.price}</p>
                            <p className="text-[10px] text-text-secondary font-medium italic mt-1">৳{plan.perRide}/ride</p>
                         </div>
                         <input type="radio" className="hidden" name="plan" defaultChecked={plan.popular} />
                      </label>
                    ))}
                 </div>

                 <div className="pt-4 space-y-4">
                    <Button variant="primary" className="w-full h-14 text-lg shadow-xl" icon={ChevronRight}>
                      Confirm Subscription
                    </Button>
                    <p className="text-[10px] text-center text-text-secondary">
                      By confirming, you agree to the <span className="underline">Subscription Terms</span> and <span className="underline">Refund Policy</span>.
                    </p>
                 </div>
              </div>
           </Card>

           {/* Driver Profile Summary */}
           <Card className="space-y-6">
              <div className="flex items-center gap-4">
                 <img src={ride.avatar} alt={ride.driver} className="w-16 h-16 rounded-2xl object-cover ring-4 ring-background-alt" />
                 <div>
                    <h4 className="font-black text-lg">{ride.driver}</h4>
                    <div className="flex items-center gap-1 text-sm font-bold text-amber-500">
                       <Star size={16} fill="currentColor" />
                       {ride.rating}
                       <span className="text-text-secondary font-medium ml-1">({ride.reviews} reviews)</span>
                    </div>
                 </div>
              </div>
              
              <div className="space-y-4">
                 <div className="p-4 bg-background-alt rounded-2xl border border-background-muted">
                    <p className="text-[10px] font-bold text-text-secondary uppercase mb-2">Vehicle Details</p>
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary-light shadow-sm">
                          <Car size={20} />
                       </div>
                       <div>
                          <p className="font-bold text-sm leading-tight">{ride.vehicle}</p>
                          <p className="text-[10px] font-mono font-bold text-text-secondary opacity-70 mt-1 uppercase">{ride.plate}</p>
                       </div>
                    </div>
                 </div>
                 
                 <Button variant="outline" className="w-full h-12">View Full Profile</Button>
              </div>
           </Card>
        </div>
      </div>
    </div>
  );
};

export default RideDetails;
