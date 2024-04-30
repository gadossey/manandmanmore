import React from "react";
import Sticky from "react-stickynode";
import styled, { ThemeProvider } from "styled-components";
import ScrollToTop from "react-scroll-up";
import Navbar from "./navbar/navbar";
import Newsletter from "../components/newsletter/newsletter";
import Footer from "./footer/footer";
import InstagramShowcase from "./instagram-showcase";
import ScrollUpButton from "../components/scroll-up-button/scroll-up-button";
import ResetCss from "../components/reset-css";
import { theme } from "../theme";
import { Link } from "gatsby";
import { useMediaQuery, useTheme } from '@mui/material';
import MobileNavbar from "./navbar/MobileNavbar";

const HeroWrapper = styled.div`
  width: 1385px;
  margin: 0 auto;
  @media (max-width: 1420px) {
    width: 100%;
  }
  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 990px) {
    font-size: 26px;
  }
  @media (max-width: 575px) {
    flex: 0.9;
    height: 100%;
    font-size: 22px;
  }
`;

const Wrapper = styled.div`
  width: 1385px;
  margin: 0 auto;
  @media (max-width: 1420px) {
    width: 100%;
  }
  @media (max-width: 1200px) {
    width: 100%;
    padding: 30px 20px;
  }
  @media (max-width: 990px) {
    font-size: 26px;
  }
  @media (max-width: 575px) {
    flex: 0.9;
    height: 100%;
    font-size: 22px;
  }
`;

const Layout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <>
        <ResetCss />
        <Sticky top={0} innerZ={9999} activeClass="nav-sticky">
         <Navbar />
        </Sticky>
        <HeroWrapper>{children}</HeroWrapper>

        <Wrapper>
          <Footer>
            &copy; {new Date().getFullYear()}
            <a href="https://redq.io/"> RedQ, Inc.</a>
          </Footer>
        </Wrapper>
        <ScrollToTop
          showUnder={300}
          duration={700}
          easing="easeInOutCubic"
          style={{ bottom: 30, right: 20 }}
        >
          <ScrollUpButton />
        </ScrollToTop>
      </>
    </ThemeProvider>
  );
};

export default Layout;
