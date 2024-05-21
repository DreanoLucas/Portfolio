import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helper/ProjectsList";

import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <span>Description: {project.explain}</span>
      <img src={project.image} alt={project.name} />
      <p>
        Compétences et outils utilisés: <b>{project.skills.join(", ")}</b>
      </p>
      {project.link !== "" ? (
        <>
          <p>Cliquez ici pour en savoir plus:</p>
          {
            <a
              style={{ marginBottom: "3em" }}
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              {React.createElement(project.linktype)}
            </a>
          }
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ProjectDisplay;
