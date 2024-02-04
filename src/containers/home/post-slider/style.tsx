import styled from "styled-components";

export const SectionWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }

  @media (min-width: 768px) {
    margin-left: 160px;
    margin-right: 160px;
  }
`;

export const BuyButton =styled.div`
`;
export const ImageWrapper = styled.div`
  flex: 1;
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
    order: 2;
  }
`;

export const TitleWrapper = styled.div`
  flex: 1;
  padding: 1rem;
  max-width: 50%;
  h2 {
      
    font: Montserrat Light;
    font-size: 50px;
    font-weight: bold;
    color: #333;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
    order: 1;
    h2 {
      
      font: Montserrat Light;
      font-size: 28px;
      font-weight: bold;
      color: #333;
    }
  }


`;