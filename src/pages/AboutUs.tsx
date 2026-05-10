import { motion } from "motion/react";
import { Heart, Camera, Users } from "lucide-react";

export default function AboutUs() {
  const party = [
    { role: "Maid of Honor", name: "Alyssa Lynch" },
    { role: "Best Man", name: "Patrick Duffy" },
    { role: "Bridesmaid", name: "Marissa Gamberutti" },
    { role: "Groomsman", name: "Jamie McCord" },
    { role: "Bridesmaid", name: "Katie Smith" },
    { role: "Groomsman", name: "Donal O Donovan" },
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
              Our story began in the summer of 2017, serendipitously unfolding on the way to the legendary Tomorrowland festival in Belgium.
            </p>
            <p className="text-forest-800 font-light leading-relaxed">
              Vanessa, a California native, was in the midst of an epic European backpacking adventure. Matthew was only supposed to attend the second weekend of the festival, but as fate would have it, he won tickets to the first weekend too! With a few days to spare between festivals, he headed to Amsterdam with his cousin—and future best man—Patrick. It was there, amidst the vibrant streets of Amsterdam, that he met Vanessa and her friend Marissa.
            </p>
            <p className="text-forest-800 font-light leading-relaxed">
              The connection was instant. They spent unforgettable days exploring Amsterdam together before journeying on to Tomorrowland. Entranced by the music and each other, the rest was truly history!
            </p>
            <p className="text-forest-800 font-light leading-relaxed">
              After six months of transatlantic long-distance, Vanessa took a daring leap of faith and moved to Ireland to be with Matthew. Soon after, their sweeping romance reached new heights when Matthew proposed in a magical treehouse nestled in the wild beauty of Cork! They spent an amazing year in Ireland, saving up for their next grand adventure together: moving to Vancouver, Canada.
            </p>
            <p className="text-forest-800 font-light leading-relaxed">
              Since settling on the West Coast, they’ve been unstoppable—traveling the globe, dancing at music festivals, making incredible friends, and sharing four different apartments. Whether chasing fresh powder on snowboards in the winter or camping out under the stars in the summer, life is always an adventure.
            </p>
            <p className="text-forest-800 font-light leading-relaxed">
              Madly in love and more excited than ever for the future, they can't wait to celebrate their journey with all of you as they tie the knot in Kilkenny!
            </p>
          </div>
          <div className="order-1 md:order-2 aspect-[4/5] rounded-2xl overflow-hidden shadow-sm border border-sand">
            <img 
              src="/Nessmatt3.png" 
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
            <div className="aspect-square rounded-2xl overflow-hidden shadow-sm border border-sand"><iframe src="https://www.youtube.com/embed/Uf-BxHojinc?si=KB90kWaIQOFEh3eZ" className="w-full h-full object-cover border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen title="YouTube video player"></iframe></div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-sm border border-sand"><img src="/Nessmatt.png" className="w-full h-full object-cover" alt="Memory" /></div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-sm border border-sand"><iframe src="https://www.youtube.com/embed/cQv-pavYk1c?si=WHymfYSjwfVqky-3" className="w-full h-full object-cover border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen title="YouTube video player"></iframe></div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-sm border border-sand"><img src="/Nessmatt2.png" className="w-full h-full object-cover" alt="Memory" /></div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
