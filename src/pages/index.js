import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// components
import Hero from "../components/hero"
import Featured from "../components/featured"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Featured />
  </Layout>
)

export default IndexPage
