import { motion } from 'framer-motion';

export default function Section({ id, title, subtitle, children, className = '', dark = false }) {
  return (
    <section 
      id={id} 
      className={`py-24 md:py-32 px-6 ${dark ? 'bg-wedding-purple text-wedding-cream' : 'bg-wedding-cream'} ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-24"
          >
            {subtitle && (
              <p className={`uppercase tracking-[0.2em] text-sm mb-4 ${dark ? 'text-wedding-gold-light' : 'text-wedding-gold'}`}>
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className={`text-4xl md:text-5xl font-serif ${dark ? 'text-wedding-cream' : 'text-wedding-dark'}`}>
                {title}
              </h2>
            )}
            <div className="mt-6 flex justify-center">
              <div className={`w-16 h-[1px] ${dark ? 'bg-wedding-gold-light/50' : 'bg-wedding-gold/50'}`}></div>
            </div>
          </motion.div>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
