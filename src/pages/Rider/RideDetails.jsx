import React, { useState } from 'react';
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
  Share2,
  Calendar
} from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const RideDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState('Monthly');

  // Mock data for a single ride
  const ride = {
    driver: 'Karim Uddin',
    avatar: 'https://i.pravatar.cc/150?u=d001',
    rating: 4.9,
    reviews: 124,
    vehicle: {
      name: 'Toyota Corolla 2021',
      plate: 'DHA-MET-GA-12-34',
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80',
      color: 'Midnight Blue'
    },
    from: 'Uttara Sector 7',
    to: 'Dhanmondi 27',
    stops: [
      { name: 'Airport', time: '08:10 AM', distance: '3.2 km' },
      { name: 'Banani', time: '08:35 AM', distance: '5.8 km' },
      { name: 'Farmgate', time: '08:50 AM', distance: '2.4 km' }
    ],
    time: '08:00 AM',
    days: 'Mon, Tue, Wed, Thu, Fri',
    verification: ['ID Verified', 'License Verified', 'Vehicle Insured'],
    amenities: ['AC', 'Bluetooth', 'USB Charging', 'Bottle Holder'],
    plans: [
      { name: 'Weekly', price: '650', perRide: '130', savings: '15%', icon: Calendar },
      { name: 'Monthly', price: '2,400', perRide: '120', savings: '25%', icon: Zap, popular: true },
      { name: 'Quarterly', price: '6,500', perRide: '108', savings: '35%', icon: ShieldCheck }
    ],
    reviewsList: [
      { name: 'Anik Khan', rating: 5, date: '2 days ago', comment: 'Very punctual and the car was very clean. Highly recommended!', avatar: 'https://i.pravatar.cc/150?u=u1' },
      { name: 'Sara Jahan', rating: 5, date: '1 week ago', comment: 'Safe driving and polite behavior. Great commute experience.', avatar: 'https://i.pravatar.cc/150?u=u2' },
      { name: 'Tanvir Hasan', rating: 4, date: '2 weeks ago', comment: 'Good ride, but the traffic was bad. Driver handled it well.', avatar: 'https://i.pravatar.cc/150?u=u3' }
    ]
  };

  return (
    <div className="relative min-h-screen bg-background pb-32 lg:pb-0">
      <div className="max-w-[1400px] mx-auto px-4 py-8 space-y-8">
        {/* Navigation */}
        <Link to="/rider/find" className="inline-flex items-center gap-2 text-text-secondary hover:text-primary-light transition-colors font-bold group">
          <div className="p-2 rounded-full bg-white shadow-sm border border-background-muted group-hover:border-primary-light/20">
            <ArrowLeft size={18} />
          </div>
          Back to Results
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Map & Timeline */}
          <div className="lg:col-span-12 xl:col-span-8 space-y-10">
            {/* Map Section */}
            <Card className="p-0 overflow-hidden relative h-[400px] lg:h-[500px]">
               <div className="absolute inset-0 bg-background-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1400&q=80" 
                    alt="Map" 
                    className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  {/* Simulated Route Line */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                     <div className="w-3/4 h-2 bg-primary-light/20 rounded-full relative overflow-hidden">
                        <div className="absolute inset-0 bg-primary-light animate-shimmer opacity-30" />
                     </div>
                  </div>
               </div>
               
               <div className="absolute top-6 left-6 z-10 flex gap-2">
                  <div className="px-4 py-2 bg-white/90 backdrop-blur-md shadow-xl border border-white/20 rounded-2xl flex items-center gap-2">
                     <MapPin size={16} className="text-secondary" />
                     <span className="text-xs font-black uppercase tracking-tight">Uttara → Dhanmondi</span>
                  </div>
               </div>

               <Button variant="outline" className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md border-white/20 shadow-xl h-11 px-4 text-xs font-bold uppercase tracking-widest">
                  View in Fullscreen
               </Button>
            </Card>

            {/* Route Points List (Timeline) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div className="space-y-6">
                  <h3 className="text-xl font-black font-heading flex items-center gap-3">
                     <div className="w-1.5 h-8 bg-secondary rounded-full" />
                     Route Timeline
                  </h3>
                  <div className="relative pl-4 space-y-12">
                     <div className="absolute left-[31px] top-6 bottom-6 w-0.5 bg-background-muted ltr" />
                     
                     {/* Origin */}
                     <div className="relative flex gap-6">
                        <div className="w-10 h-10 rounded-full bg-white border-4 border-emerald-500 shadow-lg flex items-center justify-center z-10">
                           <MapPin size={16} className="text-emerald-500" />
                        </div>
                        <div className="flex-1 space-y-1">
                           <p className="text-base font-black text-text-primary">{ride.from}</p>
                           <p className="text-xs font-bold text-text-secondary uppercase tracking-tight">{ride.time} • Origin</p>
                        </div>
                     </div>

                     {/* Intermediate Stops */}
                     {ride.stops.map((stop, i) => (
                       <div key={i} className="relative flex gap-6">
                          <div className="w-10 h-10 rounded-full bg-white border-2 border-background-muted shadow-md flex items-center justify-center z-10">
                             <div className="w-3 h-3 rounded-full bg-background-muted" />
                          </div>
                          <div className="flex-1 space-y-1">
                             <p className="text-sm font-bold text-text-primary">{stop.name}</p>
                             <p className="text-xs text-text-secondary font-medium">{stop.time} • +{stop.distance} from previous</p>
                          </div>
                       </div>
                     ))}

                     {/* Destination */}
                     <div className="relative flex gap-6">
                        <div className="w-10 h-10 rounded-full bg-white border-4 border-secondary shadow-lg flex items-center justify-center z-10">
                           <MapPin size={16} className="text-secondary" />
                        </div>
                        <div className="flex-1 space-y-1">
                           <p className="text-base font-black text-text-primary">{ride.to}</p>
                           <p className="text-xs font-bold text-text-secondary uppercase tracking-tight">~09:15 AM • Destination</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Driver & Vehicle Details Card */}
               <div className="space-y-6">
                  <h3 className="text-xl font-black font-heading flex items-center gap-3">
                     <div className="w-1.5 h-8 bg-primary rounded-full" />
                     Driver & Vehicle
                  </h3>
                  <Card className="p-0 overflow-hidden border-primary-light/5 shadow-premium">
                     <div className="p-6 space-y-6">
                        <div className="flex items-center gap-4">
                           <img src={ride.avatar} alt={ride.driver} className="w-20 h-20 rounded-2xl object-cover ring-4 ring-background-alt shadow-lg" />
                           <div className="space-y-1">
                              <h4 className="text-xl font-black">{ride.driver}</h4>
                              <div className="flex items-center gap-2">
                                 <div className="flex items-center gap-0.5 text-amber-500">
                                    {[1,2,3,4,5].map(s => <Star key={s} size={14} fill={s <= 4 ? "currentColor" : "none"} className={s === 5 ? "text-background-muted" : ""} />)}
                                 </div>
                                 <span className="text-sm font-bold">{ride.rating}</span>
                                 <span className="text-xs text-text-secondary font-medium">({ride.reviews} reviews)</span>
                              </div>
                              <div className="flex flex-wrap gap-2 pt-1">
                                 {ride.verification.map(v => (
                                   <div key={v} className="bg-emerald-500/10 text-emerald-600 px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                                      <ShieldCheck size={10} />
                                      {v}
                                   </div>
                                 ))}
                              </div>
                           </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-background-alt border border-background-muted grid grid-cols-2 gap-4">
                           <div className="space-y-1">
                              <p className="text-[10px] font-bold text-text-secondary uppercase">Make/Model</p>
                              <p className="text-sm font-black">{ride.vehicle.name}</p>
                              <div className="flex items-center gap-1.5">
                                 <div className="w-3 h-3 rounded-full shadow-inner" style={{ backgroundColor: '#1e1b4b' }} />
                                 <p className="text-[10px] font-medium text-text-secondary">{ride.vehicle.color}</p>
                              </div>
                           </div>
                           <div className="space-y-1">
                              <p className="text-[10px] font-bold text-text-secondary uppercase">Plate Number</p>
                              <p className="text-sm font-black uppercase text-text-primary tracking-widest font-mono bg-white px-2 py-1 rounded border border-background-muted inline-block">
                                 {ride.vehicle.plate}
                              </p>
                           </div>
                        </div>

                        <div className="space-y-3">
                           <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Amenities</p>
                           <div className="flex flex-wrap gap-4">
                              {ride.amenities.map(amenity => (
                                <div key={amenity} className="flex flex-col items-center gap-1.5 group cursor-help">
                                   <div className="w-10 h-10 rounded-xl bg-background-muted flex items-center justify-center text-primary-light group-hover:bg-primary-light group-hover:text-white transition-all">
                                      <Zap size={18} />
                                   </div>
                                   <span className="text-[10px] font-bold text-text-secondary uppercase">{amenity.split(' ')[0]}</span>
                                </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </Card>
               </div>
            </div>

            {/* Reviews Section */}
            <div className="space-y-6">
               <div className="flex items-end justify-between">
                  <h3 className="text-xl font-black font-heading flex items-center gap-3">
                     <div className="w-1.5 h-8 bg-amber-400 rounded-full" />
                     Rider Feedbacks
                  </h3>
                  <button className="text-sm font-bold text-primary-light hover:underline underline-offset-4">See All Reviews</button>
               </div>
               
               <div className="flex overflow-x-auto pb-4 gap-6 no-scrollbar snap-x">
                  {ride.reviewsList.map((review, i) => (
                    <Card key={i} className="min-w-[320px] max-w-[320px] snap-start border-primary-light/5 hover:border-primary-light/20 transition-all cursor-default">
                       <div className="space-y-4">
                          <div className="flex items-center justify-between">
                             <div className="flex items-center gap-3">
                                <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full grayscale" />
                                <div>
                                   <p className="text-sm font-black">{review.name}</p>
                                   <p className="text-[10px] text-text-secondary font-medium">{review.date}</p>
                                </div>
                             </div>
                             <div className="flex items-center gap-0.5 text-amber-500">
                                <Star size={12} fill="currentColor" />
                                <span className="text-xs font-bold ml-1">{review.rating}.0</span>
                             </div>
                          </div>
                          <p className="text-sm text-text-secondary leading-relaxed italic italic">" {review.comment} "</p>
                       </div>
                    </Card>
                  ))}
               </div>
            </div>
          </div>

          {/* Right Column (Sidebar on Desktop): Plans Section */}
          <div className="lg:col-span-12 xl:col-span-4 space-y-10">
             <div className="sticky top-24 space-y-8">
                <Card className="p-8 space-y-8 border-2 border-primary-light/20 shadow-2xl relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-8 opacity-5 -rotate-12 group-hover:rotate-0 transition-transform duration-700">
                      <Zap size={140} />
                   </div>
                   
                   <div className="space-y-2 relative z-10">
                      <h3 className="text-2xl font-black font-heading">Subscription Plans</h3>
                      <p className="text-sm text-text-secondary font-medium">Choose a plan that fits your schedule.</p>
                   </div>

                   <div className="space-y-4 relative z-10">
                      {ride.plans.map((plan) => (
                        <label 
                          key={plan.name} 
                          className={`relative flex items-center justify-between p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                            selectedPlan === plan.name 
                            ? 'border-primary-light bg-primary-light/5' 
                            : 'border-background-muted hover:border-primary-light/20 bg-white'
                          }`}
                        >
                           {plan.popular && (
                             <div className="absolute -top-3 right-6 bg-gradient-secondary text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                               Best Value
                             </div>
                           )}
                           
                           <div className="flex items-center gap-4">
                              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                                selectedPlan === plan.name ? 'bg-primary-light text-white' : 'bg-background-muted text-text-secondary'
                              }`}>
                                 <plan.icon size={24} />
                              </div>
                              <div>
                                 <p className="font-black text-base">{plan.name}</p>
                                 <p className="text-[10px] text-emerald-600 font-extrabold uppercase tracking-tighter">Save {plan.savings}</p>
                              </div>
                           </div>
                           
                           <div className="text-right">
                              <p className="text-xl font-black italic">৳{plan.price}</p>
                              <p className="text-[10px] text-text-secondary font-medium mt-1">৳{plan.perRide}/ride</p>
                           </div>
                           <input 
                             type="radio" 
                             name="subscription_plan" 
                             className="hidden" 
                             checked={selectedPlan === plan.name}
                             onChange={() => setSelectedPlan(plan.name)}
                           />
                        </label>
                      ))}
                   </div>

                   <div className="pt-6 relative z-10 space-y-6">
                      <div className="p-5 rounded-2xl bg-background shadow-inner border border-background-muted space-y-4">
                         <div className="flex justify-between items-center">
                            <span className="text-xs font-bold text-text-secondary uppercase">Benefit included</span>
                            <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Active</span>
                         </div>
                         <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm text-text-primary font-bold">
                               <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                               Free Cancellations (2/mo)
                            </div>
                            <div className="flex items-center gap-3 text-sm text-text-primary font-bold">
                               <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                               Priority Support
                            </div>
                         </div>
                      </div>

                      <div className="space-y-4 hidden lg:block">
                         <div className="flex justify-between items-end px-2">
                            <div>
                               <p className="text-[10px] font-bold text-text-secondary uppercase">Total Package Price</p>
                               <p className="text-4xl font-black italic text-primary-dark">
                                  ৳{ride.plans.find(p => p.name === selectedPlan).price}
                               </p>
                            </div>
                         </div>
                         <Button 
                           variant="primary" 
                           className="w-full h-16 shadow-2xl bg-gradient-primary hover:shadow-primary/20 transition-all text-lg font-black italic"
                           onClick={() => navigate('/rider/payment')}
                         >
                           Confirm Subscription
                         </Button>
                         <div className="flex gap-4">
                            <Button variant="outline" className="flex-1 h-12 gap-2" icon={MessageCircle}>Message</Button>
                            <Button variant="outline" className="w-12 h-12 p-0" icon={Share2} />
                         </div>
                      </div>
                   </div>
                </Card>
             </div>
          </div>
        </div>
      </div>

      {/* Sticky Action Bar for Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/80 backdrop-blur-xl border-t border-background-muted shadow-[0_-10px_40px_rgba(0,0,0,0.05)] animate-slide-up">
         <div className="flex items-center justify-between gap-6 max-w-2xl mx-auto">
            <div className="flex-1">
               <p className="text-[10px] font-bold text-text-secondary uppercase leading-none mb-1">Total {selectedPlan}</p>
               <p className="text-2xl font-black italic leading-none">৳{ride.plans.find(p => p.name === selectedPlan).price}</p>
            </div>
            <Button 
              variant="primary" 
              className="flex-[2] h-14 shadow-xl bg-gradient-primary font-black italic"
              onClick={() => navigate('/rider/payment')}
            >
              Confirm Subscription
            </Button>
         </div>
      </div>
    </div>
  );
};

export default RideDetails;
