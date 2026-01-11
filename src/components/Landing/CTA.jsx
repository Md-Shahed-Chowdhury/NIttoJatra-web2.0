import React from 'react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
    return (
        <section className="py-32 relative overflow-hidden bg-black">
            <div className="absolute inset-0 bg-gradient-brand opacity-20 transform -skew-y-2 scale-110 z-0 mix-blend-screen"></div>
            
            <div className="section-container relative z-10">
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-[3rem] p-12 md:p-24 text-center border border-white/10 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading">
                        Ready to Upgrade Your Commute?
                    </h2>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
                        Join thousands of smart commuters saving time and money with NittoJatra.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/rider/find">
                             <Button className="bg-white text-primary font-bold text-lg h-14 px-10 rounded-full hover:bg-white/90 shadow-xl transition-all hover:scale-105 active:scale-95">
                                Get Started Now
                             </Button>
                        </Link>
                        <Link to="/contact">
                             <Button variant="outline" className="border-white/30 text-white font-semibold text-lg h-14 px-10 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all">
                                Contact Sales
                             </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
