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
    <div style={{textAlign: "center", marginBottom: "65px"}}>
      <img style={{ borderRadius: "10px", width: "125px", height: "125px" }} src={profilePic} />
    
      <h3>Full Stack Web Developer</h3>
      <p style={{textAlign: "justify", fontSize: "0.75rem"}}>I am passionate about making the world a better place.  I want to help organizations accomplish critical goals like alleviating food insecurity and diseases in developing countries. I am looking for ways to participate either directly or indirectly through charitable giving.</p>
      </div>
    <ProjectList />
    

  </Layout>
)

export default IndexPage
