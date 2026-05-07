import Section from './Section';
import { motion } from 'framer-motion';

const SCHEDULE = [
  { time: "3:00 PM", title: "Ceremony", desc: "Villa del Balbianello gardens. Please arrive by 2:30 PM." },
  { time: "4:30 PM", title: "Aperitivo", desc: "Cocktails and canapés overlooking the lake." },
  { time: "6:00 PM", title: "Dinner", desc: "A four-course Italian feast at Grand Hotel Tremezzo." },
  { time: "8:30 PM", title: "Cutting the Cake", desc: "Sweet treats and toasts to the newlyweds." },
  { time: "9:00 PM", title: "Party", desc: "Bring your dancing shoes!" },
  { time: "12:00 AM", title: "Farewell", desc: "Sparkler send-off as the night concludes." }
];

export default function Timeline() {
  return (
    <Section id="timeline" title="Timeline" subtitle="The Big Day">
      <div className="max-w-3xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-wedding-gold/30 -translate-x-1/2"></div>
        
        <div className="space-y-12 relative z-10">
          {SCHEDULE.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'}`}>
                  <div className="font-serif text-2xl text-wedding-dark mb-1">{item.title}</div>
                  <div className="text-wedding-gold tracking-widest uppercase text-sm mb-3">{item.time}</div>
                  <p className="text-wedding-text/80 leading-relaxed font-light">{item.desc}</p>
                </div>
                
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-wedding-cream border-2 border-wedding-gold rounded-full -translate-x-1/2 mt-1 md:mt-0"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
