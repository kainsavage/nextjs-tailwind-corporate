'use client';

import { ReactNode, useState } from 'react';

type TributtonPropsType = {
  className?: string;
};

export default function Tributton({ className }: TributtonPropsType) {
  const [selected, setSelected] = useState(0);

  return (
    <div className={`flex flex-shrink bg-gray-100 mx-auto p-2 ${className}`}>
      <Button selected={selected === 0} onClick={() => setSelected(0)}>
        I&apos;m an existing Business
      </Button>
      <span
        className={`border-l my-2 ${
          selected === 2 ? 'border-l-slate-700' : 'border-l-gray-100'
        }`}
      />
      <Button selected={selected === 1} onClick={() => setSelected(1)}>
        I&apos;m a New Business
      </Button>
      <span
        className={`border-l my-2 ${
          selected === 0 ? 'border-l-slate-700' : 'border-l-gray-100'
        }`}
      />
      <Button selected={selected === 2} onClick={() => setSelected(2)}>
        I&apos;m a New Business
      </Button>
    </div>
  );
}

type ButtonPropsType = {
  selected: boolean;
  onClick: () => void;
  children: ReactNode;
};

function Button({ selected, onClick, children }: ButtonPropsType) {
  return (
    <button
      className={`flex mx-auto px-8 py-2 font-semibold ${
        selected
          ? 'bg-gradient-to-t from-red-600 to-red-800 rounded-md text-slate-200'
          : ''
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
