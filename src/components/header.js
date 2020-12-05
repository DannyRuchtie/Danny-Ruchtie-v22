import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <nav className={headerStyles.nav}>
      <h1 className={headerStyles.h1}>
        <Link to="/">Danny Ruchtie</Link>
      </h1>

      <span className={headerStyles.subtitle}>Designer / Photographer</span>

      <Link to="/" activeClassName={headerStyles.active}>
        Work
      </Link>
      <Link to="/play" activeClassName={headerStyles.active}>
        Play
      </Link>
      <Link to="/blog" activeClassName={headerStyles.active}>
        Blog
      </Link>
      <Link to="/about" activeClassName={headerStyles.active}>
        About
      </Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
