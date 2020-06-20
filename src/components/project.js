import React from "react"
import Image from "./image"
import GitHubButton from "react-github-btn"

const Project = ({ thumb, title, path, source, description }) => {
  return (
    <li className="projectItem" style={{ display: "table-row" }}>
      <div
        className="projectHeader"
        style={{ display: "table-cell", verticalAlign: "top" }}
      >
        <img
          className="projectThumb"
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "10px",
            marginRight: "16px",
          }}
          src={thumb}
        />
      </div>
      <div
        className="projectDetail"
        style={{ display: "table-cell", padding: "0 0 40px" }}
      >
        <div className="projectTitle" style={{ marginBottom: "10px" }}>
          <h3><a href={path} style={{ color: "white", marginRight: "20px" }}>{title}</a>
            <span style={{verticalAlign: "text-bottom"}}>
          <GitHubButton
            href={source}
            data-color-scheme="no-preference: dark; light: dark; dark: dark;"
              aria-label={`Star ${title} on GitHub`}
              
          >
              Star
          </GitHubButton></span>
            </h3>
        </div>
        <div>
          
        </div>
        {/* <div>
          <GitHubButton
            href={source}
            data-color-scheme="no-preference: dark; light: dark; dark: dark;"
            aria-label={`Star ${title} on GitHub`}
          >
            Star
          </GitHubButton>
        </div> */}
        <p className="projectSummary">{description}</p>
      </div>
    </li>
  )
}

export default Project
