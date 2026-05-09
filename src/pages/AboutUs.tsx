import { motion } from "motion/react";
import { Heart, Camera, Users } from "lucide-react";

export default function AboutUs() {
  const party = [
    { role: "Maid of Honor", name: "Jessica Smith" },
    { role: "Best Man", name: "David Johnson" },
    { role: "Bridesmaid", name: "Emily Davis" },
    { role: "Groomsman", name: "Michael Brown" },
    { role: "Bridesmaid", name: "Sarah Wilson" },
    { role: "Groomsman", name: "Christopher Lee" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4 max-w-5xl mx-auto"
    >
      <div className="text-center mb-16">
        <h1 className="font-serif text-5xl text-maroon-800 mb-4">About Us</h1>
        <div className="w-16 h-[1px] bg-forest-900 mx-auto" />
      </div>

      <div className="space-y-24">
        {/* Love Story */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <Heart className="text-maroon-800 flex-shrink-0" size={24} />
              <h2 className="font-serif text-3xl text-forest-900">Our Story</h2>
            </div>
            <p className="text-forest-800 font-light leading-relaxed">
              We met like many modern couples doâon an app! But our first date was anything but ordinary. 
              We spent five hours talking over coffee, which turned into a walk through the park, which turned into dinner. 
              By the end of the night, we both knew this was something special.
            </p>
            <p className="text-forest-800 font-light leading-relaxed">
              Five years, two apartments, and one golden retriever later, Matthew proposed during a weekend trip 
              to the Poconos in the middle of a beautiful snowfall. It was perfect. We have spent our relationship 
              traveling, trying new restaurants, and building a life we love. We are so excited to officially 
              start this next chapter as husband and wife!
            </p>
          </div>
          <div className="order-1 md:order-2 aspect-[4/5] rounded-2xl overflow-hidden shadow-sm border border-sand">
            <img 
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Vanessa and Matthew" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* The Wedding Party */}
        <section>
          <div className="flex flex-col items-center mb-12 text-center">
            <Users className="text-forest-800 mb-4" size={32} />
            <h2 className="font-serif text-3xl text-forest-900 mb-2">The Wedding Party</h2>
            <div className="w-12 h-[1px] bg-maroon-800 mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
            {party.map((person, idx) => (
              <div key={idx} className="bg-white p-6 border border-sand rounded-2xl shadow-sm">
                <p className="text-xs font-medium uppercase tracking-widest text-maroon-800 mb-2">{person.role}</p>
                <h3 className="font-serif text-xl text-forest-900">{person.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Photos grid */}
        <section>
          <div className="flex flex-col items-center mb-12 text-center">
            <Camera className="text-forest-800 mb-4" size={32} />
            <h2 className="font-serif text-3xl text-forest-900 mb-2">Memories</h2>
            <div className="w-12 h-[1px] bg-maroon-800 mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-sm border border-sand"><img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="Memory" /></div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-sm border border-sand"><img src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="Memory" /></div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-sm border border-sand"><img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="Memory" /></div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-sm border border-sand"><img src="https://images.unsplash.com/photo-1518063183569-b5a935be292a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="Memory" /></div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
