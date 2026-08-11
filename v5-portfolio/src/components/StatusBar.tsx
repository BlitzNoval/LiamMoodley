'use client';

import { useEffect, useState } from 'react';

const WEATHER_URL =
  'https://api.open-meteo.com/v1/forecast?latitude=-26.2041&longitude=28.0473&current=temperature_2m&timezone=Africa%2FJohannesburg';

function formatTime(d: Date): string {
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
}

export function StatusBar() {
  const [time, setTime] = useState<string>('');
  const [temp, setTemp] = useState<number | null>(null);

  useEffect(() => {
    setTime(formatTime(new Date()));
    const id = window.setInterval(() => setTime(formatTime(new Date())), 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const fetchTemp = async () => {
      try {
        const res = await fetch(WEATHER_URL);
        if (!res.ok) return;
        const data = await res.json();
        const t = data?.current?.temperature_2m;
        if (!cancelled && typeof t === 'number') setTemp(Math.round(t));
      } catch {
        /* offline or blocked — silently skip */
      }
    };
    fetchTemp();
    const id = window.setInterval(fetchTemp, 10 * 60 * 1000);
    return () => {
      cancelled = true;
      window.clearInterval(id);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed right-4 top-4 z-50 flex items-center gap-3 font-mono text-xs text-slate-400 md:right-6 md:top-6"
      aria-live="off"
    >
      <span className="tabular-nums">{time || '--:--:--'}</span>
      <span className="text-slate-600" aria-hidden="true">
        ·
      </span>
      <span className="tabular-nums">
        JHB {temp !== null ? `${temp}°C` : '—'}
      </span>
    </div>
  );
}
