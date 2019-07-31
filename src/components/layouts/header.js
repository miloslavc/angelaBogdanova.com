import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "@emotion/styled"

//assets
import Logo from "../../assets/Logo"

//utils
import { primary, primaryBG } from "../../utils"

const Header = ({ siteTitle }) => (
  <HeaderStyled>
    <nav>
      <Link className="logo" to="/">
        <Logo />
      </Link>
      <Link activeClassName="active" to="/works">
        <LinkStyled>works</LinkStyled>
      </Link>
      <Link activeClassName="active" to="/about">
        <LinkStyled>about</LinkStyled>
      </Link>
      <Link activeClassName="active" to="/contact">
        <LinkStyled>contact</LinkStyled>
      </Link>
    </nav>
  </HeaderStyled>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const HeaderStyled = styled.header`
  height: 7vh;
  nav {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    .logo {
      margin-right: auto;
      svg {
        max-height: 40px;
      }
    }
  }
`

const LinkStyled = styled.span`
  font-size: 1.2em;
  text-transform: capitalize;
  color: ${primary};
  position: relative;
  margin: 0 0.7rem;
  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 12px;
    background: ${primaryBG};
    z-index: -1;
    left: -4px;
    bottom: 2px;
    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  &:hover,
  &:focus {
    &:before {
      width: 115%;
    }
  }
`
