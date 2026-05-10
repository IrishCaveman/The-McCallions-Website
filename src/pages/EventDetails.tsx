import { motion, useScroll, useTransform } from "motion/react";
import { Clock, Shirt, Gift, Beer, MapPin } from "lucide-react";
import { useRef } from "react";

export default function EventDetails() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
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
      className="py-20 px-4 max-w-4xl mx-auto space-y-20"
    >
      <div className="text-center mb-16">
        <h1 className="font-serif text-5xl text-maroon-800 mb-4">Event Details</h1>
        <div className="w-16 h-[1px] bg-forest-900 mx-auto" />
      </div>

      {/* Day One Section */}
      <section>
        <div className="text-center md:text-left mb-12">
          <h2 className="font-serif text-4xl text-forest-900 mb-2">The Wedding Day</h2>
          <p className="text-sm font-medium uppercase tracking-widest text-forest-800 flex items-center justify-center md:justify-start gap-2">
            <MapPin size={16} /> Langtons Hotel, Kilkenny
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column: Dress Code & Registry */}
          <div className="space-y-12">
            {/* Dress Code */}
            <section className="bg-white p-8 border border-sand rounded-2xl shadow-sm">
              <div className="flex flex-col items-center text-center space-y-4">
                <Shirt className="text-maroon-800" size={32} />
                <h3 className="font-serif text-2xl text-forest-900">Dress Code</h3>
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
                <h3 className="font-serif text-2xl text-forest-900">Registry</h3>
                <p className="text-forest-800 font-light text-sm leading-relaxed mt-4">
                  Your presence at our wedding is the greatest gift of all! However, if you would like to honor us with a gift, please give us cash on the day in a card, as we won't have enough suitcase space to bring gifts back to Canada. We will be using this to fund our honeymoon.
                </p>
              </div>
            </section>
          </div>

          {/* Right Column: Timeline */}
          <section ref={timelineRef}>
            <div className="flex items-center gap-3 mb-8">
              <Clock className="text-maroon-800" size={28} />
              <h3 className="font-serif text-3xl text-forest-900">Timeline of the Day</h3>
            </div>
            
            <div className="relative ml-4 space-y-8 pb-4">
              {/* Background Line */}
              <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-forest-900/20" />
              
              {/* Animated Progress Line */}
              <motion.div 
                className="absolute top-0 left-0 w-[2px] bg-maroon-800 origin-top" 
                style={{ height: pathHeight }}
              />

              {timeline.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="relative pl-8"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Dot */}
                  <div className="absolute -left-[4px] top-1.5 w-[9px] h-[9px] rounded-full bg-cream border-2 border-maroon-800 z-10" />
                  <h4 className="font-serif text-xl text-forest-900">{item.event}</h4>
                  <p className="text-sm font-medium uppercase tracking-widest text-forest-800 mt-1">{item.time}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <div className="w-full h-[1px] bg-sand" />

      {/* Day Two Section */}
      <section>
        <div className="text-center md:text-left mb-12">
          <h2 className="font-serif text-4xl text-forest-900 mb-2">Day Two</h2>
          <p className="text-sm font-medium uppercase tracking-widest text-forest-800 flex items-center justify-center md:justify-start gap-2">
            <Beer size={16} /> Bridies Bar & Garden, Langtons Hotel
          </p>
        </div>

        <div className="bg-cream-dark p-8 border border-sand rounded-2xl shadow-sm">
          <div className="max-w-3xl">
            <h3 className="font-serif text-2xl text-maroon-800 mb-4">The After Party</h3>
            <p className="text-forest-900 font-light leading-relaxed mb-4">
              The celebrations don't stop after the wedding! For Day Two, we have booked out the entirety of Bridies Bar and its attached garden area, located right next to Langtons Hotel.
            </p>
            <p className="text-forest-900 font-light leading-relaxed">
              We look forward to spending a relaxed day with our close friends and family, sharing stories from the night before, and enjoying some drinks in a beautiful outdoor setting.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
