import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Eye, EyeOff } from 'lucide-react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
// import Card from '../../components/ui/Card';

const Login = () => {
  const [role, setRole] = useState('rider');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === 'driver') {
      navigate('/driver');
    } else {
      navigate('/rider');
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col justify-center items-center bg-black relative px-4 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="w-full max-w-md space-y-8 relative z-10">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-black font-heading text-white italic">Welcome Back</h1>
          <p className="text-gray-400">Please enter your details to sign in.</p>
        </div>

        {/* Role Selector */}
        <div className="flex p-1 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
          <button
            onClick={() => setRole('rider')}
            className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all ${
              role === 'rider' 
              ? 'bg-gradient-primary text-white shadow-lg' 
              : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            I'm a Rider
          </button>
          <button
            onClick={() => setRole('driver')}
            className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all ${
              role === 'driver' 
              ? 'bg-gradient-secondary text-white shadow-lg' 
              : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            I'm a Driver
          </button>
        </div>

        <div className="p-8 shadow-2xl border border-white/10 rounded-3xl bg-white/5 backdrop-blur-md">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="space-y-4">
              <Input
                label="Email Address"
                type="email"
                placeholder="name@example.com"
                icon={Mail}
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-primary-light"
                labelClassName="text-gray-300"
              />
              <div className="relative">
                <Input
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  icon={Lock}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-primary-light"
                  labelClassName="text-gray-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-[38px] text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-white/5 text-primary focus:ring-primary-light transition-all" />
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">Remember me</span>
              </label>
              <Link to="/forgot-password" size="sm" className="text-sm font-semibold text-primary-light hover:text-primary transition-colors">
                Forgot password?
              </Link>
            </div>

            <Button type="submit" variant="primary" className="w-full h-12 shadow-lg group hover:opacity-90">
              Sign In
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="relative flex items-center justify-center py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <span className="relative px-4 bg-transparent text-xs text-gray-500 font-bold uppercase tracking-widest backdrop-blur-sm">Or continue with</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-12 border-white/10 hover:bg-white/5 text-white">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
              </Button>
              <Button variant="outline" className="h-12 border-white/10 hover:bg-white/5 text-white">
                <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="w-5 h-5" alt="Facebook" />
              </Button>
            </div>
          </form>
        </div>

        <p className="text-center text-gray-400">
          Don't have an account?{' '}
          <Link to="/signup" className="font-bold text-primary-light hover:text-primary transition-colors underline-offset-4 hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;


