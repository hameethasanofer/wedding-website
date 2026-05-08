import Section from './Section';
import CountdownTimer from './CountdownTimer';
import { MapPin, Clock } from 'lucide-react';

export default function EventDetails() {
  const weddingDate = "2026-09-24T15:00:00"; // Target date

  return (
    <Section id="details" title="எப்போது & எங்கே" subtitle="கொண்டாட்டம்" dark={true}>
      <div className="flex justify-center mb-16">
        
        {/* Ceremony */}
        <div className="flex flex-col items-center text-center p-8 border border-wedding-gold/20 bg-black/10 backdrop-blur-sm relative max-w-lg w-full">
          <div className="absolute -top-4 bg-wedding-purple px-4 font-serif text-xl italic text-wedding-gold-light">
            திருமணம்
          </div>
          <h3 className="text-3xl font-serif text-white mt-4 mb-2">ஹோட்டல் ட்ரீம் பாரடைஸ்</h3>
          <p className="text-wedding-cream/80 mb-6 font-light">ஜா-எல, இலங்கை</p>
          
          <div className="space-y-4 w-full mb-8">
            <div className="flex items-center justify-center gap-3 text-wedding-cream/90">
              <Clock size={18} className="text-wedding-gold" />
              <span>பிற்பகல் 3:00 மணி</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-wedding-cream/90">
              <MapPin size={18} className="text-wedding-gold" />
              <span>ஹோட்டல் ட்ரீம் பாரடைஸ், ஜா-எல<br/>இலங்கை</span>
            </div>
          </div>
          
          <div className="w-full h-64 border border-wedding-gold/20 overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2588147775556!2d79.8872089!3d7.0673024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2ee812e95697d%3A0x6b4458f2d5964860!2sHotel%20Dream%20Paradise!5e0!3m2!1sen!2slk!4v1715112000000!5m2!1sen!2slk" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>

      {/* Countdown */}
      <div className="pt-8 border-t border-wedding-gold/20">
        <h4 className="text-center font-serif text-2xl text-white mb-4">காத்திருக்கிறோம்</h4>
        <CountdownTimer targetDate={weddingDate} />
      </div>
    </Section>
  );
}
