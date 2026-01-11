import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, ArrowRight, ShieldCheck, Car } from 'lucide-react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Card from '../../components/ui/Card';

const Signup = () => {
  const [role, setRole] = useState('rider');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate(role === 'rider' ? '/rider' : '/driver');
  };

  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col justify-center items-center bg-background px-4">
      <div className="w-full max-w-xl space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-black font-heading text-text-primary italic">Join NittoJatra</h1>
          <p className="text-text-secondary">The smarter way to commute every day.</p>
        </div>

        <form className="space-y-8" onSubmit={handleSignup}>
          {/* Role Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setRole('rider')}
              className={`p-6 rounded-3xl border-2 transition-all text-left group relative overflow-hidden ${
                role === 'rider' 
                  ? 'border-primary-light bg-primary-light/[0.03] ring-4 ring-primary-light/10' 
                  : 'border-background-muted hover:border-primary-light/30 bg-white'
              }`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors ${
                role === 'rider' ? 'bg-primary-light text-white' : 'bg-background-muted text-text-secondary'
              }`}>
                <User size={24} />
              </div>
              <h3 className="font-bold text-lg mb-1">I am a Rider</h3>
              <p className="text-sm text-text-secondary">I want to find consistent, affordable rides.</p>
              {role === 'rider' && (
                <div className="absolute top-4 right-4 text-primary-light">
                  <ShieldCheck size={24} />
                </div>
              )}
            </button>

            <button
              type="button"
              onClick={() => setRole('driver')}
              className={`p-6 rounded-3xl border-2 transition-all text-left group relative overflow-hidden ${
                role === 'driver' 
                  ? 'border-secondary bg-secondary/[0.03] ring-4 ring-secondary/10' 
                  : 'border-background-muted hover:border-secondary/30 bg-white'
              }`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors ${
                role === 'driver' ? 'bg-secondary text-white' : 'bg-background-muted text-text-secondary'
              }`}>
                <Car size={24} />
              </div>
              <h3 className="font-bold text-lg mb-1">I am a Driver</h3>
              <p className="text-sm text-text-secondary">I want to share my ride and earn more.</p>
              {role === 'driver' && (
                <div className="absolute top-4 right-4 text-secondary">
                  <ShieldCheck size={24} />
                </div>
              )}
            </button>
          </div>

          <Card className="p-8 shadow-2xl border-primary-light/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Input label="Full Name" placeholder="John Doe" required />
              <Input label="Email" type="email" placeholder="john@example.com" icon={Mail} required />
              <Input label="Password" type="password" placeholder="••••••••" icon={Lock} required />
              <Input label="Confirm Password" type="password" placeholder="••••••••" icon={Lock} required />
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <input type="checkbox" id="terms" required className="mt-1 w-4 h-4 rounded border-background-muted text-primary focus:ring-primary-light" />
                <label htmlFor="terms" className="text-sm text-text-secondary">
                  I agree to the <Link to="/terms" className="text-primary-light font-bold hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-primary-light font-bold hover:underline">Privacy Policy</Link>.
                </label>
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                className={`w-full h-12 shadow-lg group ${role === 'driver' ? 'bg-gradient-secondary' : 'bg-gradient-primary'}`}
              >
                Create Account
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        </form>

        <p className="text-center text-text-secondary">
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
