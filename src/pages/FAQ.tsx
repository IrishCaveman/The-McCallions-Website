import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

const FAQS = [
  {
    question: "When is the RSVP deadline?",
    answer: "Please RSVP by June 1st, 2027, so we can have an accurate headcount."
  },
  {
    question: "Can I bring a date?",
    answer: "Our wedding is strictly RSVP only. We will only be able to accommodate those listed on your invitation."
  },
  {
    question: "Are kids welcome?",
    answer: "As much as we love your little ones, we have decided to keep our wedding and reception an adults-only event. We hope you understand and enjoy a night off!"
  },
  {
    question: "Is there parking at the venue?",
    answer: "Yes, complimentary parking is provided at the main entrance of the venue."
  },
  {
    question: "Will the ceremony and reception be indoors or outdoors?",
    answer: "The event will take place indoors. On day two in Bridies Bar there will be a garden where you can spend time outside in the sun."
  },
  {
    question: "What should I do if I have dietary restrictions?",
    answer: "Please note your dietary restrictions when you RSVP so we can accommodate your needs. The hotel will be providing other meal options such as vegetarian and gluten-free options on the day based on the food that is in season and of the highest quality."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4 max-w-3xl mx-auto min-h-[70vh]"
    >
      <div className="text-center mb-16">
        <h1 className="font-serif text-5xl text-maroon-800 mb-4">Frequently Asked Questions</h1>
        <div className="w-16 h-[1px] bg-forest-900 mx-auto" />
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className="border border-sand bg-white rounded-2xl shadow-sm mb-4 overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="font-serif text-xl text-forest-900">{faq.question}</span>
                <ChevronDown 
                  className={cn(
                    "text-maroon-800 transition-transform duration-300",
                    isOpen ? "rotate-180" : ""
                  )} 
                  size={20} 
                />
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5">
                      <p className="text-forest-800 font-light pt-2 border-t border-forest-900/5">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
