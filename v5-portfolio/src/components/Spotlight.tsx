'use client';

import { useEffect, useRef } from 'react';

export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    let x = 0;
    let y = 0;

    const paint = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      el.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgb(var(--spotlight-color) / var(--spotlight-opacity)), transparent 80%)`;
    };

    const schedule = () => {
      if (raf) return;
      raf = requestAnimationFrame(paint);
    };

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      schedule();
    };

    // Scrolling doesn't fire mousemove but changes what's under the cursor.
    // Repaint at the same viewport coords so the glow tracks the cursor.
    const onScroll = () => schedule();

    window.addEventListener('mousemove', onMove);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background:
          'radial-gradient(600px circle at 0px 0px, rgb(var(--spotlight-color) / var(--spotlight-opacity)), transparent 80%)',
      }}
    />
  );
}
