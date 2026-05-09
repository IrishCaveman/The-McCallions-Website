import { motion } from "motion/react";
import { Coffee, Utensils, Landmark } from "lucide-react";

export default function ThingsToDo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4 max-w-5xl mx-auto"
    >
      <div className="text-center mb-16">
        <h1 className="font-serif text-5xl text-maroon-800 mb-4">Things to Do</h1>
        <p className="text-forest-800 font-light mt-4">Our favorite spots in the Marble City.</p>
        <div className="w-16 h-[1px] bg-forest-900 mx-auto mt-8" />
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Bars & Restaurants */}
        <section className="space-y-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-cream-dark p-4 rounded-xl shadow-sm border border-sand">
              <Utensils className="text-maroon-800" size={32} />
            </div>
            <h2 className="font-serif text-2xl text-forest-900">Eat & Drink</h2>
          </div>
          
          <ul className="space-y-6">
            <li>
              <h3 className="font-medium text-lg text-forest-900">Campagne</h3>
              <p className="text-forest-800 text-sm font-light mt-1">
                A Michelin-starred restaurant offering incredible French-inspired cuisine.
              </p>
            </li>
            <li>
              <h3 className="font-medium text-lg text-forest-900">Kyteler's Inn</h3>
              <p className="text-forest-800 text-sm font-light mt-1">
                One of the oldest inns in Ireland, great for a pint and traditional Irish music.
              </p>
            </li>
            <li>
              <h3 className="font-medium text-lg text-forest-900">Left Bank</h3>
              <p className="text-forest-800 text-sm font-light mt-1">
                A popular spot for cocktails and pub grub in a lively atmosphere.
              </p>
            </li>
          </ul>
        </section>

        {/* Coffee */}
        <section className="space-y-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-cream-dark p-4 rounded-xl shadow-sm border border-sand">
              <Coffee className="text-forest-800" size={32} />
            </div>
            <h2 className="font-serif text-2xl text-forest-900">Coffee Spots</h2>
          </div>

          <ul className="space-y-6">
            <li>
              <h3 className="font-medium text-lg text-forest-900">Cakeface Patisserie</h3>
              <p className="text-forest-800 text-sm font-light mt-1">
                The best coffee and incredible pastries in town. A must-visit!
              </p>
            </li>
            <li>
              <h3 className="font-medium text-lg text-forest-900">Muse Coffee + Food</h3>
              <p className="text-forest-800 text-sm font-light mt-1">
                Great lovely space for a flat white and a healthy brunch option.
              </p>
            </li>
          </ul>
        </section>

        {/* Activities */}
        <section className="space-y-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-cream-dark p-4 rounded-xl shadow-sm border border-sand">
              <Landmark className="text-maroon-800" size={32} />
            </div>
            <h2 className="font-serif text-2xl text-forest-900">Activities</h2>
          </div>

          <ul className="space-y-6">
            <li>
              <h3 className="font-medium text-lg text-forest-900">Kilkenny Castle</h3>
              <p className="text-forest-800 text-sm font-light mt-1">
                Tour the stunning 12th-century castle and walk the beautiful grounds.
              </p>
            </li>
            <li>
              <h3 className="font-medium text-lg text-forest-900">Smithwick's Experience</h3>
              <p className="text-forest-800 text-sm font-light mt-1">
                Learn how Ireland's most popular ale has been brewed since 1710.
              </p>
            </li>
            <li>
              <h3 className="font-medium text-lg text-forest-900">Medieval Mile</h3>
              <p className="text-forest-800 text-sm font-light mt-1">
                Walk the historic discovery trail through the center of Kilkenny.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  );
}
