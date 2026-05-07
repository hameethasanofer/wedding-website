import Section from './Section';
import CountdownTimer from './CountdownTimer';
import { MapPin, Clock } from 'lucide-react';

export default function EventDetails() {
  const weddingDate = "2026-09-24T15:00:00"; // Target date

  return (
    <Section id="details" title="When & Where" subtitle="The Celebration" dark={true}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-16">
        
        {/* Ceremony */}
        <div className="flex flex-col items-center text-center p-8 border border-wedding-gold/20 bg-black/10 backdrop-blur-sm relative">
          <div className="absolute -top-4 bg-wedding-dark px-4 font-serif text-xl italic text-wedding-gold-light">
            The Ceremony
          </div>
          <h3 className="text-3xl font-serif text-white mt-4 mb-2">Villa del Balbianello</h3>
          <p className="text-wedding-cream/80 mb-6 font-light">Lake Como, Italy</p>
          
          <div className="space-y-4 w-full">
            <div className="flex items-center justify-center gap-3 text-wedding-cream/90">
              <Clock size={18} className="text-wedding-gold" />
              <span>3:00 PM</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-wedding-cream/90">
              <MapPin size={18} className="text-wedding-gold" />
              <span>Via Guido Monzino, 1<br/>22016 Tremezzina CO, Italy</span>
            </div>
          </div>
          
          <a 
            href="#" 
            className="mt-8 inline-block px-8 py-3 border border-wedding-gold/50 text-wedding-gold uppercase tracking-widest text-sm hover:bg-wedding-gold hover:text-white transition-colors duration-300"
          >
            View Map
          </a>
        </div>

        {/* Reception */}
        <div className="flex flex-col items-center text-center p-8 border border-wedding-gold/20 bg-black/10 backdrop-blur-sm relative">
          <div className="absolute -top-4 bg-wedding-dark px-4 font-serif text-xl italic text-wedding-gold-light">
            The Reception
          </div>
          <h3 className="text-3xl font-serif text-white mt-4 mb-2">Grand Hotel Tremezzo</h3>
          <p className="text-wedding-cream/80 mb-6 font-light">Lake Como, Italy</p>
          
          <div className="space-y-4 w-full">
            <div className="flex items-center justify-center gap-3 text-wedding-cream/90">
              <Clock size={18} className="text-wedding-gold" />
              <span>6:00 PM - Midnight</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-wedding-cream/90">
              <MapPin size={18} className="text-wedding-gold" />
              <span>Via Regina, 8<br/>22016 Tremezzina CO, Italy</span>
            </div>
          </div>
          
          <a 
            href="#" 
            className="mt-8 inline-block px-8 py-3 border border-wedding-gold/50 text-wedding-gold uppercase tracking-widest text-sm hover:bg-wedding-gold hover:text-white transition-colors duration-300"
          >
            View Map
          </a>
        </div>

      </div>

      {/* Countdown */}
      <div className="pt-8 border-t border-wedding-gold/20">
        <h4 className="text-center font-serif text-2xl text-white mb-4">Counting Down</h4>
        <CountdownTimer targetDate={weddingDate} />
      </div>
    </Section>
  );
}
