import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

interface IconLinkProps {
  to: string;
  title: string;
  icon: React.ReactNode;
}

interface IconClickProps {
  onClick: () => void;
  title: string;
  icon: React.ReactNode;
}

type IconProps = IconLinkProps | IconClickProps;


const IconWrapper = styled(Link)<{ onClick?: () => void }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  transition: transform 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    opacity: 0;
    transition: opacity 0.2s ease;
    pointer-events: none;
  }

  &:active::before {
    opacity: 1;
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  border: 0 solid;
  box-sizing: border-box;
  border-radius: 9999px;
  border-width: 1px;
  font-size: 50px;
  width: 86px;
  height: 86px;
  margin: 20px;
  justify-content: center;
  align-items: center;
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
`;

const IconTitle = styled.div`
  text-align: center;
`;

const Icon: React.FC<IconProps> = (props) => {
  if ('to' in props) {
    const { to, title, icon } = props;
    return (
      <IconWrapper to={to}>
        <LogoSection>
          {icon}
        </LogoSection>
        <IconTitle>{title}</IconTitle>
      </IconWrapper>
    );
  } else if ('onClick' in props) {
    const { onClick, title, icon } = props;
    return (
      <IconWrapper as="div" onClick={onClick}>
        <LogoSection>
          {icon}
        </LogoSection>
        <IconTitle>{title}</IconTitle>
      </IconWrapper>
    );
  }

  return null;
};

export default Icon;
