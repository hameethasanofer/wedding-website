import { useState } from 'react';
import Section from './Section';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const IMAGES = [
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070&auto=format&fit=crop"
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <Section id="gallery" title="Gallery" subtitle="Capturing Moments">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {IMAGES.map((img, index) => (
          <motion.div
            key={index}
            className="aspect-square overflow-hidden cursor-pointer rounded-sm relative group"
            onClick={() => setSelectedImg(img)}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-wedding-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img 
              src={img} 
              alt={`Gallery image ${index + 1}`} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-wedding-gold transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImg} 
              alt="Selected" 
              className="max-w-full max-h-[90vh] object-contain rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
