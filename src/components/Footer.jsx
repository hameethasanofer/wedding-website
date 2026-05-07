export default function Footer() {
  return (
    <footer className="bg-wedding-cream text-wedding-text py-16 text-center px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-wedding-dark mb-6">Emma & James</h2>
        <p className="italic text-lg text-wedding-text/70 mb-8 font-serif">We look forward to celebrating with you.</p>
        
        <div className="flex justify-center items-center space-x-6 mb-12">
          <div className="w-12 h-[1px] bg-wedding-gold/50"></div>
          <span className="uppercase tracking-widest text-xs text-wedding-gold">September 24, 2026</span>
          <div className="w-12 h-[1px] bg-wedding-gold/50"></div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm font-light text-wedding-text/60">
          <p>Questions? Contact us at</p>
          <a href="mailto:hello@emmaandjames.com" className="text-wedding-dark hover:text-wedding-gold transition-colors underline decoration-wedding-gold/30 underline-offset-4">hello@emmaandjames.com</a>
        </div>
        
        <p className="mt-16 text-xs text-wedding-text/40 tracking-wider">
          &copy; {new Date().getFullYear()} Emma & James. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
