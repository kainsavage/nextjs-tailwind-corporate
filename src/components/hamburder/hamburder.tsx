'use client';
import './hamburder.scss';
import { useState } from 'react';

type HamburderTogglePropsType = {
  barWidth?: string;
  barHeight?: string;
  gap?: string;
  foregroundColor?: string;
  backgroundColor?: string;
  className?: string | string[];
  children: React.ReactNode;
};

const SquareRootOfTwo = Math.sqrt(2);

export default function HamburderToggle({
  barWidth = '32px',
  barHeight = '8px',
  gap = '4px',
  foregroundColor = '#333',
  backgroundColor = '#fff',
  className,
  children,
}: HamburderTogglePropsType) {
  const [checked, setChecked] = useState(false);
  const hamburgerHeight = 8 * 3 + 4 * 2;
  const xWidth = hamburgerHeight * SquareRootOfTwo;
  console.log(xWidth);

  return (
    <div
      style={{
        '--bar-width': barWidth,
        '--bar-height': barHeight,
        '--gap': gap,
        '--foreground-color': foregroundColor,
        '--background-color': backgroundColor,
        '--animation-timing': '200ms ease-in-out',
        '--square-root-of-two': SquareRootOfTwo,
      }}
      className={`${className ? className : ''}`}
    >
      <aside className={`sidebar ${checked ? 'checked' : ''}`}>
        {children}
      </aside>
      <label
        className={`hamburger-menu flex flex-col w-max absolute top-2 right-3 z-10 cursor-pointer ${
          checked ? 'checked' : ''
        }`}
      >
        <input
          type="checkbox"
          className={`appearance-none p-0 m-0 outline-none pointer-events-none ${
            checked ? 'checked' : ''
          }`}
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      </label>
    </div>
  );
}
