import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helper/ProjectsList';
import GithubItem from '@material-ui/icons/GitHub'

import "../styles/ProjectDisplay.css"

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id]
  return (
    <div className='project'> 
    <h1>{project.name}</h1>
    <span>Description: {project.explain}</span>
    <img src={project.image}/>
    <p>Compétences utilisé: <b>{project.skills}</b></p>
    {project.link != "" ? 
    <>{
      <a style={{ marginBottom: "3em" }} href={project.link} target='_blank'><GithubItem/></a>
    }</> : <></>}
    </div>
  )
}

export default ProjectDisplay