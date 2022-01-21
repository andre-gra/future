import React, {
  useState, useRef, useEffect,
} from 'react';
import { useWindowResize } from 'beautiful-react-hooks';
import { graphql } from 'gatsby';
import Galaxy from '../components/galaxyImage';
import Layout from '../components/layout';

export const queryGalaxies = graphql`
  {
    allGalaxiesJson {
      nodes {
        value {
          name
          text1
          text2
          text3
          text4
          text5
          title
          textAttributionWikipedia
          coordX
          coordY
        }
      }
    }
  }
`;

function IndexPage({ data }) {
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
  const [galaxy, setGalaxy] = useState(data.allGalaxiesJson.nodes[0].value[0]);

  const toggleButton = (galaxyIndex) => {
    useRotateIcon(!rotateIcon);
    if (rotateIcon) {
      useRotateClass('icon-0deg');
    } else {
      useRotateClass('icon-180deg');
    }
    if (showMenu && typeof galaxyIndex === 'number') {
      setGalaxy(data.allGalaxiesJson.nodes[0].value[galaxyIndex]);
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
            {galaxy.text1}
          </p>
        );
      case 1:
        return (
          <p className="border border-one text-one p-5">
            {galaxy.text2}
          </p>
        );
      case 2:
        return (
          <p className="border border-one text-one p-5">
            {galaxy.text3}
          </p>
        );
      case 3:
        return (
          <p className="border border-one text-one p-5">
            {galaxy.text4}
          </p>
        );
      case 4:
        return (
          <p className="border border-one text-one p-5">
            {galaxy.text5}
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
    <Layout toggleButton={toggleButton} rotateClass={rotateClass} showMenu={showMenu} galaxies={data.allGalaxiesJson.nodes} textAttributionWikipedia={galaxy.textAttributionWikipedia}>
      <main className="relative flex flex-col lg:grid lg:grid-cols-12 lg:grid-rows-layout" style={showMenu ? { display: 'none' } : null}>
        <svg className="absolute lg:col-start-1 lg:col-end-13 lg:row-start-1 lg:row-end-6 z-10 pointer-events-none" height="100%" width="100%">
          <line x1={wrapperTextX} y1={wrapperTextY} x2={wrapperPosX + posX + 10} y2={wrapperPosY + posY + 10} className="stroke-[5px] stroke-two" />
          <circle cx={wrapperPosX + posX + 10} cy={wrapperPosY + posY + 10} r="20" className="stroke-[5px] stroke-two fill-two" />
        </svg>
        <title>{galaxy.name}</title>
        <h1 className="lg:row-start-2 lg:col-start-4 lg:col-span-6 self-center text-center text-3xl lg:text-5xl text-five font-title uppercase">{galaxy.name}</h1>
        <div className="lg:row-start-4 lg:col-span-6 p-5 self-center text-center font-title">
          <h2 className="text-xl lg:text-4xl mx-5 lg:mx-20 pb-10 border-b-2 border-b-five text-five">
            {galaxy.title}
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
          src={`${galaxy.name}.png`}
          alt={`${galaxy.name}`}
          coordX={`${galaxy.coordX}`}
          coordY={`${galaxy.coordY}`}
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
