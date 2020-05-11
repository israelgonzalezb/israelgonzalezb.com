import React from "react"
import Project from "./project";
import projects from "../data/projects"

// TODO: Map over data to lilst projects

const Projects = () => {
    return <div>
        <ul>
            {projects.map((props) => <Project {...props} />)}
      </ul>
  </div>
}
export default Projects;
