import { motion } from "motion/react";
import { Building2, Home } from "lucide-react";

export default function Accommodation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4 max-w-4xl mx-auto"
    >
      <div className="text-center mb-16">
        <h1 className="font-serif text-5xl text-maroon-800 mb-4">Accommodation</h1>
        <div className="w-16 h-[1px] bg-forest-900 mx-auto" />
      </div>

      <div className="space-y-16">
        {/* Main Hotel Block */}
        <section>
          <div className="flex items-center gap-3 mb-6 border-b border-sand pb-4">
            <Building2 className="text-maroon-800" size={28} />
            <h2 className="font-serif text-3xl text-forest-900">Hotel Block Info</h2>
          </div>
          <div className="bg-cream-dark p-8 rounded-2xl shadow-sm border border-sand">
            <h3 className="font-serif text-2xl text-maroon-800 mb-2">Langtons Hotel</h3>
            <p className="text-sm font-medium uppercase tracking-widest text-forest-800 mb-6">Primary Wedding Hotel</p>
            <p className="text-forest-900 font-light leading-relaxed mb-6">
              We have reserved a block of rooms for out-of-town guests at a discounted rate. 
              Please use the link below or mention the "Vanessa & Matthew Wedding" when calling 
              to book. The cutoff date to book with our rate is June 1st, 2027.
            </p>
            <a 
              href="#" 
              onClick={(e) => e.preventDefault()}
              className="inline-block border border-maroon-800 rounded-full text-maroon-800 px-6 py-3 text-sm uppercase tracking-widest hover:bg-maroon-800 hover:text-cream transition-colors"
            >
              Book with our rate
            </a>
          </div>
        </section>

        {/* Sister Hotels */}
        <section>
          <div className="flex items-center gap-3 mb-6 border-b border-sand pb-4">
            <Building2 className="text-forest-800" size={28} />
            <h2 className="font-serif text-3xl text-forest-900">Sister Hotels</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif text-xl text-forest-900 mb-2">Kilford Arms Hotel</h3>
              <p className="text-forest-800 font-light text-sm mb-4">
                A comfortable and welcoming hotel just a 3-minute walk from Langtons. Features a traditional Irish bar and excellent hospitality in the city center.
              </p>
              <a href="https://www.kilfordarms.ie/" target="_blank" rel="noopener noreferrer" className="text-maroon-800 hover:text-maroon-700 text-sm underline underline-offset-4">Visit Website</a>
            </div>
            <div>
              <h3 className="font-serif text-xl text-forest-900 mb-2">Kilkenny River Court Hotel</h3>
              <p className="text-forest-800 font-light text-sm mb-4">
                Situated right beside the river and directly opposite the castle. A picturesque stay just a short 5-minute walk from Langtons.
              </p>
              <a href="https://www.rivercourthotel.com/" target="_blank" rel="noopener noreferrer" className="text-maroon-800 hover:text-maroon-700 text-sm underline underline-offset-4">Visit Website</a>
            </div>
          </div>
        </section>

        {/* Airbnb */}
        <section>
          <div className="flex items-center gap-3 mb-6 border-b border-sand pb-4">
            <Home className="text-forest-800" size={28} />
            <h2 className="font-serif text-3xl text-forest-900">Airbnb Options</h2>
          </div>
          <div className="prose prose-forest text-forest-800 font-light max-w-none">
            <p>
              For guests who prefer a home rental, Kilkenny has many great Airbnb options. 
              We recommend the following areas for their proximity and charm:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li><strong>City Center:</strong> Perfect for those who want to be right in the action near pubs and shops.</li>
              <li><strong>Medieval Mile:</strong> Historic and charming, along the main stretch of the city.</li>
              <li><strong>St. Canice's Area:</strong> A slightly quieter area, rich in history and a short walk to the center.</li>
            </ul>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
