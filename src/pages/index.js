import React from "react"
import { Link } from "gatsby"
import "../styles/index.scss"

import Layout from "../components/layout"
import HeroImage from "../components/images/HeroImage"
import LogoImage from "../components/images/LogoImage"
import SEO from "../components/seo"

import Episode from "../components/Episode/episode"


const IndexPage = () => (
  <Layout>
    <div className="hero">
      <SEO title="Home" />
      <div className="hero-background">
        <div className="hero-gradient" />
        <HeroImage />
      </div>
      <h3 className="hero-tagline">A podcast about the uphill climb to be your best self</h3>
      <p className="hosted">Hosted by Ryan Luu & Landon Galloway</p>
    </div>

    <div className="intro-box">
      <div className="intro-inner">
        <div className="intro-image">
          <LogoImage />
        </div>
        <p className="intro-text">This is a podcast designed to uplift listeners on the uphill path of life that we all must endure. We are seeking to help individuals reach their potential, and to promote progress. Throughout this journey we will touch on past experiences, personal struggles, and our approaches to life & what that means to us. Physically, we look to challenge ourselves with rigorous exercise routines; mentally, we are looking to grow and expand our base of knowledge; spiritually, we are looking for enlightenment and the vitality surrounding meaningful relationships.</p>
      </div>
    </div>

    <div className="episodes-box">
      <div className="episodes-inner">
        <Episode
          description="In our inaugural episode we explore the..."
          link="color=192BC2&episode=1&feed=https://anchor.fm/s/34c65550/podcast/rss"
          spotify="7GYCP4jwy6MTQ2yA2qzZrv"
          anchor="1-Establishing-Consistency-Through-Routine-ekmrta"
        />

        <Episode
          description="For our second episode..."
          link="color=ED6A5A&episode=2&feed=https://anchor.fm/s/34c65550/podcast/rss"
          spotify="5OBDH2mbuziswdWNv6AjDl"
          anchor="2-Experiencing-failure-on-the-way-to-success-ekvgq7"
        />
      </div>
    </div>
  </Layout>
)

export default IndexPage
