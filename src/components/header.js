import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/index.scss"
import LogoImage from "./images/LogoImage"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="logo">
      <h1 className="logo-text">{siteTitle}</h1>
      <div className="logo-image">
        <LogoImage />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
