import styled from "styled-components";
import OurTeritoriesBG from "../../../../content/assets/Group-2063-1.png";

export const SdgGoalsPostWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 1400px) {
    padding-top: 50px;
    padding-bottom: 50px;
    background-image: url(${OurTeritoriesBG});
    margin-top: 10px;
  }
`;

export const SdgImageContainer = styled.div`
  padding: 10px;
`;
export const SdgGoalsPostRow = styled.div`
  background: #333333;
  width: 50%;
  border-radius: 32px 0px 0px 32px;
  flex: 1;
  max-width: 50%;
  @media (max-width: 1400px) {
    margin-left: 180px;
    flex: 1;
    max-width: 50%;
  }
  @media (max-width: 990px) {
    flex: 0 0 55%;
    max-width: 55%;
    padding-right: 50px;
  }
  @media (max-width: 575px) {
    flex: 0 0 100%;
    max-width: 100%;
    padding-right: 0;
    order: 1;
  }
  h1 {
    @media (max-width: 990px) {
      font-size: 24px;
    }
    @media (max-width: 575px) {
      font-size: 22px;
    }
  }
`;

export const Sgdimage = styled.div`
  background: #333333;
  height: 400px;
  margin: auto;
  border-radius: 0px 32px 32px 0px;
  flex: 1;
  max-width: 50%;
  @media (max-width: 1400px) {
    margin-right: 180px;
    flex: 1;
    max-width: 50%;
  }
  @media (max-width: 990px) {
    flex: 0 0 55%;
    max-width: 55%;
    padding-right: 50px;
  }
  @media (max-width: 575px) {
    flex: 0 0 100%;
    max-width: 100%;
    padding-right: 0;
    order: 1;
  }
  h1 {
    @media (max-width: 990px) {
      font-size: 24px;
    }
    @media (max-width: 575px) {
      font-size: 22px;
    }
  }
`;
