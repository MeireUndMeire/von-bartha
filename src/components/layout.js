import React from 'react'
import GlobalFonts from '../fonts/fonts'
import GlobalStyle from '../components/GlobalStyle'
import styled from 'styled-components'
import { Link } from 'gatsby'

const NavExtended = styled.div`
  width: 100%;
  height: 100%;
`

const Subtitle = styled.div`
  font-family: 'Trade-Gothic';
  font-size: 1rem;
  color: #6BFF4F;
  text-align: right;
`

const StyledNavItems = styled(Link)`
  :not(:first-child) {
    margin-left: 20px;
  }
  &.active {
    text-decoration: underline;
  }
`

const NavHome= styled.div`
  display: flex;
  justify-content: space-between;
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
    <div>
      <div className="layout">
        <GlobalFonts />
        <GlobalStyle />
        <NavExtended>
          {/* exhibitions */}
          <StyledNavItems
            activeClassName="active" 
            to="/exhibitions"
            className="navLink">Exhibitions
          </StyledNavItems>

          {/* artists */}
          <StyledNavItems
            activeClassName="active" 
            to="/artists"
            className="navLink">Artists
          </StyledNavItems>
        </NavExtended>

        <NavHome>
          <div></div>
          <div className="home">
            <Link to="/" className="navLink home">Von Bartha</Link>
            <Subtitle>EST. 1970</Subtitle>
          </div>
          <div></div>
        </NavHome>
        <div className="pageContent">{children}</div>
      </div>
      <Footer>This is the footer</Footer>
    </div>
)
