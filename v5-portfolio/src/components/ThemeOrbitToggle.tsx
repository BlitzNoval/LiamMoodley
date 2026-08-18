'use client';

import type { AnimationEvent } from 'react';
import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from './icons';

type CelestialBody = 'moon' | 'sun';
type OrbitTransition = 'orbit-to-moon' | 'orbit-to-sun' | null;

export function ThemeOrbitToggle() {
  const [visibleBody, setVisibleBody] = useState<CelestialBody>('moon');
  const [orbitTransition, setOrbitTransition] = useState<OrbitTransition>(null);
  const nextBody: CelestialBody = visibleBody === 'moon' ? 'sun' : 'moon';

  useEffect(() => {
    if (document.documentElement.dataset.theme === 'light') {
      setVisibleBody('sun');
    }
  }, []);

  const applyTheme = (body: CelestialBody) => {
    const theme = body === 'sun' ? 'light' : 'dark';
    const root = document.documentElement;

    root.classList.add('theme-changing');
    root.dataset.theme = theme;

    try {
      window.localStorage.setItem('liam-moodley-theme', theme);
    } catch {
      // The visual toggle still works when storage is unavailable.
    }

    window.setTimeout(() => root.classList.remove('theme-changing'), 500);
  };

  const beginTransition = () => {
    if (orbitTransition) return;
    setOrbitTransition(nextBody === 'sun' ? 'orbit-to-sun' : 'orbit-to-moon');
  };

  const finishTransition = (
    event: AnimationEvent<HTMLSpanElement>,
    arrivedBody: CelestialBody,
  ) => {
    if (event.target !== event.currentTarget) return;
    applyTheme(arrivedBody);
    setVisibleBody(arrivedBody);
    setOrbitTransition(null);
  };

  return (
    <button
      type="button"
      className={`theme-orbit-toggle fixed bottom-5 right-5 z-50 h-10 w-10 rounded-full text-slate-100 transition-colors hover:text-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300 md:bottom-6 md:right-6 ${
        visibleBody === 'sun' ? 'is-sun' : ''
      } ${orbitTransition ?? ''}`}
      onClick={beginTransition}
      disabled={orbitTransition !== null}
      aria-label={`Rotate ${nextBody} into view`}
    >
      <span
        className="theme-orbit-icon theme-orbit-moon"
        aria-hidden="true"
        onAnimationEnd={
          orbitTransition === 'orbit-to-moon'
            ? (event) => finishTransition(event, 'moon')
            : undefined
        }
      >
        <span className="theme-orbit-disc theme-orbit-moon-disc">
          <MoonIcon className="h-[22px] w-[22px]" />
        </span>
      </span>
      <span
        className="theme-orbit-icon theme-orbit-sun"
        aria-hidden="true"
        onAnimationEnd={
          orbitTransition === 'orbit-to-sun'
            ? (event) => finishTransition(event, 'sun')
            : undefined
        }
      >
        <span className="theme-orbit-disc theme-orbit-sun-disc">
          <SunIcon className="h-[22px] w-[22px]" />
        </span>
      </span>
    </button>
  );
}
