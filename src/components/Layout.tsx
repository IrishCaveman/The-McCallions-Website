import { useState, useRef, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Play, Pause, Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

const NAV_LINKS = [
  { name: "Welcome", path: "/" },
  { name: "Where", path: "/where" },
  { name: "Accommodation", path: "/accommodation" },
  { name: "Things to Do", path: "/things-to-do" },
  { name: "Event Details", path: "/event-details" },
  { name: "About Us", path: "/about-us" },
  { name: "FAQ", path: "/faq" },
];

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-cream text-forest-900">
      {/* Background Audio */}
      {/* 
        Using a placeholder serene/ambient piano track. 
        In production, replace this with your chosen wedding music file.
       */}
      <audio
        ref={audioRef}
        src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3"
        loop
      />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-sand transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo / Names */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="font-serif text-2xl text-maroon-800 tracking-wide">
                V & M
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-sm uppercase tracking-widest transition-colors duration-200",
                    location.pathname === link.path
                      ? "text-maroon-800 font-medium"
                      : "text-forest-800 hover:text-maroon-700"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Music Toggle & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleMusic}
                className="music-toggle p-2 rounded-full bg-forest-900/5 text-forest-900 hover:bg-forest-900/10 transition-colors"
                aria-label="Toggle Music"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>

              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 text-forest-900 hover:text-maroon-800 transition-colors"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-cream border-b border-sand absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "block px-3 py-3 text-base uppercase tracking-widest transition-colors",
                    location.pathname === link.path
                      ? "text-maroon-800 font-medium bg-maroon-900/5 rounded-md"
                      : "text-forest-800 hover:text-maroon-700 hover:bg-forest-900/5 rounded-md"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-forest-900 text-cream py-12 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl mb-4 text-white">Vanessa & Matthew</h2>
          <p className="text-sm tracking-widest uppercase mb-8 opacity-80">July 19th, 2027 • Kilkenny, Ireland</p>
            <p className="text-xs opacity-60 font-light">
              Live Today, Love Tomorrow, Unite Forever
            </p>
        </div>
      </footer>
    </div>
  );
}
