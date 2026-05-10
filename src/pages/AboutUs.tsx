import { motion, AnimatePresence } from "motion/react";
import { Heart, Camera, Users, X } from "lucide-react";
import { useState } from "react";

export default function AboutUs() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const party = [
    { role: "Maid of Honor", name: "Alyssa Lynch" },
    { role: "Best Man", name: "Patrick Duffy" },
    { role: "Bridesmaid", name: "Marissa Gamberutti" },
    { role: "Groomsman", name: "Jamie McCord" },
    { role: "Bridesmaid", name: "Katie Smith" },
    { role: "Groomsman", name: "Donal O Donovan" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4 max-w-5xl mx-auto overflow-hidden"
    >
      <div className="text-center mb-16">
        <h1 className="font-serif text-5xl text-maroon-800 mb-4">About Us</h1>
        <div className="w-16 h-[1px] bg-forest-900 mx-auto" />
      </div>

      <div className="space-y-32">
        {/* Love Story */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1 space-y-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-2">
              <Heart className="text-maroon-800 flex-shrink-0" size={24} />
              <h2 className="font-serif text-3xl text-forest-900">Our Story</h2>
            </motion.div>
            <motion.p variants={itemVariants} className="text-forest-800 font-light leading-relaxed">
              Our story began in the summer of 2017, serendipitously unfolding on the way to the legendary Tomorrowland festival in Belgium.
            </motion.p>
            <motion.p variants={itemVariants} className="text-forest-800 font-light leading-relaxed">
              Vanessa, a California native, was in the midst of an epic European backpacking adventure. Matthew was only supposed to attend the second weekend of the festival, but as fate would have it, he won tickets to the first weekend too! With a few days to spare between festivals, he headed to Amsterdam with his cousin—and future best man—Patrick. It was there, amidst the vibrant streets of Amsterdam, that he met Vanessa and her friend Marissa.
            </motion.p>
            <motion.p variants={itemVariants} className="text-forest-800 font-light leading-relaxed">
              The connection was instant. They spent unforgettable days exploring Amsterdam together before journeying on to Tomorrowland. Entranced by the music and each other, the rest was truly history!
            </motion.p>
            <motion.p variants={itemVariants} className="text-forest-800 font-light leading-relaxed">
              After six months of transatlantic long-distance, Vanessa took a daring leap of faith and moved to Ireland to be with Matthew. Soon after, their sweeping romance reached new heights when Matthew proposed in a magical treehouse nestled in the wild beauty of Cork! They spent an amazing year in Ireland, saving up for their next grand adventure together: moving to Vancouver, Canada.
            </motion.p>
            <motion.p variants={itemVariants} className="text-forest-800 font-light leading-relaxed">
              Since settling on the West Coast, they’ve been unstoppable—traveling the globe, dancing at music festivals, making incredible friends, and sharing four different apartments. Whether chasing fresh powder on snowboards in the winter or camping out under the stars in the summer, life is always an adventure.
            </motion.p>
            <motion.p variants={itemVariants} className="text-forest-800 font-light leading-relaxed">
              Madly in love and more excited than ever for the future, they can't wait to celebrate their journey with all of you as they tie the knot in Kilkenny!
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-sand"
            initial={{ opacity: 0, x: 50, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src="/Nessmatt3.png" 
              alt="Vanessa and Matthew" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </section>

        {/* The Wedding Party */}
        <section>
          <motion.div 
            className="flex flex-col items-center mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Users className="text-forest-800 mb-4" size={32} />
            <h2 className="font-serif text-3xl text-forest-900 mb-2">The Wedding Party</h2>
            <div className="w-12 h-[1px] bg-maroon-800 mx-auto" />
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center max-w-3xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {party.map((person, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
                className="bg-white p-6 border border-sand rounded-2xl shadow-sm transition-shadow duration-300"
              >
                <p className="text-xs font-medium uppercase tracking-widest text-maroon-800 mb-2">{person.role}</p>
                <h3 className="font-serif text-xl text-forest-900">{person.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Photos grid */}
        <section>
          <motion.div 
             className="flex flex-col items-center mb-12 text-center"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <Camera className="text-forest-800 mb-4" size={32} />
            <h2 className="font-serif text-3xl text-forest-900 mb-2">Memories</h2>
            <div className="w-12 h-[1px] bg-maroon-800 mx-auto" />
          </motion.div>

          <motion.div 
             className="grid grid-cols-2 md:grid-cols-4 gap-4"
             variants={containerVariants}
             initial="hidden"
             whileInView="show"
             viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { type: "iframe", src: "https://www.youtube.com/embed/Uf-BxHojinc?si=KB90kWaIQOFEh3eZ" },
              { type: "img", src: "/Nessmatt.png" },
              { type: "iframe", src: "https://www.youtube.com/embed/cQv-pavYk1c?si=WHymfYSjwfVqky-3" },
              { type: "img", src: "/Nessmatt2.png" }
            ].map((media, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="aspect-square rounded-2xl overflow-hidden shadow-sm border border-sand bg-sand/20"
              >
                {media.type === "iframe" ? (
                  <iframe src={media.src} className="w-full h-full object-cover border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen title="YouTube video player"></iframe>
                ) : (
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    src={media.src} 
                    className="w-full h-full object-cover cursor-pointer" 
                    alt="Memory" 
                    onClick={() => setSelectedImage(media.src)}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-white hover:text-sand transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={32} />
              </button>
              <img
                src={selectedImage}
                alt="Selected Memory"
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
