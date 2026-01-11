import { useNavigate } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { 
  MapPin, 
  Clock, 
  Calendar, 
  Car, 
  Users, 
  Plus, 
  Trash2, 
  ChevronRight,
  ShieldCheck,
  Zap,
  Info
} from 'lucide-react';
import { useState } from 'react';

const PostRide = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    stops: ['Airport', 'Banani'],
    newStop: '' // Assuming newStop should also be part of formData or remain separate
  });
  const [newStop, setNewStop] = useState(''); // Keeping newStop separate as it was before

  const addStop = () => {
    if (newStop.trim()) {
      setFormData(prev => ({
        ...prev,
        stops: [...prev.stops, newStop.trim()]
      }));
      setNewStop('');
    }
  };

  const removeStop = (index) => {
    setFormData(prev => ({
      ...prev,
      stops: prev.stops.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-fade-in pb-20">
      <div className="space-y-2">
        <h1 className="text-3xl font-black font-heading tracking-tight">Post a New Route</h1>
        <p className="text-text-secondary">Create a recurring ride subscription for your daily commute.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Step 1: Route Details */}
          <Card className="space-y-8 p-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <MapPin size={24} />
              </div>
              <h2 className="text-xl font-black">Route Information</h2>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Starting Point" placeholder="e.g. Uttara Sector 7" icon={MapPin} />
                <Input label="Destination" placeholder="e.g. Dhanmondi 27" icon={MapPin} />
              </div>

              <div className="space-y-4">
                <p className="text-sm font-bold text-text-secondary uppercase tracking-widest ml-1">Intermediate Stops (Optional)</p>
                <div className="flex flex-wrap gap-2">
                  {formData.stops.map((stop, i) => (
                    <div key={i} className="flex items-center gap-2 px-3 py-2 bg-background-muted rounded-xl text-sm font-bold group">
                      {stop}
                      <button onClick={() => removeStop(i)} className="text-text-secondary hover:text-red-500 transition-colors">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                   <Input 
                     placeholder="Add a stop..." 
                     className="flex-1" 
                     value={newStop}
                     onChange={(e) => setNewStop(e.target.value)}
                   />
                   <Button variant="outline" className="h-[52px] px-4" onClick={addStop}>
                     <Plus size={20} />
                   </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Step 2: Schedule & Capacity */}
          <Card className="space-y-8 p-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Calendar size={24} />
              </div>
              <h2 className="text-xl font-black">Schedule & Capacity</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="space-y-4">
                  <p className="text-sm font-bold text-text-secondary uppercase tracking-widest ml-1">Days of Week</p>
                  <div className="flex flex-wrap gap-2">
                     {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                       <button key={day} className={`px-4 py-2 rounded-xl border-2 font-bold text-xs transition-all ${
                         ['Mon', 'Tue', 'Wed', 'Thu', 'Sun'].includes(day) 
                           ? 'bg-secondary/10 border-secondary text-secondary' 
                           : 'border-background-muted text-text-secondary hover:border-background-muted/50'
                       }`}>
                         {day}
                       </button>
                     ))}
                  </div>
               </div>
               
               <div className="space-y-4">
                  <Input label="Departure Time" type="time" defaultValue="08:00" icon={Clock} />
               </div>

               <div className="space-y-4">
                  <p className="text-sm font-bold text-text-secondary uppercase tracking-widest ml-1">Vehicle</p>
                  <div className="p-4 rounded-xl border-2 border-background-muted flex items-center gap-4 cursor-pointer hover:border-secondary transition-all group">
                     <div className="w-10 h-10 rounded-lg bg-background-muted flex items-center justify-center text-text-secondary group-hover:text-secondary">
                        <Car size={24} />
                     </div>
                     <div className="flex-1">
                        <p className="font-bold text-sm">Toyota Corolla</p>
                        <p className="text-[10px] text-text-secondary uppercase">Silver • DHA-MET-GA-12</p>
                     </div>
                  </div>
               </div>

               <div className="space-y-4">
                  <p className="text-sm font-bold text-text-secondary uppercase tracking-widest ml-1">Available Seats</p>
                  <div className="flex items-center gap-4">
                     {[1, 2, 3, 4].map(num => (
                       <button key={num} className={`w-12 h-12 rounded-xl border-2 font-black flex items-center justify-center transition-all ${
                         num === 3 ? 'bg-secondary text-white border-secondary shadow-lg' : 'border-background-muted text-text-secondary'
                       }`}>
                         {num}
                       </button>
                     ))}
                  </div>
               </div>
            </div>
          </Card>

          {/* Step 3: Pricing */}
          <Card className="space-y-8 p-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <Zap size={24} />
              </div>
              <h2 className="text-xl font-black">Pricing & Subscriptions</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="space-y-4">
                  <Input label="Price per Single Ride (BDT)" placeholder="150" type="number" />
                  <p className="text-[10px] text-text-secondary italic">Minimum suggested price for this distance: ৳120</p>
               </div>
               
               <Card className="bg-background-alt border-0 space-y-4">
                  <p className="text-xs font-black uppercase text-text-secondary">AI Suggested Monthly Plan</p>
                  <div className="flex items-end gap-2">
                     <span className="text-3xl font-black">৳2,400</span>
                     <span className="text-xs font-bold text-emerald-600 mb-1">+ ৳12,000 Potential /mo</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-text-secondary">
                     <Info size={12} />
                     Calculated based on 20 rides with 20% discount.
                  </div>
               </Card>
            </div>
          </Card>
        </div>

        {/* Sidebar: Preferences & Summary */}
        <div className="space-y-8">
           <Card className="space-y-6">
              <h3 className="font-black text-lg">Preferences</h3>
              <div className="space-y-4">
                 {[
                   { label: 'Women-Only Route', desc: 'Only female riders can book.' },
                   { label: 'Flexible Pickup', desc: '+/- 15 mins flexibility.' },
                   { label: 'Allow Middle Seat', desc: 'Maximize your earnings.' }
                 ].map((pref, i) => (
                   <div key={i} className="flex items-start gap-3">
                      <div className="w-10 h-5 bg-background-muted rounded-full relative cursor-pointer flex-shrink-0 mt-1">
                         <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5 shadow-sm" />
                      </div>
                      <div>
                         <p className="text-sm font-bold leading-none">{pref.label}</p>
                         <p className="text-[10px] text-text-secondary mt-1">{pref.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </Card>

            <Card className="bg-text-primary text-white space-y-6">
               <h3 className="font-bold">Summary</h3>
               <div className="space-y-3">
                  <div className="flex justify-between text-xs">
                     <span className="text-white/60">Estimated Earnings</span>
                     <span className="font-bold">৳12,000 /mo</span>
                  </div>
                  <div className="flex justify-between text-xs">
                     <span className="text-white/60">Subscription Efficiency</span>
                     <span className="font-bold text-emerald-400">High</span>
                  </div>
               </div>
               <div className="pt-4 space-y-4">
                  <div className="flex gap-4">
                    <Button variant="outline" className="flex-1 h-14" onClick={() => navigate('/driver')}>Cancel</Button>
                    <Button 
                      variant="primary" 
                      className="flex-[2] h-14 bg-gradient-secondary border-0 shadow-lg shadow-secondary/20"
                      onClick={() => navigate('/driver/routes')}
                    >
                      Post Route
                    </Button>
                  </div>
                  <Button variant="ghost" className="w-full text-white/50 hover:text-white hover:bg-white/5">Save as Draft</Button>
               </div>
            </Card>

           <div className="p-6 rounded-3xl bg-amber-500/5 border border-amber-500/10 flex items-start gap-4">
              <ShieldCheck className="text-amber-600 flex-shrink-0" size={20} />
              <p className="text-[10px] leading-relaxed text-amber-700 font-medium">
                All routes are reviewed by our safety team. Ensure your license and vehicle documents are up to date in your <span className="underline cursor-pointer">profile</span>.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PostRide;
