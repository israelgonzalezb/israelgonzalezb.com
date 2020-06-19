import React from "react"
import Image from "./image"

const Project = ({ thumb, title, path, source, description }) => {
  return (
    <li className="projectItem" style={{display: "table-row"}}>
      <div className="projectHeader" style={{display: "table-cell", verticalAlign: "top"}}>
      <img className="projectThumb" style={{ width: "72px", height: "72px", borderRadius: "10px", marginRight: "16px" }} src={thumb} />
      </div>
          <div className="projectDetail" style={{display: "table-cell", padding: "0 0 40px"}}>
        <div className="projectTitle" style={{marginBottom: "10px"}}>
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
