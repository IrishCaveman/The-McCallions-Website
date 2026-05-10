import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function Welcome() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full relative"
      ref={containerRef}
    >
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-white/50 z-10" />
        
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"
          style={{ y: yBg }}
        />

        {/* Hero Content */}
        <motion.div 
          className="relative z-20 text-center text-maroon-800 px-4 max-w-4xl mx-auto flex flex-col items-center"
          style={{ opacity }}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h2 variants={itemVariants} className="text-sm md:text-base uppercase tracking-[0.3em] mb-4">We are getting married</motion.h2>
          <motion.h1 variants={itemVariants} className="font-serif text-6xl md:text-8xl mb-6 tracking-tight">Vanessa & Matthew</motion.h1>
          <motion.p variants={itemVariants} className="text-xl md:text-2xl font-light tracking-wide mb-10 text-maroon-900 drop-shadow-sm">
            July 19th, 2027<br />Kilkenny, Ireland
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf5P0p1_QGOMMEhedE4U86yMWuC9YtMtBqp-5vroKl25dxgeg/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-maroon-800 text-white px-10 py-4 rounded-full uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-md"
            >
              RSVP Now
            </a>
            <Link
              to="/event-details"
              className="inline-block bg-white/70 backdrop-blur-sm border-2 border-maroon-800 rounded-full text-maroon-800 px-10 py-4 uppercase tracking-widest text-sm hover:bg-white hover:scale-105 transition-all shadow-sm"
            >
              Event Details
            </Link>
          </motion.div>
        </motion.div>

        {/* Bouncing Scroll Indicator */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 2, duration: 1 }}
           className="absolute bottom-10 z-20"
           style={{ opacity }}
        >
          <motion.div
             animate={{ y: [0, 10, 0] }}
             transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="text-maroon-800 w-8 h-8 opacity-70" />
          </motion.div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-32 px-4 md:px-8 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-maroon-800 mb-8">Join Us to Celebrate</h2>
          <p className="text-lg md:text-xl leading-relaxed text-forest-800 font-light mb-10">
            We are so incredibly excited to share this special day with our favorite people. 
            Dancing, good food, and unforgettable memories await. 
            We can't wait to see you there!
          </p>
          <motion.div 
            className="w-24 h-[1px] bg-maroon-800/40 mx-auto" 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>
      </section>
    </motion.div>
  );
}
