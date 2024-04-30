import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import GatsbyImage from "../../components/gatsby-image";

import PostSliderWrapper, {
  AboutMain,
  InnerWrapper,
  AboutTAG,
  PostDetails,
  AboutWrapper,
} from "./style";
import BLOGPosts from "../home/posts";
import { PostPreview } from "../../components/post-slide-card/post-slide-card.style";

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = (props) => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/Video.png/" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
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
    <AboutWrapper>
      <PostSliderWrapper>
        <PostDetails>
          <AboutTAG>KNOW ABOUT US </AboutTAG>
          <AboutMain>We help save 441,000 tCO2 per year</AboutMain>
        </PostDetails>
        <PostPreview>
          <GatsbyImage
            src={Data.avatar.childImageSharp.gatsbyImageData}
            alt="author"
          />
        </PostPreview>
      </PostSliderWrapper>
      <InnerWrapper>
        <PostPreview>
          <h3>
            Michael Yaw Agyei is a social entrepreneur addressing the issue of
            charcoal consumption and deforestation in Ghana.
          </h3>

          <p>
            M&M is succesfully running 2 carbon programs yielding more than
            400,000 tonnes of CO2 emissions reduction per year. Their factory is
            located in Kumasi. The site employs 175 staff (for both sales and
            production), and can produce 30,000 stoves per month.+
          </p>
        </PostPreview>
        <BLOGPosts />
      </InnerWrapper>
    </AboutWrapper>
  );
};

export default About;
