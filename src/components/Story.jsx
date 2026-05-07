import Section from './Section';

export default function Story() {
  return (
    <Section id="story" title="Our Story" subtitle="How it all began" dark={true}>
      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        <div className="w-full md:w-1/2">
          <div className="relative">
            {/* Main Image */}
            <div className="relative z-10 aspect-[3/4] overflow-hidden rounded-sm border border-wedding-gold/20 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop" 
                alt="Couple" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000"
              />
            </div>
            {/* Decorative Offset Frame */}
            <div className="absolute -inset-4 border border-wedding-gold/30 z-0 hidden md:block translate-x-2 translate-y-2"></div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h3 className="font-serif text-2xl md:text-4xl text-wedding-gold">
            It was love at first sight... <br/>
            <span className="italic text-wedding-gold-light font-light text-xl md:text-2xl mt-2 block">almost.</span>
          </h3>
          
          <p className="leading-relaxed text-wedding-cream/80 text-lg">
            We met on a rainy Tuesday in a small coffee shop downtown. James bumped into Emma, spilling his cappuccino everywhere. What started as an awkward apology quickly turned into a three-hour conversation about our shared love for vintage vinyls and Italian cuisine.
          </p>
          
          <p className="leading-relaxed text-wedding-cream/80 text-lg">
            Five years, two apartments, and one golden retriever later, James proposed on the same coastline where we took our first vacation together. Now, we're thrilled to celebrate the next chapter of our lives with the people we love most.
          </p>
          
          <div className="pt-6 font-serif text-2xl text-wedding-gold italic">
            — Emma & James
          </div>
        </div>
      </div>
    </Section>
  );
}
