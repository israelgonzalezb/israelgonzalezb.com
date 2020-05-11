import React from "react"
import Image from "./image"

const Project = ({ thumb, title, path, source, description }) => {
  return (
    <li className="projectItem">
      <div className="projectHeader">
        <div className="projectThumb" style={{ width: "72px", height: "72px" }}>
          {thumb}
        </div>
      </div>
      <div className="projectDetail">
        <div className="projectTitle">
          <h3>{title}</h3>
        </div>
        <div>
          <a href={path}>Check it out</a>
        </div>
        <div>
          <a href={source}>Repo</a>
        </div>
        <p className="projectSummary">{description}</p>
      </div>
    </li>
  )
}

export default Project
