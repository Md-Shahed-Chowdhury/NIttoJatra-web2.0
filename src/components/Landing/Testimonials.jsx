import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Daily Commuter",
    content: "NittoJatra changed my chaotic mornings into peaceful rides. The subscription is a no-brainer!",
    avatar: "S"
  },
  {
    name: "Rahim Chowdhury",
    role: "Driver Partner",
    content: "Consistent rides mean consistent income. I love knowing my schedule in advance.",
    avatar: "R"
  },
  {
    name: "Nusrat Jahan",
    role: "University Student",
    content: "Safe, affordable, and punctual. The women-only option gives me peace of mind.",
    avatar: "N"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="section-container relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white tracking-tight">
            Loved by <span className="text-primary-light">Commuters</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
                <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-primary-light/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                    <div className="flex gap-1 mb-6">
                        {[1,2,3,4,5].map(star => (
                            <Star key={star} className="w-4 h-4 text-yellow-500 fill-current" />
                        ))}
                    </div>
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed italic">"{t.content}"</p>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-light to-secondary-light flex items-center justify-center font-bold text-black text-xl shadow-lg">
                            {t.avatar}
                        </div>
                        <div>
                            <div className="font-bold text-white">{t.name}</div>
                            <div className="text-sm text-gray-500">{t.role}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
