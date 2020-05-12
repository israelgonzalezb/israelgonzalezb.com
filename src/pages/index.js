import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ProjectList from "../components/projectList"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <img src="https://picsum.photos/100/100" />
    <h2>Israel Gonzalez</h2>
    <p>Full Stack Web Developer</p>
    <p>Now I'll go build something great.</p>
    <ProjectList />
  </Layout>
)

export default IndexPage
