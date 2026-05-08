import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function InvitationCover({ onOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    if (onOpen) onOpen(); // Open the website content immediately
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex overflow-hidden pointer-events-auto"
          exit={{ pointerEvents: 'none' }}
        >
          {/* Left Panel */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            exit={{ 
              x: '-100%', 
              rotateY: -20,
              transition: { duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: 0.2 } 
            }}
            className="relative w-1/2 h-full bg-wedding-navy border-r-[0.5px] border-wedding-gold/30 shadow-[10px_0_30px_rgba(0,0,0,0.5)] z-20 origin-left"
          >
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] pointer-events-none"></div>
            
            {/* Shimmer Effect */}
            <motion.div 
              animate={{ opacity: [0.1, 0.3, 0.1], x: ['-100%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-wedding-gold/10 to-transparent w-full skew-x-[-20deg]"
            ></motion.div>

            {/* Decorative Borders */}
            <div className="absolute inset-8 border-[1px] border-wedding-gold/20 pointer-events-none"></div>
          </motion.div>

          {/* Right Panel */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            exit={{ 
              x: '100%', 
              rotateY: 20,
              transition: { duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: 0.2 } 
            }}
            className="relative w-1/2 h-full bg-wedding-navy border-l-[0.5px] border-wedding-gold/30 shadow-[-10px_0_30px_rgba(0,0,0,0.5)] z-20 origin-right"
          >
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] pointer-events-none"></div>

            {/* Shimmer Effect */}
            <motion.div 
              animate={{ opacity: [0.1, 0.3, 0.1], x: ['-200%', '100%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-wedding-gold/10 to-transparent w-full skew-x-[-20deg]"
            ></motion.div>

            {/* Decorative Borders */}
            <div className="absolute inset-8 border-[1px] border-wedding-gold/20 pointer-events-none"></div>
          </motion.div>

          {/* Central Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ 
                opacity: 0, 
                scale: 1.2, 
                filter: 'blur(10px)',
                transition: { duration: 0.8 } 
              }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center"
            >
              <div className="mb-12 text-center">
                <motion.h2 
                  initial={{ letterSpacing: "0.2em" }}
                  animate={{ letterSpacing: "0.5em" }}
                  className="text-wedding-gold font-serif text-3xl md:text-6xl mb-6 drop-shadow-lg"
                >
                  Emma & James
                </motion.h2>
                <div className="h-[1px] w-48 bg-gradient-to-r from-transparent via-wedding-gold/60 to-transparent mx-auto"></div>
                <p className="text-wedding-gold-light/80 font-sans uppercase tracking-[0.6em] text-xs md:text-sm mt-6">
                  September 24, 2026
                </p>
              </div>

              <motion.button
                onClick={handleOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="pointer-events-auto relative group"
              >
                {/* Wax Seal Image */}
                <div className="w-40 h-40 md:w-56 md:h-56 rounded-full relative">
                  <motion.img 
                    animate={{ rotate: [0, 2, 0, -2, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    src="/wax-seal.png" 
                    alt="Wax Seal" 
                    className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
                  />
                  
                  {/* Outer Rings */}
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -inset-4 border border-wedding-gold/30 rounded-full"
                  ></motion.div>
                </div>
                
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-60 group-hover:opacity-100 transition-opacity">
                  <span className="text-wedding-gold font-sans uppercase tracking-[0.4em] text-[10px] whitespace-nowrap">
                    Click to Open
                  </span>
                  <motion.div 
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-[1px] h-8 bg-wedding-gold/40"
                  ></motion.div>
                </div>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
