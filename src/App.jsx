import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import EventDetails from './components/EventDetails';
import Gallery from './components/Gallery';
import Timeline from './components/Timeline';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import InvitationCover from './components/InvitationCover';

function App() {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    // Prevent scrolling when invitation is closed
    if (!isOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpened]);

  return (
    <div className="bg-wedding-cream min-h-screen text-wedding-text selection:bg-wedding-gold/30 selection:text-wedding-dark">
      <InvitationCover onOpen={() => setIsOpened(true)} />
      
      {isOpened && (
        <>
          <Navbar />
          <Hero />
          <Story />
          <EventDetails />
          <Timeline />
          <Gallery />
          <RSVP />
          <Footer />
          <MusicPlayer />
        </>
      )}
    </div>
  );
}

export default App;
