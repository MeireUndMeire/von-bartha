import React, { useState } from 'react'
import GlobalFonts from '../fonts/fonts'
import GlobalStyle from '../components/GlobalStyle'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import Footer from '../components/Footer'
import Logo from '../components/Icons/Logo'




const NavExtended = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  width: 100vw;
  height: 5.297vw;
  margin-top: -6.297vw;
  transition: .2s;
  background-color: #D8D8D8;
  padding: 1vw 1vw 0 0.7vw;
  &.openNav {
    margin-top: 0;
  }
  .navExtendedWrapper {
    width: fit-content;
    &:last-child {
      padding-right: 2vw;
    }
  } 
`

const Subtitle = styled.div`
  font-family: 'Trade-Gothic';
  font-size: 1rem;
  color: #6BFF4F;
  text-align: right;
`

const StyledNavItems = styled(Link)`
  display: inline-block;
  :not(:first-child) {
    margin-left: 20px;
  }
  &.active {
    text-decoration: underline;
  }
`

const NavHome = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #FFF;
  padding: 1rem 0;
  width: 98vw !important;
  padding: 1vw;
  #nav-burger span:nth-child(1) {
    top: 0px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  #nav-burger span:nth-child(2) {
    top: 15px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  #nav-burger.open span:nth-child(1) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    top: -6px;
  }


  #nav-burger.open span:nth-child(2) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: 15px;
  }

  #nav-burger {
    width: 30px;
    height: 40px;
    margin-top: 2px;
    @media only screen and (max-width: 767px) {
      height: 16px;
      margin-top: 7px;
    }
    position: relative;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
    span {
      display: block;
      position: absolute;
      height: 5px;
      width: 100%;
      background: #1D1D1B;
      opacity: 1;
      left: 0;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: .25s ease-in-out;
      -moz-transition: .25s ease-in-out;
      -o-transition: .25s ease-in-out;
      transition: .25s ease-in-out;
    }
  }
  .home {
    width: 46vw;
    height: 4vw;
  }

`

const PageContent = styled.div`
  padding-top: 20vw;
  @media only screen and (max-width: 767px) {
    padding-top: 13vw;
  }
`

const FooterWrapper = styled.footer`
  background-color: #1D1D1B;
  color: #FFF;
  font-family: 'Trade-Gothic';
  font-size: 2rem;
  text-transform: uppercase;
`

const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 27;
  transition: all 500ms ease-in-out;
`

export default ({ children }) => {

    const [navOpen, setNav] = useState(false);
    // const [show, setHideOnScroll] = useState(true)

    function toggleNav() {
      if (!navOpen) setNav(true)
      else setNav(false)
    }

    // useScrollPosition(({ prevPos, currPos }) => {
    //   const isShow = currPos.y > prevPos.y
    //   if (isShow !== show) setHideOnScroll(isShow)
    // })

    return (
    <div>
      <div className="layout">
        <GlobalFonts />
        <GlobalStyle />
        <NavWrapper className="navWrapper">
          <NavExtended className="fullWidth removeScrollbar" style={{marginTop: navOpen ? '0' : '-6.297vw'}}>
            <div className="navExtendedWrapper">
              {/* exhibitions */}
              <StyledNavItems
                activeClassName="active" 
                to="/exhibitions"
                className="navLink"><h1>Exhibitions</h1>
              </StyledNavItems>

              {/* artists */}
              <StyledNavItems
                activeClassName="active" 
                to="/artists"
                className="navLink"><h1>Artists</h1>
              </StyledNavItems>

              {/* Publications */}
              <StyledNavItems
                activeClassName="active" 
                to="/publications"
                className="navLink"><h1>Publications</h1>
              </StyledNavItems>

              {/* Agenda */}
              <StyledNavItems
                activeClassName="active" 
                to="/agenda"
                className="navLink"><h1>Agenda</h1>
              </StyledNavItems>

              {/* Contact */}
              <StyledNavItems
                activeClassName="active" 
                to="/contact"
                className="navLink"><h1>Contact</h1>
              </StyledNavItems>

            </div>
          </NavExtended>

          <NavHome className="fullWidth">
            <div id="nav-burger" onClick={toggleNav} className={navOpen ? "open" : ""}>
              <span></span>
              <span></span>
            </div>
            <div className="home">
              <Link to="/">
                <Logo />
              </Link>
              {/* <Subtitle>EST. 1970</Subtitle> */}
            </div>
            <div></div>
          </NavHome>
        </NavWrapper>
        <PageContent>{children}</PageContent>
      </div>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </div>
    )
}
