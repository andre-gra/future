import React from 'react';
import Footer from './footer';
import Header from './header';

export default function Layout({
  children, toggleButton, rotateClass, showMenu,
}) {
  return (
    <>
      <Header toggleButton={toggleButton} rotateClass={rotateClass} showMenu={showMenu} />
      {children}
      <Footer />
    </>
  );
}
