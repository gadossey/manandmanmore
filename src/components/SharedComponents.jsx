import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';


export const NotFoundWrapper = styled.div`
 
 
`;

export const Container = styled.div`
flex-direction: column;
align-items: center;
flex: 0 0 35%;
max-width: 35%;
padding-right: 100px;
@media (max-width: 1400px) {
  flex: 0 0 45%;
  max-width: 45%;
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
export const ViewTitle = styled.h1`

 font-size: 24px;
  margin-bottom: 20px;
`;


export const ViewContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const Button = styled.div`
 padding: 10px 20px;
  font-size: 18px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const BackButton = styled.div`
 padding: 10px 20px;
  font-size: 18px;
  background-color: #ccc;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #999;
  }
`;
export const Alert = styled.div`
 padding: 10px;
  margin-bottom: 10px;
  background-color: #ffdddd;
  color: #ff0000;
  border: 1px solid #ff0000;
  border-radius: 4px;
`;

export const Instruction = styled.div`
  font-size: 16px;
  text-align: center;
  margin-bottom: 10px;
`;

export const NotFoundContent = styled.div`
  flex: 0 0 35%;
  max-width: 35%;
  padding-right: 100px;
  @media (max-width: 1400px) {
    flex: 0 0 45%;
    max-width: 45%;
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

export const NotFoundImage = styled.div`
  flex: 0 0 65%;
  max-width: 65%;
  padding-left: 10px;
  @media (max-width: 1400px) {
    flex: 0 0 55%;
    max-width: 55%;
  }
  @media (max-width: 990px) {
    flex: 0 0 45%;
    max-width: 45%;
  }
  @media (max-width: 575px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 50px;
  }
`;

export const Icon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #dbdbdb;
  color: #fff;
  font-size: 16px;
  margin-right: 15px;
  transition: 0.15s ease-in-out;
`;

export const Goback = styled.div`
  margin-top: 60px;
  @media (max-width: 990px) {
    margin-top: 40px;
  }
  @media (max-width: 575px) {
    margin-top: 30px;
  }
  a {
    display: inline-flex;
    align-items: center;
    font-size: 15px;
    font-weight: 500;
    color: ${themeGet('colors.textColor', '#292929')};
    transition: 0.15s ease-in-out;
    &:hover {
      color: ${themeGet('colors.primary', '#D10068')};
      ${Icon} {
        background-color: ${themeGet('colors.primary', '#D10068')};
      }
    }
  }
`;
