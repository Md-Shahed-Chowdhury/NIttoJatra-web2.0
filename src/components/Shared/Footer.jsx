import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Car } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-text-primary text-background-muted py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="space-y-6">
             <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-white">
                <Car size={20} />
              </div>
              <span className="text-xl font-black font-accent text-white">
                NittoJatra
              </span>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed">
              Redefining daily commutes through community-driven subscription rides. Cost-effective, safe, and reliable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-light transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-light transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-light transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 font-heading uppercase text-xs tracking-widest">Platform</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li><Link to="/find-rides" className="hover:text-primary-light transition-colors">Find a Ride</Link></li>
              <li><Link to="/become-driver" className="hover:text-primary-light transition-colors">Become a Driver</Link></li>
              <li><Link to="/pricing" className="hover:text-primary-light transition-colors">Subscription Plans</Link></li>
              <li><Link to="/safety" className="hover:text-primary-light transition-colors">Safety Center</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-6 font-heading uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li><Link to="/about" className="hover:text-primary-light transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-primary-light transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-primary-light transition-colors">Commuter Blog</Link></li>
              <li><Link to="/contact" className="hover:text-primary-light transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6 font-heading uppercase text-xs tracking-widest">Stay Updated</h4>
            <p className="text-xs text-text-secondary mb-4">Subscribe for the latest route updates and offers.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-light w-full"
              />
              <button className="p-3 rounded-xl bg-gradient-primary text-white hover:opacity-90 active:scale-95 transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-secondary">
          <p>© 2026 NittoJatra. All rights reserved.</p>
          <div className="flex gap-8">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
