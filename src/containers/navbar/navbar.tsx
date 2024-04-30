import React, { useState } from "react";
import { Link } from "gatsby";
import { IoIosSearch, IoIosClose } from "react-icons/io";
import { DrawerProvider } from "../../components/drawer/drawer-context";
import SocialProfile from "../../components/social-profile/social-profile";
import Menu from "./menu";
import Drawer from "./drawer";
import SearchContainer from "../search/search";
import HeaderWrapper, {
  HeaderTop,
  TopBarWrapper,
  MobileMenu,
  Logo,
  LogoMobile,
  MenuWrapper,
  NavSearchButton,
  NavSearchWrapper,
  SearchCloseButton,
  NavSearchFromWrapper,
  SocialProfileWrapper,
} from "./navbar.style";
import logoImage from "../../images/logo.png";

import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from "react-icons/io";

import styled from "styled-components";

const Main = styled.div`
  @media (max-width: 768px) {
    
  }
  @media (max-width: 1420px) {
    background-color: black;
    color : white;
    height: 25px;
  }
  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 990px) {
    font-size: 26px;
  }
  @media (max-width: 575px) {
    display: none;
  }
`;

type NavbarProps = {
  className?: string;
};

const MenuItems = [
  {
    label: "COOKSTOVES",
    url: "/cookstoves",
  },
  
  {
    label: "PROMOTIONS",
    url: "/promotions",
  },
  {
    label: "PARTS AND ACCESSORIES",
    url: "/partsandaccessories",
  },
  {
    label: "EXPLORE",
    url: "/explore",
  },
  {
    label: "SUPPORT",
    url: "/support",
  },
];

const SidebarItems = [
  {
    label: "REGISTER",
    url: "/signup",
  },
  
  {
    label: "PROMOTIONS",
    url: "/promotions",
  },
  {
    label: "PARTS AND ACCESSORIES",
    url: "/parts-and-accessories",
  },
  {
    label: "EXPLORE",
    url: "/explore",
  },
  {
    label: "SUPPORT",
    url: "/support",
  },
];


const SocialLinks = [
  {
    icon: <IoLogoFacebook />,
    url: "https://web.facebook.com/profile.php?id=100090746940238",
    tooltip: "",
  },
  {
    icon: <IoLogoInstagram />,
    url: "https://www.instagram.com//",
    tooltip: "",
  },
  {
    icon: <IoLogoTwitter />,
    url: "https://twitter.com/",
    tooltip: "",
  },
];

const Navbar: React.FunctionComponent<NavbarProps> = ({
  className,
  ...props
}) => {
  const [state, setState] = useState({
    toggle: false,
    search: "",
  });

  const toggleHandle = () => {
    setState({
      ...state,
      toggle: !state.toggle,
    });
  };

  // Add all classs to an array
  const addAllClasses = ["header"];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <HeaderWrapper className={addAllClasses.join(" ")} {...props}>
      <HeaderTop>
        <Main>
        
        </Main>
        <TopBarWrapper>
          <Logo>
            <Link to="/">
              <img src={logoImage} alt="logo" />
            </Link>
          </Logo>

          <MobileMenu>
            <DrawerProvider>
              <Drawer items={SidebarItems} logo={logoImage} />
            </DrawerProvider>
          </MobileMenu>
          <LogoMobile>
            <Link to="/">
              <img src={logoImage} alt="logo" />
            </Link>
          </LogoMobile>
          <MenuWrapper>
            <Menu items={MenuItems} />
          </MenuWrapper>

          <NavSearchButton
            type="button"
            aria-label="search"
            onClick={toggleHandle}
          >
            <IoIosSearch size="23px" />
          </NavSearchButton>

          <SocialProfileWrapper>
            <SocialProfile items={SocialLinks} />
          </SocialProfileWrapper>
        </TopBarWrapper>
        <NavSearchWrapper className={state.toggle === true ? "expand" : ""}>
          <NavSearchFromWrapper>
            <SearchContainer />
            <SearchCloseButton
              type="submit"
              aria-label="close"
              onClick={toggleHandle}
            >
              <IoIosClose />
            </SearchCloseButton>
          </NavSearchFromWrapper>
        </NavSearchWrapper>
      </HeaderTop>
    </HeaderWrapper>
  );
};

export default Navbar;
