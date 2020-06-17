import React from "react"
import { Link } from "gatsby"
import profilePic from "../images/izzy2.png";

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ProjectList from "../components/projectList"
import resumeImg from "../images/Resume-June2020.png";
import resume from "../data/Resume-June2020.pdf";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{textAlign: "center"}}>
      <img style={{ borderRadius: "100px", width: "125px", height: "125px" }} src={profilePic} />
    <h2>Israel Gonzalez</h2>
      <p>Full Stack Web Developer</p>
        </div>
        Click the image to download a PDF version
        <a href={resume} target="_blank"><img src={resumeImg} /></a>
    

  </Layout>
)

export default IndexPage
