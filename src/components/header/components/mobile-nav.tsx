'use client';
import './mobile-nav.scss';
import Nav from './nav';

type MobileNavPropsType = {
  open: boolean;
  foregroundColor?: string;
  backgroundColor?: string;
};

export default function MobileNav({
  open,
  foregroundColor = '#333',
  backgroundColor = '#fff',
}: MobileNavPropsType) {
  return (
    <aside
      style={{
        '--foreground-color': foregroundColor,
        '--background-color': backgroundColor,
        '--animation-timing': '200ms ease-in-out',
      }}
      className={`sidebar ${open ? 'checked' : ''} sm:hidden absolute`}
    >
      {/* <nav>
        <div className="z-20 relative">This</div>
        <div>Is</div>
        <div>The</div>
        <div>Sidebar</div>
      </nav> */}
      <Nav className="flex flex-col" />
    </aside>
  );
}
