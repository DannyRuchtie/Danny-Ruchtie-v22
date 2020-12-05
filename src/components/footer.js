import PropTypes from "prop-types"
import React from "react"
import footerStyles from "./footer.module.css"

const Footer = ({ siteTitle }) => (
  <footer className={footerStyles.footer}>
    <span className={footerStyles.copyright}>
      © 2001-2020 All Rights Reserved.
    </span>

    <a taget="_blank" href="http://twitter.com/druchtie">
      Twitter
    </a>
    <a taget="_blank" href="http://instagra.com/druchtie">
      Instagram
    </a>
    <a taget="_blank" href="http://github.com/druchtie">
      Github
    </a>
    <a taget="_blank" href="mail:druchtie@gmail.com">
      Contact
    </a>
  </footer>
)

export default Footer
