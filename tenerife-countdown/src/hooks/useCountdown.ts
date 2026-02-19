import { useState, useEffect } from 'react';

// Tenerife (WET/WEST) is UTC+1 in summer. June 15 = summer time.
// 10:00 local = 09:00 UTC
const TARGET = new Date('2026-06-15T09:00:00Z').getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isOver: boolean;
}

function compute(): TimeLeft {
  const diff = Math.max(0, TARGET - Date.now());
  const isOver = diff === 0;
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds, isOver };
}

export function useCountdown(): TimeLeft {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(compute);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(compute()), 1000);
    return () => clearInterval(id);
  }, []);

  return timeLeft;
}
