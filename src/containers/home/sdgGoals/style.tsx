import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const SdgGoalsWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 auto;
  background-color: #f5f5f5;
  justify-content: center;
  @media (max-width: 1420px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 767px) {
    padding-bottom: 55px;
    padding-top: 0;
  }
`;

export const SdgGoalsInner = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: white;
  margin: 23px 205px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const SdgGoalsPostArea = styled.div`
  flex: 1;

  width: calc(100% - 375px);
  @media (max-width: 1200px) {
    width: calc(100% - 335px);
  }
  @media (max-width: 1024px) {
    width: calc(100% - 275px);
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const TrendingPosts = styled.div`
  display: flex;
  /* align-content: space-around; */
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
  width: 375px;
  max-width: 100%;
  padding-left: 60px;
  @media (max-width: 1200px) {
    width: 335px;
    padding-left: 40px;
  }
  @media (max-width: 1024px) {
    width: 275px;
    padding-left: 30px;
  }
  @media (max-width: 767px) {
    width: 100%;
    padding-left: 0;
  }

  .featured_post {
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Title = styled.div`
  color: ${themeGet("colors.textColor", "#121213")};
  font-size: ${themeGet("fontSizes.6", "24")}px;
  font-weight: ${themeGet("fontWeights.5", "600")};
  margin-bottom: 25px;
  @media (max-width: 1200px) {
    font-size: 20px;
    margin-top: -5px;
    margin-bottom: 20px;
  }
  @media (max-width: 1024px) {
    font-size: ${themeGet("fontSizes.5", "18")}px;
  }
`;
