import React from "react"
import { Link } from "gatsby"
import profilePic from "../images/izzy2.png";

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ProjectList from "../components/projectList"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{textAlign: "center"}}>
      <img style={{ borderRadius: "100px", width: "125px", height: "125px" }} src={profilePic} />
    <h2>Israel Gonzalez</h2>
      <p>Full Stack Web Developer</p>
      </div>
    <ProjectList />
    

  </Layout>
)

export default IndexPage
