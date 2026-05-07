import { useEffect, useState } from 'react';

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      return timeLeft;
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center items-center gap-4 md:gap-8 mt-12">
      {Object.entries(timeLeft).map(([interval, value]) => (
        <div key={interval} className="flex flex-col items-center">
          <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-wedding-gold/40 flex items-center justify-center bg-white/50 backdrop-blur-sm shadow-sm mb-3">
            <span className="font-serif text-2xl md:text-4xl text-wedding-dark">
              {value < 10 ? `0${value}` : value}
            </span>
          </div>
          <span className="text-xs uppercase tracking-widest text-wedding-text/70">
            {interval}
          </span>
        </div>
      ))}
    </div>
  );
}
