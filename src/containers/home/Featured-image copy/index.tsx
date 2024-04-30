import React from "react";
import styled from "styled-components";
import HeroImages from "./heroimage.png";
import OurvisionImage from "../../../../content/assets/OurVision.png";
import WhoWeAreImage from "../../../../content/assets/WhoWeAre.png";

const Main = styled.div`
  background-color: #00e0ff;
`;
const HeroImage = styled.img`
  width: 100%;
  background-size: cover;
  background-position: center;
`;

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Ourvision = styled.img`
  display: flex;
  flex-wrap: wrap;
  background-color: #00e0ff;
  width: 100%;
  background-size: cover;
  background-position: center;
`;

const WhoWeAre = styled.img`
  display: flex;
  background-color: #00e0ff;
  width: 90%;
  background-position: right;
`;
const KnowUsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MainColumn = styled.div`
  flex: 1;
  padding: 10px;
`;
const MainColumn1 = styled.div`
  flex: 0.1;
  padding: 10px;
`;

const InnerColumn = styled.div`
  flex: 1;
  padding: 10px;
`;
const Description = styled.div`
  flex: 1;
  padding: 10px;
`;

const FeaturedImagePage = () => {
  return (
    <Main>
      <HeroImage src={HeroImages} alt="Hero Image" />
      <MainContainer>
        <MainColumn1>
          <InnerColumn>Know about us</InnerColumn>
        </MainColumn1>
        <MainColumn>
          <InnerColumn>Know about us</InnerColumn>
          <InnerColumn>We help save 441,000 tCO2 per year</InnerColumn>
        </MainColumn>
        <MainColumn>
          The enterprise target includes homes, restaurants, peri-urban and
          rural areas where charcoal and fire wood is predominantly the source
          of fuel. With a modern ceramic lining retains heat, reducing charcoal
          consumption by 40 %. The stoves cost the same as conventional stoves
          and have a longer lifetime.
        </MainColumn>
      </MainContainer>
      <Ourvision src={OurvisionImage} alt="Hero Image"></Ourvision>
      <WhoWeAre src={WhoWeAreImage} alt="Hero Image"></WhoWeAre>

      <KnowUsContainer>
        <MainColumn>
          <InnerColumn>who we are</InnerColumn>
          <InnerColumn>Let’s work together</InnerColumn>
          <InnerColumn>
            Over the Years we have had an Ultimate Goal to reduce the Excessive
            use of firewood as Major Source of Fuel for cooking in Ghana{" "}
          </InnerColumn>
        </MainColumn>
        <MainColumn>
          The enterprise target includes homes, restaurants, peri-urban and
          rural areas where charcoal and fire wood is predominantly the source
          of fuel. With a modern ceramic lining retains heat, reducing charcoal
          consumption by 40 %. The stoves cost the same as conventional stoves
          and have a longer lifetime.
        </MainColumn>
      </KnowUsContainer>
    </Main>
  );
};

export default FeaturedImagePage;
