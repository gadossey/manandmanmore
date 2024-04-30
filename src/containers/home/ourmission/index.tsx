import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  OurMissionPostWrapper,
  OurMissionPostRow,
  OurMissionimage,
  OurMissionImageContainer,
  OurMissionMiddle,
  Bgcolor,
} from "./style";

interface OurMissionPostsProps {}

const OurMissionPosts: React.FunctionComponent<OurMissionPostsProps> = () => {
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
      <OurMissionPostWrapper>
        
        <OurMissionMiddle>
          <h1>OUR MISSION</h1>
          <h2>Providing improved and efficient cooking</h2>

          <h2>stoves for the Ghanaian Households.</h2>
        </OurMissionMiddle>
        
      </OurMissionPostWrapper>
    </Bgcolor>
  );
};

export default OurMissionPosts;
