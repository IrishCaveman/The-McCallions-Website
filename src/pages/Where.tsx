import { motion } from "motion/react";
import { MapPin, Train, Car } from "lucide-react";

export default function Where() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4 max-w-5xl mx-auto"
    >
      <div className="text-center mb-16">
        <h1 className="font-serif text-5xl text-maroon-800 mb-4">Where & When</h1>
        <div className="w-16 h-[1px] bg-forest-900 mx-auto" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Venue Image */}
        <div className="aspect-square bg-cream-dark overflow-hidden relative group rounded-2xl shadow-sm border border-sand">
          {/* Note: I couldn't automatically save your uploaded photo into the code. 
              Please upload your photo to the file explorer on the left, name it 'venue.jpg', and place it in the public folder. 
              Then, change the 'src' below to '/venue.jpg' */}
          <img 
            src="https://images.unsplash.com/photo-1507676184212-d0330a15233c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Langtons Hotel Set Theatre" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Venue Details */}
        <div className="space-y-12">
          <div>
            <h2 className="font-serif text-3xl text-forest-900 mb-2">Langtons Hotel</h2>
            <p className="text-lg text-forest-800 font-light mb-6 flex items-start gap-2">
              <MapPin className="mt-1 flex-shrink-0 text-maroon-800" size={20} />
              <span>
                Langtons Hotel<br />
                Kilkenny, Ireland
              </span>
            </p>
            <p className="text-forest-800 font-light leading-relaxed">
              Ceremony time is TBD.<br />
              Cocktail hour and reception to follow.
            </p>
          </div>

          <div className="space-y-8">
            <h3 className="font-serif text-2xl text-maroon-800 border-b border-sand pb-2">Getting There</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-cream-dark p-3 rounded-xl shadow-sm border border-sand h-fit">
                  <Car className="text-forest-900" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-forest-900 mb-2">By Car</h4>
                  <p className="text-forest-800 font-light text-sm leading-relaxed">
                    Parking is available at the castle and nearby city parking lots. Please let the attendant know you are 
                    with the Vanessa & Matthew wedding.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-cream-dark p-3 rounded-xl shadow-sm border border-sand h-fit">
                  <Train className="text-maroon-800" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-forest-900 mb-2">By Train</h4>
                  <p className="text-forest-800 font-light text-sm leading-relaxed">
                    For those arriving via Irish Rail to Kilkenny MacDonagh Station, the venue is a short 10-minute 
                    taxi ride or 15-minute walk through the beautiful town center.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
