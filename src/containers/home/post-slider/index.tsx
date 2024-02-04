import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import {
  SectionWrapper,
  ImageWrapper,
  TitleWrapper,
  BuyButton,
} from "./style";

const SimpleSwiper = () => {
  return (
    <SectionWrapper>
      <TitleWrapper>
        <h2>Our New Improved Stoves  will get you the Durability you want</h2>
        <Link to="/retailers">
          <BuyButton>Buy Now</BuyButton>
        </Link>
      </TitleWrapper>
      <ImageWrapper>
        <StaticImage
          src="../../../../content/blog/We-have-helped-save-over-two-Million/banner.png" // Replace with your image path
          alt="Static Image"
          placeholder="blurred"
        />
      </ImageWrapper>
      
    </SectionWrapper>
  );
};

export default SimpleSwiper;
