import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const PostSliderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  background: #fff;
  padding: 0 75px;
  @media (max-width: 1400px) {
    padding: 0 162px;
  }
  @media (max-width: 990px) {
    padding: 0 25px;
  }
`;
export const AboutTAG = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-grow: 1;

  span {
    display: block;
    margin-right: 15px;
    @media (max-width: 990px) {
      margin-right: 10px;
    }
    &:last-child {
      margin-right: 0;
    }
  }

  a {
    display: block;
    font-size: 13px;
    font-weight: 400;
    color: ${themeGet("textColor", "#292929")};
    transition: 0.15s ease-in-out;
    text-transform: capitalize;
    &:hover {
      color: ${themeGet("primary", "#D10068")};
    }
    @media (max-width: 990px) {
      font-size: 13px;
    }
  }
`;
export const AboutMain = styled.h2`
  font-size: 48px;
  font-weight: 700;
  color: ${themeGet("colors.textColor", "#292929")};
  margin-bottom: 40px;
  line-height: 1.41;
  a {
    color: ${themeGet("colors.textColor", "#292929")};
  }
  @media (max-width: 1600px) {
    font-size: 34px;
    margin-bottom: 35px;
  }
  @media (max-width: 1024px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
  @media (max-width: 575px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
  @media (max-width: 990px) and (min-width: 768px) {
    font-size: 20px;
    max-height: 3em;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }
`;

export const PostDetails = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  background-color: #fff;
  padding: 90px;
  transition: 0.3s ease-in-out;
  @media (max-width: 1600px) {
    padding: 60px;
  }
  @media (max-width: 1024px) {
    padding: 20px 20px 20px 0;
  }
  @media (max-width: 767px) {
    flex: 0 0 100%;
    max-width: 100%;
    order: 1;
  }
`;
export const AboutDesc = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  @media (max-width: 990px) {
    display: none;
  }
`;
export const PrevButton = styled.div`
  position: absolute;
  display: block;
  bottom: 0;
  right: 82px;
  width: 80px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${themeGet("colors.textColor", "#292929")};
  z-index: 2;
  color: #fff;
  cursor: pointer;
  outline: none;
  &:after {
    display: none;
  }
  &.swiper-button-disabled {
    color: #a0a0a0;
    pointer-events: none;
    svg,
    path {
      fill: #a0a0a0;
    }
  }
  @media (max-width: 767px) {
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 40px;
  }
`;

export const NextButton = styled.div`
  position: absolute;
  display: block;
  bottom: 0;
  right: 0;
  width: 80px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${themeGet("colors.textColor", "#292929")};
  z-index: 2;
  color: #fff;
  cursor: pointer;
  outline: none;
  &:after {
    display: none;
  }
  &.swiper-button-disabled {
    color: #a0a0a0;
    pointer-events: none;
    svg,
    path {
      fill: #a0a0a0;
    }
  }
  @media (max-width: 767px) {
    top: 50%;
    transform: translateY(-50%);
    rihgt: 0;
    width: 40px;
  }
`;

export const AboutImage = styled.div`
  width: 100%;
  margin-bottom: 0px;
  @media (max-width: 990px) {
    margin-bottom: 60px;
  }
  @media (max-width: 767px) {
    margin-bottom: 40px;
  }
`;

export const InnerWrapper = styled.div`
  background-color: #ebebeb;
  position: relative;
  padding: 0px 17px 0 17px;
  @media (max-width: 990px) {
    padding: 80px 45px 30px 45px;
  }
  @media (max-width: 575px) {
    padding: 60px 25px 0 25px;
  }
`;
export const AboutWrapper = styled.div`
  position: relative;
  padding: 0px 17px 0 17px;
  @media (max-width: 990px) {
    padding: 80px 45px 30px 45px;
  }
  @media (max-width: 575px) {
    padding: 60px 25px 0 25px;
  }
`;

export default PostSliderWrapper;
