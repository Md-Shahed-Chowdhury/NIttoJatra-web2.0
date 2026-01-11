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
    <section className="py-24 bg-background-alt overflow-hidden">
      <div className="section-container">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-text-primary">
            Loved by Commuters
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                    <div className="flex gap-1 mb-4">
                        {[1,2,3,4,5].map(star => (
                            <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                    </div>
                    <p className="text-text-secondary text-lg mb-6 leading-relaxed">"{t.content}"</p>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary-light/10 flex items-center justify-center font-bold text-primary-light text-xl">
                            {t.avatar}
                        </div>
                        <div>
                            <div className="font-bold text-text-primary">{t.name}</div>
                            <div className="text-sm text-text-secondary">{t.role}</div>
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
