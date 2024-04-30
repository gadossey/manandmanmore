import styled from "styled-components";

export const WORKTGPostWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  background-color: rgb(244 244 244 / var(--tw-bg-opacity));
  @media (max-width: 1400px) {
    padding-top: 50px;
    padding-bottom: 50px;
    --tw-gradient-stops: var(--tw-gradient-from),
      var(--tw-gradient-to, rgba(153, 0, 0, 0));
    background-image: linear-gradient(to right, var(--tw-gradient-stops));
    font-size: 16px;
    line-height: 22px;
    --tw-bg-opacity: 1;
  }
  @media (max-width: 767px) {
    margin: 0px;
  }
  @media (max-width: 460px) {
    max-width: 100px;
  }
`;

export const WORKTGImageContainer = styled.div`
 
`;
export const WORKTGPostRow = styled.div`
  --tw-bg-opacity: 1;

  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
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
    margin: 0px;
    flex: 0 0 55%;
    max-width: 55%;
    padding-right: 50px;
  }
  @media (max-width: 575px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin: 10px;
    padding-right: 0;
    order: 1;
  }
  h1 {
    color: #000000;
    margin: 10px;
    font-size: 19px !important;
    font-weight: 700 !important;
    padding: 30px;
    @media (max-width: 990px) {
      font-size: 24px;
    }
    @media (max-width: 575px) {
      font-size: 22px;
    }
  }
  h2 {
    color: #000000;
    margin: 10px;
    font-size: 46px !important;
    font-weight: 300 !important;
    padding-left: 30px;
    @media (max-width: 990px) {
      font-size: 24px;
    }
    @media (max-width: 575px) {
      font-size: 22px;
    }
  }

  p {
    margin: 10px;
  }
`;

export const WORKTGimage = styled.div`

  
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
