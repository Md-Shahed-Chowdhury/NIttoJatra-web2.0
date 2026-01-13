import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, ArrowRight, ShieldCheck, Car } from 'lucide-react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
// import Card from '../../components/ui/Card';

const Signup = () => {
  const [role, setRole] = useState('rider');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate(role === 'rider' ? '/rider' : '/driver');
  };

  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col justify-center items-center bg-black relative px-4 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="w-full max-w-xl space-y-8 relative z-10">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-black font-heading text-white italic">Join NittoJatra</h1>
          <p className="text-gray-400">The smarter way to commute every day.</p>
        </div>

        <form className="space-y-8" onSubmit={handleSignup}>
          {/* Role Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setRole('rider')}
              className={`p-6 rounded-3xl border transition-all text-left group relative overflow-hidden backdrop-blur-sm ${
                role === 'rider' 
                  ? 'border-primary-light bg-primary-light/[0.1] ring-1 ring-primary-light/50' 
                  : 'border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10'
              }`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors ${
                role === 'rider' ? 'bg-gradient-primary text-white' : 'bg-white/10 text-gray-400'
              }`}>
                <User size={24} />
              </div>
              <h3 className="font-bold text-lg mb-1 text-white">I am a Rider</h3>
              <p className="text-sm text-gray-400">I want to find consistent, affordable rides.</p>
              {role === 'rider' && (
                <div className="absolute top-4 right-4 text-primary-light">
                  <ShieldCheck size={24} />
                </div>
              )}
            </button>

            <button
              type="button"
              onClick={() => setRole('driver')}
              className={`p-6 rounded-3xl border transition-all text-left group relative overflow-hidden backdrop-blur-sm ${
                role === 'driver' 
                  ? 'border-secondary bg-secondary/[0.1] ring-1 ring-secondary/50' 
                  : 'border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10'
              }`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors ${
                role === 'driver' ? 'bg-gradient-secondary text-white' : 'bg-white/10 text-gray-400'
              }`}>
                <Car size={24} />
              </div>
              <h3 className="font-bold text-lg mb-1 text-white">I am a Driver</h3>
              <p className="text-sm text-gray-400">I want to share my ride and earn more.</p>
              {role === 'driver' && (
                <div className="absolute top-4 right-4 text-secondary">
                  <ShieldCheck size={24} />
                </div>
              )}
            </button>
          </div>

          <div className="p-8 shadow-2xl border border-white/10 rounded-3xl bg-white/5 backdrop-blur-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Input label="Full Name" placeholder="John Doe" required className="bg-black/20 border-white/10 text-white placeholder:text-gray-500" labelClassName="text-gray-300" />
              <Input label="Email" type="email" placeholder="john@example.com" icon={Mail} required className="bg-black/20 border-white/10 text-white placeholder:text-gray-500" labelClassName="text-gray-300" />
              <Input label="Password" type="password" placeholder="••••••••" icon={Lock} required className="bg-black/20 border-white/10 text-white placeholder:text-gray-500" labelClassName="text-gray-300" />
              <Input label="Confirm Password" type="password" placeholder="••••••••" icon={Lock} required className="bg-black/20 border-white/10 text-white placeholder:text-gray-500" labelClassName="text-gray-300" />
              
              <div className="md:col-span-2 space-y-6 pt-4 border-t border-white/10">
                <Input 
                  label="National ID Number" 
                  placeholder="e.g. 123 456 7890" 
                  icon={ShieldCheck} 
                  required 
                  className="bg-black/20 border-white/10 text-white placeholder:text-gray-500" 
                  labelClassName="text-gray-300" 
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-300 ml-1">NID Front Side</label>
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-primary-light transition-colors">
                        <Car size={20} />
                      </div> {/* Re-using Car or better Icon if available, let's use a generic Frame or Image if imported, but safely let's use simple file input wrapper or standard Input */}
                       <input 
                        type="file" 
                        accept="image/*"
                        className="w-full bg-black/20 border border-white/10 rounded-xl py-3 px-4 pl-4 text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-primary-light file:text-white hover:file:bg-primary transition-all cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-300 ml-1">NID Back Side</label>
                     <div className="relative group">
                       <input 
                        type="file" 
                        accept="image/*"
                         className="w-full bg-black/20 border border-white/10 rounded-xl py-3 px-4 pl-4 text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-primary-light file:text-white hover:file:bg-primary transition-all cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <input type="checkbox" id="terms" required className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-primary focus:ring-primary-light" />
                <label htmlFor="terms" className="text-sm text-gray-400">
                  I agree to the <Link to="/terms" className="text-primary-light font-bold hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-primary-light font-bold hover:underline">Privacy Policy</Link>.
                </label>
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                className={`w-full h-12 shadow-lg group hover:opacity-90 ${role === 'driver' ? 'bg-gradient-secondary' : 'bg-gradient-primary'}`}
              >
                Create Account
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </form>

        <p className="text-center text-gray-400">
          Already have an account?{' '}
          <Link to="/login" className="font-bold text-primary-light hover:text-primary transition-colors underline-offset-4 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
