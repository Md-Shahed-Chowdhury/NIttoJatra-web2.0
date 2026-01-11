import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Car } from 'lucide-react';
import Button from '../ui/Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Find Rides', path: '/rider/find' },
    { name: 'Safety', path: '/rider/safety' },
    { name: 'Commute Plans', path: '/#pricing' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-premium py-4' : 'bg-transparent py-6'
    }`}>
      <div className="section-container !py-0 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform">
            <Car size={24} />
          </div>
          <span className="text-2xl font-black font-accent bg-gradient-primary bg-clip-text text-transparent">
            NittoJatra
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`font-medium transition-colors hover:text-primary-light ${
                isScrolled ? 'text-text-primary' : 'text-text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/rider">
            <Button variant="ghost" className="px-4">Log In</Button>
          </Link>
          <Link to="/rider">
            <Button variant="primary" className="h-11">Sign Up</Button>
          </Link>
          <Link to="/driver">
            <Button variant="outline" className="h-11 border-secondary text-secondary hover:bg-secondary/5">Driver</Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-text-primary p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl animate-fade-in border-t border-background-muted">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-lg font-medium py-2 border-b border-background-muted last:border-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <Link to="/rider" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">Log In</Button>
              </Link>
              <Link to="/rider" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="primary" className="w-full">Sign Up</Button>
              </Link>
              <Link to="/driver" className="w-full col-span-2" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full border-secondary text-secondary">Driver Console</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
