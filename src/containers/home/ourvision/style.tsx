import styled from "styled-components";
import OurVisionBG from "../../../../content/assets/picture-with-pot.png";

export const Bgcolor = styled.div`
  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgba(153, 0, 0, 0));
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
  font-size: 16px;
  line-height: 22px;
  --tw-bg-opacity: 1;
  background-color: rgb(244 244 244 / var(--tw-bg-opacity));
`;

export const OurVisionPostWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  margin: 0 auto;
  height: 400px;
  justify-content: center;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 1400px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;
export const OurVisionMiddle = styled.div`
  --tw-bg-opacity: 1;
  background-image: url(${OurVisionBG});

  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  border-radius: 0.375rem;
  display: flex;
  flex: 0.7;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
  @media (max-width: 990px) {
    font-size: 26px;
  }
  @media (max-width: 575px) {
    flex: 0.9;
    height: 100%;
    font-size: 22px;
  }
  h1 {
    text-align: center;
    font-weight: 700;
    text-decoration: underline;
    @media (max-width: 990px) {
      font-size: 24px;
    }
    @media (max-width: 575px) {
      font-size: 22px;
    }
  }
  h2 {
    font-weight: 300;

    text-align: center;
    @media (max-width: 990px) {
      font-size: 24px;
    }
    @media (max-width: 575px) {
      font-size: 22px;
    }
  }
`;

export const OurVisionImageContainer = styled.div`
  padding: 10px;
`;
export const OurVisionPostRow = styled.div`
  flex: 0.2;
  max-width: 50%;
  @media (max-width: 1400px) {
    flex: 0.2;
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

export const OurVisionimage = styled.div`
  flex: 0.2;
  max-width: 50%;
  @media (max-width: 1400px) {
    flex: 0.2;
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
