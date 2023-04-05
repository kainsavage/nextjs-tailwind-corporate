'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { ReactNode } from 'react';

type NavLinkPropsType = {
  href: string;
  children: ReactNode;
};

export default function NavLink({ href, children }: NavLinkPropsType) {
  const segment = `/${useSelectedLayoutSegment() || ''}`;
  const active = href === segment;

  return (
    <div className="flex flex-shrink flex-col group">
      <Link href={href} className="text-lg font-semibold">
        {children}
      </Link>
      <div
        className={`border-b-2 w-6 ${
          active
            ? 'border-b-red-600'
            : 'group-hover:border-b-blue-600 border-b-white'
        }`}
      />
    </div>
  );
}
