import React from 'react'
import GlobalFonts from '../fonts/fonts'
import GlobalStyle from '../components/GlobalStyle'
import styled from 'styled-components'
import { Link } from 'gatsby'

const PageWrapper = styled.div`
  width: 100vw;
  height: auto;
  background-color: #FFF;
  color: #1D1D1B;
  text-transform: uppercase;
`

const Nav = styled.div`
  width: 100%;
  height: 100%;
  text-transform: uppercase;
  margin-bottom: 60px;
`

const Title = styled.div`
  font-family: 'Trade-Gothic';
  font-size: 2rem;
  margin: 0 auto;
`

const Subtitle = styled.div`
  font-family: 'Trade-Gothic';
  font-size: 1rem;
  color: #6BFF4F;
  text-align: right;
`

const StyledNavItems = styled(Link)`
  font-family: 'Trade-Gothic';
  font-size: 2rem;
  color: #1D1D1B;
  text-decoration: none;
  box-shadow: none;
  &.active {
    text-decoration: underline;
  }
`

const StyledNav = styled(Link)`
  font-family: 'Trade-Gothic';
  font-size: 2rem;
  color: #1D1D1B;
  text-decoration: none;
  box-shadow: none;
`

const NavBlock = styled.div`
  width: fit-content;
  margin: 0 auto;
`

const Footer = styled.footer`
  background-color: #1D1D1B;
  height: 300px;
  color: #FFF;
  font-family: 'Trade-Gothic';
  font-size: 2rem;
  text-transform: uppercase;
`

export default ({ children }) => (
      <div className="layout">
        <GlobalFonts />
        <GlobalStyle />
        <Nav>
          <StyledNavItems
            activeClassName="active" 
            to="/exhibitions">Exhibitions
          </StyledNavItems>
          <NavBlock>
            <StyledNav to="/">Von Bartha</StyledNav>
            <Subtitle>EST. 1970</Subtitle>
          </NavBlock>
        </Nav>
        <div className="pageContent">{children}</div>
        <Footer>This is the footer</Footer>
      </div>
)
