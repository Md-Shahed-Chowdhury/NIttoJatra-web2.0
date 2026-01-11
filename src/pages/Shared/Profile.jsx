import React from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Shield, 
  CreditCard, 
  Bell, 
  LogOut,
  Camera,
  Star,
  Award,
  ChevronRight
} from 'lucide-react';

const Profile = ({ role = 'rider' }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-fade-in pb-20">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="relative group">
           <img 
             src="https://i.pravatar.cc/300?u=me" 
             alt="Profile" 
             className="w-32 h-32 md:w-40 md:h-40 rounded-3xl object-cover ring-4 ring-white shadow-premium"
           />
           <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary-light text-white rounded-xl flex items-center justify-center shadow-lg border-2 border-white opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100">
              <Camera size={20} />
           </button>
        </div>
        <div className="text-center md:text-left space-y-2">
           <h1 className="text-4xl font-black font-heading tracking-tight">Ahmed Rahman</h1>
           <div className="flex items-center justify-center md:justify-start gap-4">
              <span className="text-sm font-bold text-text-secondary flex items-center gap-1.5">
                <MapPin size={16} /> Uttara, Dhaka
              </span>
              <span className="w-1.5 h-1.5 bg-background-muted rounded-full" />
              <span className="text-sm font-black text-primary-light flex items-center gap-1.5">
                <Star size={16} className="fill-current" /> 4.9 Rating
              </span>
           </div>
           <div className="pt-2 flex flex-wrap justify-center md:justify-start gap-2">
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-600 rounded-lg text-[10px] font-black uppercase tracking-widest">Verified ID</span>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-600 rounded-lg text-[10px] font-black uppercase tracking-widest">Early Adopter</span>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="md:col-span-2 space-y-8">
            <Card className="space-y-8 p-8">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-light/10 flex items-center justify-center text-primary-light">
                     <User size={24} />
                  </div>
                  <h2 className="text-xl font-black">Personal Information</h2>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input label="Full Name" defaultValue="Ahmed Rahman" icon={User} />
                  <Input label="Email Address" defaultValue="ahmed@example.com" icon={Mail} />
                  <Input label="Phone Number" defaultValue="+880 1712 345678" icon={Phone} />
                  <Input label="Emergency Contact" defaultValue="+880 1912 876543" icon={Phone} />
               </div>
               
               <Button variant="primary" className="h-12 px-8">Save Changes</Button>
            </Card>

            <Card className="space-y-6 p-8">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                     <Shield size={24} />
                  </div>
                  <h2 className="text-xl font-black">Security & Privacy</h2>
               </div>
               
               <div className="divide-y divide-background-muted">
                  {[
                    { label: 'Two-Factor Authentication', status: 'Enabled', color: 'text-emerald-500' },
                    { label: 'Change Password', status: 'Last changed 3 months ago', color: 'text-text-secondary' },
                    { label: 'Login Activity', status: 'Review recent sessions', color: 'text-primary-light' }
                  ].map((item, i) => (
                    <div key={i} className="py-4 flex items-center justify-between cursor-pointer group">
                       <div>
                          <p className="font-bold text-sm group-hover:text-primary-light transition-colors">{item.label}</p>
                          <p className={`text-[10px] font-medium ${item.color}`}>{item.status}</p>
                       </div>
                       <ChevronRight size={18} className="text-text-secondary opacity-0 group-hover:opacity-100 transition-all" />
                    </div>
                  ))}
               </div>
            </Card>
         </div>

         <div className="space-y-8">
            <Card className="bg-gradient-primary text-white space-y-6">
               <div className="flex items-center gap-3">
                  <Award size={24} />
                  <h3 className="font-bold">Member Level</h3>
               </div>
               <div className="space-y-4">
                  <div className="flex justify-between items-end">
                     <div>
                        <p className="text-4xl font-black font-accent">GOLD</p>
                        <p className="text-[10px] font-bold text-white/70 uppercase">Elite Rider</p>
                     </div>
                     <span className="text-xs font-bold">120 Rides</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                     <div className="h-full bg-white rounded-full w-[70%]" />
                  </div>
                  <p className="text-[10px] text-white/60">30 more rides to reach <span className="text-white font-bold">PLATINUM</span></p>
               </div>
            </Card>

            <div className="space-y-4">
               {[
                 { label: 'Payment Methods', icon: CreditCard },
                 { label: 'Notification Settings', icon: Bell },
                 { label: 'Safety Preferences', icon: Shield },
               ].map((item, i) => (
                 <button key={i} className="w-full p-4 rounded-2xl bg-white border border-background-muted flex items-center justify-between hover:border-primary-light hover:shadow-premium transition-all group">
                    <div className="flex items-center gap-3 text-text-secondary group-hover:text-primary-light">
                       <item.icon size={20} />
                       <span className="text-sm font-bold text-text-primary">{item.label}</span>
                    </div>
                    <ChevronRight size={18} className="text-text-secondary" />
                 </button>
               ))}
               
               <button className="w-full p-4 rounded-2xl bg-red-50 text-red-600 border border-red-100 flex items-center justify-center gap-3 hover:bg-red-500 hover:text-white transition-all font-black uppercase text-xs tracking-widest mt-6">
                  <LogOut size={18} />
                  Logout Account
               </button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Profile;
