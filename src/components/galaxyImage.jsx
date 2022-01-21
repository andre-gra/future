/* eslint-disable quotes */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useRef, useEffect } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import { useWindowResize } from 'beautiful-react-hooks';

function Galaxy({
  className, alt, src, coordX, coordY, setTextSelection, textSelection, setPosY, setWrapperPosY, setPosX, setWrapperPosX,
}) {
  const data = useStaticQuery(graphql`
  query ImageQuery {
    allFile {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              )
          }
          relativePath
        }
      }
    }
  }
`);
  const elPos = useRef(null);
  const wrapperPos = useRef(null);

  useEffect(() => {
    setPosY(elPos.current.offsetTop);
    setWrapperPosY(wrapperPos.current.offsetTop);
    setPosX(elPos.current.offsetLeft);
    setWrapperPosX(wrapperPos.current.offsetLeft);
  });

  useWindowResize(() => {
    setPosY(elPos.current.offsetTop);
    setWrapperPosY(wrapperPos.current.offsetTop);
    setPosX(elPos.current.offsetLeft);
    setWrapperPosX(wrapperPos.current.offsetLeft);
  });

  let late = 0;

  return (
    data.allFile.edges.map((image) => {
      return (
        image.node.relativePath === src && (
        <div key={image.node.relativePath} ref={wrapperPos} className={className}>
          <GatsbyImage image={image.node.childImageSharp.gatsbyImageData} alt={alt} />
            {
              coordX.split(',').map((pos, index) => {
                late += 250;
                return (
                  <button
                    key={pos}
                    ref={textSelection === index ? elPos : null}
                    onClick={() => { setTextSelection(index); }}
                    type="button"
                    className={`animate-ping-slow absolute inline-flex h-5 w-5 rounded-full bg-two opacity-75`}
                    style={{
                      top: `${pos}%`, left: `${coordY.split(',')[index]}%`, animationDelay: `${late}ms`, webkitTapHighlightColor: "transparent",
                    }}
                  />
                );
              })
            }
        </div>
        )
      );
    })
  );
}

export default Galaxy;
