import React from 'react';
import Navbar from './navbar';

export default function Header({ toggleButton, rotateClass, showMenu }) {
  return (
    <header className="text-two text-center w-full py-4 h-48">
      <div className="-lg:w-60 mx-auto"><span className="text-4xl lg:text-6xl font-titleXl text-five">GALAXY EXPLORER</span></div>
      <Navbar toggleButton={toggleButton} rotateClass={rotateClass} showMenu={showMenu} />
    </header>
  );
}
