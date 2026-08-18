'use client';

import { useState } from 'react';
import { MoonIcon, SunIcon } from './icons';

export function ThemeOrbitToggle() {
  const [showSun, setShowSun] = useState(false);
  const nextIcon = showSun ? 'moon' : 'sun';

  return (
    <button
      type="button"
      className={`theme-orbit-toggle fixed bottom-5 right-5 z-50 h-10 w-10 rounded-full text-slate-100 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300 md:bottom-6 md:right-6 ${
        showSun ? 'is-sun' : ''
      }`}
      onClick={() => setShowSun((current) => !current)}
      aria-label={`Rotate ${nextIcon} into view`}
      title={`Show ${nextIcon}`}
    >
      <span className="theme-orbit-icon theme-orbit-moon" aria-hidden="true">
        <span className="theme-orbit-disc theme-orbit-moon-disc">
          <MoonIcon className="h-[22px] w-[22px]" />
        </span>
      </span>
      <span className="theme-orbit-icon theme-orbit-sun" aria-hidden="true">
        <span className="theme-orbit-disc theme-orbit-sun-disc">
          <SunIcon className="h-[22px] w-[22px]" />
        </span>
      </span>
    </button>
  );
}
