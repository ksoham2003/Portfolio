'use client';

import { useEffect, useState } from 'react';

export default function Clock() {
  const [time, setTime] = useState<string>('--:--:--');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock-wrapper">
      <span className="clock-label">LOCAL</span>
      <span className="clock-slash">/</span>
      <span className="clock-time">{time}</span>
    </div>
  );
}
