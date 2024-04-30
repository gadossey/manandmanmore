import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  WORKTGPostWrapper,
  WORKTGPostRow,
  WORKTGimage,
} from "./style";
import GatsbyImage from "../../../components/gatsby-image";

interface WORKTGPostsProps {}

const WORKTGPosts: React.FunctionComponent<WORKTGPostsProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/Factory.png/" }) {
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
    <WORKTGPostWrapper>
      <WORKTGPostRow>
       
        <h2>Let’s work together for a better future</h2>
        
      </WORKTGPostRow>
      <WORKTGimage>
       
          <GatsbyImage
            src={Data.avatar.childImageSharp.gatsbyImageData}
            alt="not found"
          />
       
      </WORKTGimage>
    </WORKTGPostWrapper>
  );
};

export default WORKTGPosts;
