import React from 'react';
import Navbar from './navbar';

export default function Header() {
  return (
    <header className="text-two text-center w-full py-4 h-48">
      <span className="text-2xl xl:text-8xl font-titleXl text-five">GALAXY EXPLORER</span>
      <Navbar />
    </header>
  );
}
