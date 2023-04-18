'use client';
import Logo from '../logo';
import Hamburder from '../hamburder/hamburder';
import { useState } from 'react';
import MobileNav from './components/mobile-nav';
import Nav from './components/nav';

type HeaderPropsType = {
  title: string;
  foregroundColor?: string;
  backgroundColor?: string;
};

export default function Header({
  title,
  foregroundColor = '#333',
  backgroundColor = '#fff',
}: HeaderPropsType) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between">
      <div className="flex">
        <Logo />
        <span className="flex text-2xl font-bold ml-7">{title}</span>
      </div>
      <MobileNav open={mobileNavOpen} />
      <Hamburder
        className="sm:hidden aboslute"
        onToggle={setMobileNavOpen}
        foregroundColor={foregroundColor}
        backgroundColor={backgroundColor}
      />
      <Nav className="hidden sm:flex flex-row space-x-8" />
      <button className="px-12 py-2 bg-black text-white rounded-lg hidden sm:flex">
        Contact Us
      </button>
    </div>
  );
}
