import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

function Galaxy({ className, alt, src }) {
  const data = useStaticQuery(graphql`
  query ImageQuery {
    allFile {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
          relativePath
        }
      }
    }
  }
`);

  return (
    data.allFile.edges.map((image) => {
      return (
        image.node.relativePath === src && (
          <GatsbyImage className={className} image={image.node.childImageSharp.gatsbyImageData} alt={alt} />
        )
      );
    }));
}

export default Galaxy;
