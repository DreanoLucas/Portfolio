import React from 'react'
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${id}`);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <div className="projectItem" onClick={handleClick}>
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h2>{name}</h2>
    </div>
  );
}

export default ProjectItem;
