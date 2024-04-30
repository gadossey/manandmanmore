import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  OurVisionPostWrapper,
  OurVisionPostRow,
  OurVisionimage,
  OurVisionImageContainer,
  OurVisionMiddle,
  Bgcolor,
} from "./style";

interface OurVisionPostsProps {}

const OurVisionPosts: React.FunctionComponent<OurVisionPostsProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/manstove.png/" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `);

  return (
    <Bgcolor>
      <OurVisionPostWrapper>   
        <OurVisionMiddle>
          <h1>Our Vision</h1>
          <h2>Limit the amount of CO2 Emissions</h2>
          <h2>to make world air pollution free</h2>
        </OurVisionMiddle>
      </OurVisionPostWrapper>
    </Bgcolor>
  );
};

export default OurVisionPosts;
