import { motion } from "motion/react";
import { Clock, Shirt, Gift } from "lucide-react";

export default function EventDetails() {
  const timeline = [
    { time: "TBD", event: "Guest Arrival" },
    { time: "TBD", event: "Ceremony Begins" },
    { time: "TBD", event: "Cocktail Hour" },
    { time: "TBD", event: "Dinner & Toasts" },
    { time: "TBD", event: "Dancing" },
    { time: "TBD", event: "Evening Concludes" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4 max-w-4xl mx-auto"
    >
      <div className="text-center mb-16">
        <h1 className="font-serif text-5xl text-maroon-800 mb-4">Event Details</h1>
        <div className="w-16 h-[1px] bg-forest-900 mx-auto" />
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Left Column: Dress Code & Registry */}
        <div className="space-y-12">
          {/* Dress Code */}
          <section className="bg-white p-8 border border-sand rounded-2xl shadow-sm">
            <div className="flex flex-col items-center text-center space-y-4">
              <Shirt className="text-maroon-800" size={32} />
              <h2 className="font-serif text-2xl text-forest-900">Dress Code</h2>
              <p className="text-sm font-medium uppercase tracking-widest text-forest-800">Formal Attire</p>
              <p className="text-forest-800 font-light text-sm leading-relaxed mt-4">
                We politely request formal attire for our wedding. 
                For ladies, this means a floor-length gown, a fancy cocktail dress, or a dressy pantsuit. 
                For gentlemen, a suit and tie or a tuxedo are appropriate. 
              </p>
            </div>
          </section>

          {/* Registry */}
          <section className="bg-white p-8 border border-sand rounded-2xl shadow-sm">
            <div className="flex flex-col items-center text-center space-y-4">
              <Gift className="text-forest-800" size={32} />
              <h2 className="font-serif text-2xl text-forest-900">Registry</h2>
              <p className="text-forest-800 font-light text-sm leading-relaxed mt-4">
                Your presence at our wedding is the greatest gift of all! 
                However, if you would like to honor us with a gift, we are registered at the following places:
              </p>
              <div className="flex gap-4 mt-6">
                <a href="#" className="border border-maroon-800 rounded-full text-maroon-800 px-6 py-2 text-sm uppercase tracking-wider hover:bg-maroon-800 hover:text-cream transition-colors">
                  Crate & Barrel
                </a>
                <a href="#" className="border border-forest-800 rounded-full text-forest-800 px-6 py-2 text-sm uppercase tracking-wider hover:bg-forest-800 hover:text-cream transition-colors">
                  Zola
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Timeline */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Clock className="text-maroon-800" size={28} />
            <h2 className="font-serif text-3xl text-forest-900">Timeline of the Day</h2>
          </div>
          
          <div className="relative border-l border-forest-900/20 ml-4 space-y-8 pb-4">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-8">
                {/* Dot */}
                <div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-maroon-800" />
                <h3 className="font-serif text-xl text-forest-900">{item.event}</h3>
                <p className="text-sm font-medium uppercase tracking-widest text-forest-800 mt-1">{item.time}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
}
