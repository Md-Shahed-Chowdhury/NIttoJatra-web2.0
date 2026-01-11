import React from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "How does the subscription work?",
    answer: "Pay a monthly fee to unlock discounted ride rates. Choose a plan that fits your commute frequency."
  },
  {
    question: "Is it safe?",
    answer: "Yes! All drivers are verified, and we offer real-time ride tracking and emergency support."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely. There are no long-term contracts. You can cancel your subscription before the next billing cycle."
  },
  {
    question: "How do I find a ride?",
    answer: "Simply enter your pickup and drop-off locations, and we'll match you with a driver going your way."
  },
  {
      question: "Are there gender-specific rides?",
      answer: "Yes, we offer a 'Women-Only' ride option for enhanced comfort and safety."
  }
];

const Faq = () => {
  return (
    <section className="bg-black py-24 text-white w-full" id="faq">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about commuting smarter.
          </p>
        </div>

        <div className="grid gap-6 max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              <div className="p-6 md:p-8 cursor-pointer flex justify-between items-center relative z-10">
                 <h3 className="text-xl font-semibold text-white group-hover:text-primary-light transition-colors">
                    {item.question}
                 </h3>
                 <div className="text-gray-400 group-hover:text-white transition-colors">
                     <Plus className="w-6 h-6 group-hover:hidden" />
                     <Minus className="w-6 h-6 hidden group-hover:block" />
                 </div>
              </div>
              
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                  <div className="overflow-hidden">
                      <div className="p-6 md:p-8 pt-0 text-gray-400 leading-relaxed text-lg">
                          {item.answer}
                      </div>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
