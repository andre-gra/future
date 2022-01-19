import React, {
  useState, useRef, useEffect,
} from 'react';
import { useWindowResize } from 'beautiful-react-hooks';
import Galaxy from '../components/galaxyImage';
import Layout from '../components/layout';

function IndexPage() {
  const [textSelection, setTextSelection] = useState(0);
  const [posY, setPosY] = useState(0);
  const [wrapperPosY, setWrapperPosY] = useState(0);
  const [posX, setPosX] = useState(0);
  const [wrapperPosX, setWrapperPosX] = useState(0);
  const textCenterRef = useRef(null);
  const [wrapperTextX, setWrapperTextX] = useState(0);
  const [wrapperTextY, setWrapperTextY] = useState(0);
  const [showMenu, useShowMenu] = useState(false);
  const [rotateIcon, useRotateIcon] = useState(false);
  const [rotateClass, useRotateClass] = useState('');

  const toggleButton = () => {
    useRotateIcon(!rotateIcon);
    if (rotateIcon) {
      useRotateClass('icon-0deg');
    } else {
      useRotateClass('icon-180deg');
    }
    setTimeout(() => {
      useShowMenu(!showMenu);
    }, showMenu ? 0 : 1000);
  };

  // text rendering selection
  function renderSwitch(param) {
    switch (param) {
      case 0:
        return (
          <p className="border border-one text-one p-5">
            With the name describing the galaxy`&apos;`s appearance from Earth: a hazy band
            of light seen in the night sky formed from stars that cannot be individually distinguished by the
            naked eye. The term Milky Way is a translation of the Latin via lactea, from
            the Greek γαλακτικός κύκλος (galaktikos kýklos), meaning `&quot;`milky circle.`&quot;`
          </p>
        );
      case 1:
        return (
          <p className="border border-one text-one p-5">
            From Earth, the Milky Way appears as a band because its disk-shaped
            structure is viewed from within. Galileo Galilei first resolved the band of
            light into individual stars with his telescope in 1610. Until the early 1920s,
            most astronomers thought that the Milky Way contained all the stars in the
            Universe. Following the 1920 Great Debate between the astronomers Harlow
            Shapley and Heber Curtis, observations by Edwin Hubble showed that the
            Milky Way is just one of many galaxies.
          </p>
        );
      case 2:
        return (
          <p className="border border-one text-one p-5">
            The Milky Way is a barred spiral galaxy
            with an estimated visible diameter of 100,000–200,000 light-years. Recent
            simulations suggest that a dark matter disk, also containing some visible
            stars, may extend up to a diameter of almost 2 million light-years. The
            Milky Way has several satellite galaxies and is part of the Local Group of
            galaxies, which form part of the Virgo Supercluster, which is itself a
            component of the Laniakea Supercluster. It is estimated to contain 100–
            400 billion stars and at least that number of planets.
          </p>
        );
      case 3:
        return (
          <p className="border border-one text-one p-5">
            Solar System is located at a radius of about 27,000 light-years from the
            Galactic Center, on the inner edge of the Orion Arm, one of the spiral-
            shaped concentrations of gas and dust. The stars in the innermost 10,000 light-
            years form a bulge and one or more bars that radiate from the bulge. The
            galactic center is an intense radio source known as Sagittarius A*, a
            supermassive black hole of 4.100 (± 0.034) million solar masses. Stars and
            gases at a wide range of distances from the Galactic Center orbit at
            approximately 220 kilometers per second.
          </p>
        );
      case 4:
        return (
          <p className="border border-one text-one p-5">
            The constant rotational speed appears
            to contradict the laws of Keplerian dynamics and suggests that much (about 90%)
            of the mass of the Milky Way is invisible to telescopes, neither
            emitting nor absorbing electromagnetic radiation. This conjectural mass has
            been termed `&quot;`dark matter`&quot;`. The rotational period is about 240 million years
            at the radius of the Sun. The Milky Way as a whole is moving at a velocity
            of approximately 600 km per second with respect to extragalactic frames of
            reference. The oldest stars in the Milky Way are nearly as old as the Universe
            itself and thus probably formed shortly after the Dark Ages of the Big Bang.
          </p>
        );
      default:
        return null;
    }
  }

  useEffect(() => {
    setWrapperTextY(textCenterRef.current.offsetTop);
    setWrapperTextX(textCenterRef.current.offsetLeft);
  });

  useWindowResize(() => {
    setWrapperTextY(textCenterRef.current.offsetTop);
    setWrapperTextX(textCenterRef.current.offsetLeft);
  });

  return (
    <Layout toggleButton={toggleButton} rotateClass={rotateClass} showMenu={showMenu}>
      <main className="relative flex flex-col lg:grid lg:grid-cols-12 lg:grid-rows-layout" style={showMenu ? { display: 'none' } : null}>
        <svg className="absolute lg:col-start-1 lg:col-end-13 lg:row-start-1 lg:row-end-6 z-10 pointer-events-none" height="100%" width="100%">
          <line x1={wrapperTextX} y1={wrapperTextY} x2={wrapperPosX + posX + 10} y2={wrapperPosY + posY + 10} className="stroke-[5px] stroke-two" />
          <circle cx={wrapperPosX + posX + 10} cy={wrapperPosY + posY + 10} r="20" className="stroke-[5px] stroke-two fill-two" />
        </svg>
        <title>Milky way</title>
        <h1 className="lg:row-start-2 lg:col-start-4 lg:col-span-6 self-center text-center text-3xl lg:text-5xl text-five font-title">MILKY WAY</h1>
        <div className="lg:row-start-4 lg:col-span-6 p-5 self-center text-center font-title">
          <h2 className="text-xl lg:text-4xl mx-5 lg:mx-20 pb-10 border-b-2 border-b-five text-five">
            The Milky Way is the galaxy that includes our Solar System
          </h2>
        </div>
        <div className="lg:row-start-5 lg:col-span-6 mx-5 -lg:order-last bg-seven my-auto font-titleXl text-sm lg:text-base">
          <div className="flex -lg:flex-col items-center p-10">
            {renderSwitch(textSelection)}
            <span className="-lg:order-first" ref={textCenterRef} />
          </div>
        </div>
        <Galaxy
          className="galaxy-image relative lg:row-start-4 lg:row-span-2 lg:col-start-7 lg:col-span-6 p-5 self-center justify-self-center"
          src="milkyway.png"
          alt="Milky way"
          coordX={[65, 40, 50, 60, 55]}
          coordY={[70, 75, 10, 50, 35]}
          setTextSelection={setTextSelection}
          textSelection={textSelection}
          setPosY={setPosY}
          setWrapperPosY={setWrapperPosY}
          setPosX={setPosX}
          setWrapperPosX={setWrapperPosX}
        />
      </main>
    </Layout>
  );
}

export default IndexPage;
