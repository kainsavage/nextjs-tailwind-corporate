'use client';
import './toggle.scss';
import { useState } from 'react';

type HamburderTogglePropsType = {
  barWidth?: string;
  barHeight?: string;
  gap?: string;
  foregroundColor?: string;
  backgroundColor?: string;
};

const SquareRootOfTwo = Math.sqrt(2);

export default function HamburderToggle({
  barWidth = '32px',
  barHeight = '8px',
  gap = '4px',
  foregroundColor = '#333',
  backgroundColor = '#fff',
}: HamburderTogglePropsType) {
  const [checked, setChecked] = useState(false);

  return (
    <label
      style={{
        '--bar-width': barWidth,
        '--bar-height': barHeight,
        '--gap': gap,
        '--foreground-color': foregroundColor,
        '--background-color': backgroundColor,
        '--animation-timing': '200ms ease-in-out',
        '--square-root-of-two': SquareRootOfTwo,
      }}
      className={`hamburger-menu flex flex-col w-max absolute top-0.5 left-0.5 z-10 cursor-pointer ${
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
  );
}
