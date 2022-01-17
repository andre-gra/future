/* eslint-disable quotes */
/* eslint-disable react/jsx-curly-brace-presence */
import React, { useState } from 'react';
import SpaceshipIcon from './SpaceshipIcon';

export default function Navbar() {
  const [showMenu, useShowMenu] = useState(false);
  const [rotateIcon, useRotateIcon] = useState(false);
  const [rotateClass, useRotateClass] = useState("");

  function toggleButton() {
    useRotateIcon(!rotateIcon);
    if (rotateIcon) {
      useRotateClass("icon-0deg");
    } else {
      useRotateClass("icon-180deg");
    }
    setTimeout(() => {
      useShowMenu(!showMenu);
    }, showMenu ? 0 : 1000);
  }

  return (
    <nav className="text-two font-title text-xl">
      {showMenu
        ? (
          <ul className={`${showMenu ? "nav-wrapper-show" : "nav-wrapper-hide"} absolute top-0 w-full h-full bg-seven text-four flex flex-col justify-center text-4xl lg:text-6xl leading-relaxed lg:leading-relaxed`}>
            <button type="button" onClick={toggleButton}>
              <SpaceshipIcon width="3em" height="3em" className="fill-two mx-auto border border-two rounded-full p-2 transform rotate-180 hover:transform hover:rotate-0" />
            </button>
            <li>MILKY WAY</li>
            <li>ANDROMEDA</li>
            <li>CYGAR</li>
            <li>FIREWORKS</li>
            <li>MICE</li>
            <li>SOMBRERO</li>
          </ul>
        )
        : (
          <div className="absolute top-0 left-0 w-[100vw] h-[100vh] overflow-hidden pointer-events-none">
            <button type="button" onClick={toggleButton} className="pointer-events-auto">
              <SpaceshipIcon width="3em" height="3em" className={`${rotateClass} space-icon fill-two mx-auto border border-two rounded-full p-2 hover:transform hover:rotate-180 absolute top-32`} />
            </button>
          </div>
        ) }
    </nav>
  );
}
