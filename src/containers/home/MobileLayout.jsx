import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const MobileLayout = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <Wrapper>
      <Header>
        <Navigation>
          <MenuButton onClick={toggleMenu}>Menu</MenuButton>
          {isMenuOpen && (
            <Menu>
              <MenuItem>
                <StyledLink to="/" activeClassName="active" onClick={closeMenu}>
                  Home
                </StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink to="/about" activeClassName="active" onClick={closeMenu}>
                  About
                </StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink to="/contact" activeClassName="active" onClick={closeMenu}>
                  Contact
                </StyledLink>
              </MenuItem>
            </Menu>
          )}
        </Navigation>
      </Header>

      <Main>{children}</Main>

      {isMenuOpen && <Overlay onClick={closeMenu} />}

      {isMenuOpen && (
        <CloseButton onClick={closeMenu}>
          Close
        </CloseButton>
      )}

      

      <Footer>{/* Footer content */}</Footer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
position: relative;
  margin: 0 auto;
  padding: 120px 0 0;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media (min-width: 990px) {
    width: 900px;
  }
  @media (min-width: 1200px) {
    width: 1050px;
  }
  @media (min-width: 1400px) {
    width: 1170px;
  }
  @media (max-width: 990px) {
    padding: 80px 45px 0 45px;
  }
  @media (max-width: 575px) {
    padding: 60px 25px 0 25px;
  }



;`

const Header = styled.header`
  /* Styles for the header */
`

const Navigation = styled.nav`
  /* Styles for the navigation */
`

const MenuButton = styled.button`
  /* Styles for the menu button */
`

const Menu = styled.ul`
  /* Styles for the menu */
`

const MenuItem = styled.li`
  /* Styles for the menu item */
`

const StyledLink = styled(Link)`
  /* Styles for the link */
`

const Main = styled.main`
  /* Styles for the main content */
`

const Overlay = styled.div`
  /* Styles for the overlay */
`

const CloseButton = styled.button`
  /* Styles for the close button */
`

const BackButton = styled.button`
  /* Styles for the back button */
`

const Footer = styled.footer`
  /* Styles for the footer */
`

export default MobileLayout
