import { useState } from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    attending: 'yes',
    dietary: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  return (
    <Section id="rsvp" title="RSVP" subtitle="Join Us" dark={true}>
      <div className="max-w-2xl mx-auto bg-wedding-cream text-wedding-text p-8 md:p-12 shadow-xl border border-wedding-gold/20">
        
        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <h3 className="font-serif text-3xl text-wedding-dark mb-4">Thank You!</h3>
            <p className="text-lg font-light text-wedding-text/80">
              We have received your response. We can't wait to celebrate with you!
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center mb-8">
              <p className="italic text-wedding-text/70 mb-2">Kindly respond by</p>
              <p className="font-serif text-xl text-wedding-dark">August 1st, 2026</p>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm uppercase tracking-widest text-wedding-text/70 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-wedding-gold/50 py-2 focus:outline-none focus:border-wedding-gold transition-colors"
                  placeholder="Mr. & Mrs. Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm uppercase tracking-widest text-wedding-text/70 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-wedding-gold/50 py-2 focus:outline-none focus:border-wedding-gold transition-colors"
                  placeholder="hello@example.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="guests" className="block text-sm uppercase tracking-widest text-wedding-text/70 mb-2">Number of Guests</label>
                  <select 
                    id="guests" 
                    name="guests" 
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-wedding-gold/50 py-2 focus:outline-none focus:border-wedding-gold transition-colors"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm uppercase tracking-widest text-wedding-text/70 mb-2">Will you attend?</label>
                  <div className="flex space-x-6 py-2">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="attending" 
                        value="yes"
                        checked={formData.attending === 'yes'}
                        onChange={handleChange}
                        className="accent-wedding-gold"
                      />
                      <span>Joyfully Accept</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="attending" 
                        value="no"
                        checked={formData.attending === 'no'}
                        onChange={handleChange}
                        className="accent-wedding-gold"
                      />
                      <span>Regretfully Decline</span>
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="dietary" className="block text-sm uppercase tracking-widest text-wedding-text/70 mb-2">Dietary Requirements (Optional)</label>
                <input 
                  type="text" 
                  id="dietary" 
                  name="dietary" 
                  value={formData.dietary}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-wedding-gold/50 py-2 focus:outline-none focus:border-wedding-gold transition-colors"
                  placeholder="e.g. Vegetarian, Gluten-free"
                />
              </div>
            </div>

            <div className="pt-8 text-center">
              <button 
                type="submit" 
                className="px-12 py-4 bg-wedding-dark text-wedding-cream tracking-widest uppercase text-sm hover:bg-wedding-gold transition-colors duration-300 w-full md:w-auto"
              >
                Send RSVP
              </button>
            </div>
          </form>
        )}
      </div>
    </Section>
  );
}
