import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import GatsbyImage from "../../../components/gatsby-image";
const Main = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 16px;
  --tw-text-opacity: 1;
color: rgb(255 255 255 / var(--tw-text-opacity));

--tw-gradient-to: #7fffd4;
  --tw-gradient-from: #2e6c4b;
--tw-gradient-stops: var(--tw-gradient-from),
  var(--tw-gradient-to, rgba(153, 0, 0, 0));
background-image: linear-gradient(to right, var(--tw-gradient-stops));
font-size: 16px;
line-height: 22px;
--tw-bg-opacity: 1;
  background-color: rgb(244 244 244/var(--tw-bg-opacity));
@media (max-width: 1024px) {
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 600px) {
  grid-template-columns: repeat(2, 1fr);
}
`;

const LogoFrameRow = styled.div`
  display: flex;
  flex-direction: wrap;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
  color: inherit;
  text-decoration: inherit;
  font-size: 16px;
  line-height: 22px;
`;

const LogoSection = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  border: 0 solid;
  box-sizing: border-box;
  border-radius: 32px;
  border-width: 1px;
  height: 86px;
  margin: 20px;
  justify-content: center;
  align-items: center;
  --tw-border-opacity: 1;

  border-color: rgb(255 255 255 / var(--tw-border-opacity));
`;

interface OurPartnersProps {}

const OurPartners: React.FunctionComponent<OurPartnersProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/gatsby-icon.png/" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
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
    <Main>
        <LogoSection>OUR PARTNERS</LogoSection>
        <LogoSection>
          <StaticImage
            src="../../../../content/assets/logo-aera.svg"
            alt="main"
          />
        </LogoSection>
        <LogoSection>
          <StaticImage
            src="../../../../content/assets/delivery-svgrepo-com.svg"
            alt="main"
            height={50}
            width={50}
          />
        </LogoSection>
        <LogoSection>
          <StaticImage
            src="../../../../content/assets/call-center-2-svgrepo-com.svg"
            alt="main"
            height={50}
            width={50}
          />
        </LogoSection>
      
    </Main>
  );
};

export default OurPartners;
