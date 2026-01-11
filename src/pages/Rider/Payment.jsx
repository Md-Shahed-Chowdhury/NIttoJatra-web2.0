import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { 
  CheckCircle, 
  CreditCard, 
  ArrowRight, 
  ShieldCheck, 
  MapPin, 
  Calendar,
  ChevronLeft
} from 'lucide-react';

const Payment = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [method, setMethod] = useState('card');

  const goToDashboard = () => navigate('/rider/my-rides');

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePayment = () => {
    // Simulated payment processing
    setTimeout(() => {
      setStep(3);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-fade-in pb-20">
      {/* Stepper */}
      <div className="flex items-center justify-between relative max-w-2xl mx-auto pt-10">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-background-muted -translate-y-1/2 z-0" />
        <div className="absolute top-1/2 left-0 h-1 bg-primary-light -translate-y-1/2 z-0 transition-all duration-500" style={{ width: `${(step - 1) * 50}%` }} />
        
        {[1, 2, 3].map((s) => (
          <div key={s} className="relative z-10 flex flex-col items-center gap-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
              step >= s ? 'bg-primary-light text-white shadow-lg' : 'bg-white text-text-secondary border-2 border-background-muted'
            }`}>
              {step > s ? <CheckCircle size={20} /> : s}
            </div>
            <span className={`text-[10px] font-black uppercase tracking-widest ${
              step >= s ? 'text-text-primary' : 'text-text-secondary'
            }`}>
              {s === 1 ? 'Review' : s === 2 ? 'Payment' : 'Success'}
            </span>
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-8 animate-fade-in">
           <div className="flex items-center justify-between">
              <h1 className="text-3xl font-black font-heading">Review Subscription</h1>
              <Link to="/rider/ride/1" className="text-sm font-bold text-primary-light hover:underline">Edit Selection</Link>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                 <Card className="p-0 border-2 border-primary-light/10">
                    <div className="p-6 bg-primary-light/5 border-b border-primary-light/10 flex items-center gap-4">
                       <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary-light">
                          <MapPin size={24} />
                       </div>
                       <div>
                          <p className="font-black">Monthly Premium Plan</p>
                          <p className="text-xs text-text-secondary">Uttara to Dhanmondi • 20 Rides</p>
                       </div>
                    </div>
                    <div className="p-8 space-y-6">
                       <div className="flex justify-between items-center text-sm font-medium">
                          <span className="text-text-secondary">Route Schedule</span>
                          <span className="text-text-primary">Mon - Fri, 08:00 AM</span>
                       </div>
                       <div className="flex justify-between items-center text-sm font-medium">
                          <span className="text-text-secondary">Valid From</span>
                          <span className="text-text-primary">Jan 11, 2026 - Feb 11, 2026</span>
                       </div>
                       <div className="pt-4 border-t border-background-muted flex justify-between items-center">
                          <span className="text-text-primary font-bold">Total Amount</span>
                          <span className="text-2xl font-black text-primary-light">৳2,400</span>
                       </div>
                    </div>
                 </Card>
                 
                 <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                       <CheckCircle size={20} />
                    </div>
                    <p className="text-sm font-medium text-emerald-800">
                      You're saving <span className="font-black">৳1,200</span> this month compared to single ride bookings!
                    </p>
                 </div>
              </div>

              <div className="space-y-6">
                 <Card className="bg-text-primary text-white space-y-6">
                    <h3 className="font-bold">Next Steps</h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      Confirming your subscription reserves your seat for the entire month. Your driver will be notified immediately.
                    </p>
                    <Button onClick={() => setStep(2)} className="w-full h-14 bg-white text-text-primary hover:bg-white/90 shadow-xl" icon={ArrowRight}>
                      Go to Payment
                    </Button>
                 </Card>
                 <div className="flex items-center gap-2 justify-center text-text-secondary opacity-60">
                    <ShieldCheck size={16} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Secure Checkout</span>
                 </div>
              </div>
           </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-8 animate-fade-in">
           <div className="flex items-center gap-4">
              <button onClick={() => setStep(1)} className="p-2 rounded-lg hover:bg-background-muted transition-colors">
                 <ChevronLeft size={24} />
              </button>
              <h1 className="text-3xl font-black font-heading">Choose Payment Method</h1>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                 {[
                   { id: 'bkash', name: 'bKash Wallet', img: 'https://seeklogo.com/images/B/bkash-logo-FBB258B90F-seeklogo.com.png' },
                   { id: 'nagad', name: 'Nagad Wallet', img: 'https://seeklogo.com/images/N/nagad-logo-7A70BBDA7D-seeklogo.com.png' },
                   { id: 'card', name: 'Credit / Debit Card', icon: CreditCard }
                 ].map((opt) => (
                   <label key={opt.id} className={`flex items-center justify-between p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                     method === opt.id ? 'border-primary-light bg-primary-light/5' : 'border-background-muted hover:border-primary-light/30'
                   }`} onClick={() => setMethod(opt.id)}>
                      <div className="flex items-center gap-4">
                         <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                           method === opt.id ? 'border-primary-light' : 'border-background-muted'
                         }`}>
                            {method === opt.id && <div className="w-2.5 h-2.5 bg-primary-light rounded-full" />}
                         </div>
                         <div className="flex items-center gap-3">
                            {opt.img ? (
                              <img src={opt.img} alt={opt.name} className="h-6 object-contain" />
                            ) : (
                              <div className="w-8 h-8 rounded-lg bg-background-muted flex items-center justify-center text-text-secondary">
                                <opt.icon size={20} />
                              </div>
                            )}
                            <span className="font-bold text-sm tracking-tight">{opt.name}</span>
                         </div>
                      </div>
                      <input type="radio" className="hidden" name="method" checked={method === opt.id} onChange={() => {}} />
                   </label>
                 ))}
              </div>

              <div className="space-y-8">
                 {method === 'card' ? (
                   <Card className="space-y-6">
                      <div className="space-y-4">
                         <Input label="Cardholder Name" placeholder="Ahmed Rahman" />
                         <Input label="Card Number" placeholder="**** **** **** 1234" icon={CreditCard} />
                         <div className="grid grid-cols-2 gap-4">
                            <Input label="Expiry Date" placeholder="MM/YY" />
                            <Input label="CVV" placeholder="***" type="password" />
                         </div>
                      </div>
                   </Card>
                 ) : (
                   <div className="p-8 rounded-3xl bg-background-alt border-dashed border-2 border-background-muted flex flex-col items-center text-center space-y-6">
                      <img 
                        src={method === 'bkash' ? 'https://seeklogo.com/images/B/bkash-logo-FBB258B90F-seeklogo.com.png' : 'https://seeklogo.com/images/N/nagad-logo-7A70BBDA7D-seeklogo.com.png'} 
                        alt="Wallet" 
                        className="h-12 object-contain grayscale opacity-50"
                      />
                      <p className="text-sm text-text-secondary leading-relaxed">
                        You will be redirected to the {method} payment gateway to securely complete your transaction.
                      </p>
                   </div>
                 )}

                 <Button variant="primary" className="w-full h-14 text-lg shadow-xl" onClick={handlePayment}>
                   Pay ৳2,400 Securely
                 </Button>
                 <p className="text-[10px] text-center text-text-secondary">
                   Payment processed by <span className="font-bold underline">SSLCommerz</span>. Encrypted & Secure.
                 </p>
              </div>
           </div>
        </div>
      )}

      {step === 3 && (
        <div className="flex flex-col items-center justify-center py-20 animate-fade-in space-y-8 text-center">
           <div className="w-32 h-32 rounded-full bg-emerald-500 flex items-center justify-center text-white relative">
              <CheckCircle size={64} />
              <div className="absolute inset-0 rounded-full border-8 border-emerald-500/20 animate-ping" />
           </div>
           <div className="space-y-3">
              <h1 className="text-4xl font-black font-heading">Subscription Activated!</h1>
              <p className="text-text-secondary max-w-sm mx-auto">
                Congrats! Your commute is now secured. You can track your first ride in the dashboard.
              </p>
           </div>
           
           <Card className="w-full max-w-md p-8 border-dashed border-2 border-background-muted space-y-4">
              <div className="flex justify-between items-center text-xs font-bold text-text-secondary uppercase">
                 <span>Transaction ID</span>
                 <span className="text-text-primary">NJ-94021385</span>
              </div>
              <div className="flex justify-between items-center text-xs font-bold text-text-secondary uppercase">
                 <span>Date</span>
                 <span className="text-text-primary">Jan 11, 2026 • 03:45 PM</span>
              </div>
              <div className="pt-4 border-t border-background-muted flex justify-between items-center">
                 <span className="font-black">Total Paid</span>
                 <span className="text-xl font-black text-emerald-600">৳2,400</span>
              </div>
           </Card>

           <div className="flex flex-col gap-4 w-full max-w-sm pt-6">
              <p className="text-text-secondary">Your subscription is active. You can now track your rides and communicate with your driver.</p>
              <Button variant="primary" className="h-14 px-12" onClick={goToDashboard}>
                Go to My Rides
              </Button>
              <Button variant="ghost" className="h-12">Download Receipt (PDF)</Button>
           </div>
           
           <p className="text-xs text-text-secondary italic">Redirecting to Dashboard in 5 seconds...</p>
        </div>
      )}
    </div>
  );
};

export default Payment;
