import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full relative"
    >
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Video/Image Overlay */}
        <div className="absolute inset-0 bg-forest-900/40 z-10" />
        
        {/* Background Image Placeholder (use a video or high res image) */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
        />

        {/* Hero Content */}
        <div className="relative z-20 text-center text-cream px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h2 className="text-sm md:text-base uppercase tracking-[0.3em] mb-4">We are getting married</h2>
            <h1 className="font-serif text-6xl md:text-8xl mb-6 tracking-tight">Vanessa & Matthew</h1>
            <p className="text-xl md:text-2xl font-light tracking-wide mb-10">
              July 19th, 2027<br />Kilkenny, Ireland
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#rsvp"
                className="inline-block bg-maroon-800 text-cream px-10 py-4 rounded-full uppercase tracking-widest text-sm hover:scale-105 transition-transform"
                onClick={(e) => {
                  e.preventDefault();
                  alert("RSVP functionality coming soon!");
                }}
              >
                RSVP Now
              </a>
              <Link
                to="/event-details"
                className="inline-block bg-transparent border-2 border-cream rounded-full text-cream px-10 py-4 uppercase tracking-widest text-sm hover:bg-cream/10 hover:scale-105 transition-all"
              >
                Event Details
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-4 md:px-8 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl text-maroon-800 mb-6">Join Us to Celebrate</h2>
          <p className="text-lg leading-relaxed text-forest-800 font-light mb-8">
            We are so incredibly excited to share this special day with our favorite people. 
            Dancing, good food, and unforgettable memories await. 
            We can't wait to see you there!
          </p>
          <div className="w-16 h-[1px] bg-maroon-800 mx-auto" />
        </motion.div>
      </section>
    </motion.div>
  );
}
