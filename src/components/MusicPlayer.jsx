import { useState, useRef, useEffect } from 'react';
import { Music, Music3 } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    // Load YouTube API
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: 'bc8Gra5L8Q4', // The requested song
        playerVars: {
          'autoplay': 0,
          'loop': 1,
          'playlist': 'bc8Gra5L8Q4'
        },
        events: {
          'onReady': (event) => {
            event.target.setVolume(30);
          }
        }
      });
    };
  }, []);

  const togglePlay = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div id="youtube-player" className="hidden"></div>
      
      <button 
        onClick={togglePlay}
        className="w-12 h-12 rounded-full bg-wedding-navy text-wedding-gold flex items-center justify-center shadow-lg hover:bg-wedding-gold hover:text-wedding-navy transition-all duration-300 relative border border-wedding-gold/30"
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
