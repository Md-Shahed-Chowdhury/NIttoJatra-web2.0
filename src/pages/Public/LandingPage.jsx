import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Landing/Hero';
import Features from '../../components/Landing/Features';
import HowItWorks from '../../components/Landing/HowItWorks';
import Footer from '../../components/Shared/Footer';
import Navbar from '../../components/Shared/Navbar';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <div id="how-it-works">
          <HowItWorks />
        </div>
        
        {/* Comparison Section (Simplified) */}
        <section id="pricing" className="py-24 bg-background-alt overflow-hidden">
          <div className="section-container">
            <div className="bg-gradient-primary rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-5xl font-bold font-heading">Ready to save 40% on your daily commute?</h2>
                  <p className="text-lg text-white/80 leading-relaxed">
                    NittoJatra's subscription model is designed to be more affordable than traditional ride-sharing apps while providing more stability and comfort.
                  </p>
                  <div className="flex gap-4">
                    <Link to="/rider/find">
                      <button className="bg-white text-primary font-bold py-4 px-8 rounded-2xl hover:bg-white/90 transition-all active:scale-95 shadow-xl text-primary-dark">
                        Check Pricing
                      </button>
                    </Link>
                    <Link to="/rider/find">
                      <button className="bg-transparent border-2 border-white/30 text-white font-bold py-4 px-8 rounded-2xl hover:bg-white/10 transition-all active:scale-95">
                        How it Saves
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                   <div className="space-y-4">
                      <div className="flex justify-between items-center pb-4 border-b border-white/10">
                        <span className="font-medium">Traditional Ride (Avg)</span>
                        <span className="font-bold">450 BDT</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-white/10">
                        <span className="font-medium">NittoJatra (Subscription)</span>
                        <span className="font-bold text-success">280 BDT</span>
                      </div>
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-2xl font-bold">Monthly Savings</span>
                        <span className="text-3xl font-extrabold text-success">3,400+ BDT</span>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
