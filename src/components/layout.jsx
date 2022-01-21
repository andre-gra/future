import React from 'react';
import Footer from './footer';
import Header from './header';

export default function Layout({
  children, toggleButton, rotateClass, showMenu, galaxies, textAttributionWikipedia,
}) {
  return (
    <>
      <Header toggleButton={toggleButton} rotateClass={rotateClass} showMenu={showMenu} galaxies={galaxies} />
      {children}
      <Footer textAttributionWikipedia={textAttributionWikipedia} />
    </>
  );
}
