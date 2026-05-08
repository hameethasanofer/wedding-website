import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative h-[110vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax effect */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-110"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-[#1a0320]"
          style={{ backgroundImage: "url('https://crystallinestudio.com/blogmoreimg/13_crystalline.jpg')" }}
        ></div>
        {/* Theme Tint Overlay */}
        <div className="absolute inset-0 bg-[#35063e]/40"></div>
        {/* Gradient for extra depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
      </motion.div>

      {/* Content: Invitation Card */}
      <motion.div 
        style={{ opacity }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        className="relative z-10 text-center px-8 py-12 md:px-16 md:py-20 bg-wedding-purple/85 backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-wedding-gold/40 flex flex-col items-center max-w-xl w-[90%] md:w-full mx-auto"
      >
        {/* Decorative inner border */}
        <div className="absolute inset-4 border border-wedding-gold/20 pointer-events-none"></div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-wedding-gold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-8 font-light"
        >
          உங்களை அன்புடன் அழைக்கிறோம்
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl text-wedding-gold font-serif mb-8 drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)]"
        >
          கோபி & துஷ்யந்தி
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-col items-center space-y-2 text-wedding-gold-light/90 text-base md:text-lg font-serif italic"
        >
          <span>செப்டம்பர் 24, 2026</span>
          <span className="w-12 h-[1px] bg-wedding-gold/50 my-2"></span>
          <span>ஜா-எல, இலங்கை</span>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-20 z-10"
      >
        <Link to="story" smooth={true} duration={800} className="cursor-pointer flex flex-col items-center text-white opacity-80 hover:opacity-100 transition-opacity drop-shadow-md">
          <span className="text-xs tracking-widest uppercase mb-2">கீழே செல்லவும்</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
