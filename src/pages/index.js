import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div classname="grid">
      <Link to="/">
        <Image classname="hero" />
      </Link>
    </div>
  </Layout>
)

export default IndexPage
