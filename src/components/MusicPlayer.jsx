import { useState, useRef, useEffect } from 'react';
import { Music, Music3 } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Attempt to auto-play or prepare audio
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set background music volume lower
    }
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio 
        ref={audioRef} 
        loop 
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Placeholder royalty-free music
      />
      
      <button 
        onClick={togglePlay}
        className="w-12 h-12 rounded-full bg-wedding-dark text-wedding-cream flex items-center justify-center shadow-lg hover:bg-wedding-gold transition-colors duration-300 relative"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <div className="relative flex items-center justify-center">
            <Music3 size={20} className="animate-pulse" />
            <span className="absolute -inset-1 rounded-full border border-wedding-gold animate-ping opacity-75"></span>
          </div>
        ) : (
          <Music size={20} />
        )}
      </button>
    </div>
  );
}
