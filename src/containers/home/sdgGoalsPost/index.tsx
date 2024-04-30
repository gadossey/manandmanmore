import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  SdgGoalsPostWrapper,
  SdgGoalsPostRow,
  Sgdimage,
  SdgImageContainer,
} from "./style";
import GatsbyImage from "../../../components/gatsby-image";

interface SdgGoalsPostsProps {}

const SdgGoalsPosts: React.FunctionComponent<SdgGoalsPostsProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/burn-design-lab-1-1.png/" }) {
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
   <div>
    
   </div>
  );
};

export default SdgGoalsPosts;
