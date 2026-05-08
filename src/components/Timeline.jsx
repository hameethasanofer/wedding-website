import Section from './Section';
import { motion } from 'framer-motion';

const SCHEDULE = [
  { time: "பிற்பகல் 3:00 மணி", title: "திருமணம்", desc: "ஹோட்டல் ட்ரீம் பாரடைஸ் தோட்டம். தயவுசெய்து பிற்பகல் 2:30 மணிக்குள் வந்து சேரவும்." },
  { time: "பிற்பகல் 4:30 மணி", title: "சிற்றுண்டி", desc: "சிறப்பு சிற்றுண்டிகள் மற்றும் பானங்கள்." },
  { time: "பிற்பகல் 6:00 மணி", title: "இரவு விருந்து", desc: "ருசியான விருந்து உணவு." },
  { time: "இரவு 8:30 மணி", title: "கேக் வெட்டுதல்", desc: "புதுமணத் தம்பதிகளுக்கு வாழ்த்துகள் மற்றும் இனிப்புகள்." },
  { time: "இரவு 9:00 மணி", title: "கொண்டாட்டம்", desc: "நடனமாடி மகிழுங்கள்!" },
  { time: "இரவு 12:00 மணி", title: "நன்றி உரை", desc: "இனிய நினைவுகளுடன் விடைபெறுதல்." }
];

export default function Timeline() {
  return (
    <Section id="timeline" title="காலவரிசை" subtitle="திருமண நாள்">
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
