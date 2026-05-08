import Section from './Section';

export default function Story() {
  return (
    <Section id="story" title="எங்கள் கதை" subtitle="இது எப்படி தொடங்கியது" dark={true}>
      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        <div className="w-full md:w-1/2">
          <div className="relative">
            {/* Main Image */}
            <div className="relative z-10 aspect-[3/4] overflow-hidden rounded-sm border border-wedding-gold/20 shadow-2xl">
              <img 
                src="https://i0.wp.com/msjevent.com/wp-content/uploads/2023/05/istockphoto-1186214696-170667a.jpg?fit=509%2C339&ssl=1" 
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
            இது முதல் பார்வையில் காதல்... <br/>
            <span className="italic text-wedding-gold-light font-light text-xl md:text-2xl mt-2 block">கிட்டத்தட்ட.</span>
          </h3>
          
          <p className="leading-relaxed text-wedding-cream/80 text-lg">
            நாங்கள் ஒரு மழை பெய்யும் செவ்வாய்க்கிழமை அன்று நகரத்திலுள்ள ஒரு சிறிய காபி கடையில் சந்தித்தோம். கோபி துஷ்யந்தி மீது மோதியதில் காபி சிந்தியது. ஒரு சங்கடமான மன்னிப்பில் தொடங்கிய அது, எங்கள் பொதுவான பயணங்கள் மற்றும் இசை மீதான காதலைப் பற்றிய மூன்று மணி நேர உரையாடலாக மாறியது.
          </p>
          
          <p className="leading-relaxed text-wedding-cream/80 text-lg">
            ஐந்து ஆண்டுகள், இரண்டு குடியிருப்புகள் மற்றும் ஒரு கோல்டன் ரெட்ரீவர் நாய்க்குட்டிக்குப் பிறகு, எங்கள் முதல் விடுமுறைக்குச் சென்ற அதே கடற்கரையில் கோபி திருமண முன்மொழிவு செய்தார். இப்போது, எங்களுக்குப் பிடித்தவர்களுடன் எங்கள் வாழ்க்கையின் அடுத்த அத்தியாயத்தைக் கொண்டாடுவதில் நாங்கள் மகிழ்ச்சியடைகிறோம்.
          </p>
          
          <div className="pt-6 font-serif text-2xl text-wedding-gold italic">
            — கோபி & துஷ்யந்தி
          </div>
        </div>
      </div>
    </Section>
  );
}
