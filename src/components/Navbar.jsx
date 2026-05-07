import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Home', to: 'home' },
  { name: 'Our Story', to: 'story' },
  { name: 'Details', to: 'details' },
  { name: 'Timeline', to: 'timeline' },
  { name: 'Gallery', to: 'gallery' },
  { name: 'RSVP', to: 'rsvp' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'glassmorphism py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={800}
          className={`font-serif text-2xl cursor-pointer tracking-wider ${
            isScrolled ? 'text-wedding-dark' : 'text-white text-shadow-sm'
          }`}
        >
          E & J
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={800}
              spy={true}
              activeClass="text-wedding-gold border-b-2 border-wedding-gold"
              className={`text-sm tracking-widest uppercase cursor-pointer hover:text-wedding-gold transition-colors ${
                isScrolled ? 'text-wedding-text' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-wedding-dark' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-wedding-dark' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-wedding-cream shadow-md md:hidden"
          >
            <div className="flex flex-col items-center py-6 space-y-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={800}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-wedding-text font-serif text-lg tracking-wider cursor-pointer hover:text-wedding-gold"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
