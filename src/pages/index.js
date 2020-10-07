import React from "react"
import { Link } from "gatsby"
import "../styles/index.scss"

import Layout from "../components/layout"
import HeroImage from "../components/images/HeroImage"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <div className="hero">
      <SEO title="Home" />
      <div className="hero-background">
        <div className="hero-gradient" />
        <HeroImage />
      </div>
      <h3 className="hero-tagline">A podcast about the uphill pursuit to be your best self</h3>
      <p className="hosted">Hosted by Ryan Luu & Landon Galloway</p>
    </div>
  </Layout>
)

export default IndexPage
