import React from "react"
import Project from "./project";
import projects from "../data/projects"

// TODO: Map over data to list projects

const Projects = () => {
    return <div>
        <ul style={{display: "table"}}>
            {projects.map((props) => <Project {...props} />)}
      </ul>
  </div>
}
export default Projects;
