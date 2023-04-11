'use client';
import './toggle.scss';
import { useState } from 'react';

export default function HamburderToggle() {
  const [checked, setChecked] = useState(true);

  return (
    <label className="hamburger-menu flex flex-col gap-1 w-max absolute top-0.5 left-0.5 z-10 cursor-pointer">
      {/* We use a checkbox because it naturally does this type of toggling. */}
      <input
        type="checkbox"
        className="appearance-none p-0 m-0 outline-none pointer-events-none"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    </label>
  );
}
