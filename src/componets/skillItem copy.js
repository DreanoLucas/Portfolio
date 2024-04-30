import React, { useState } from 'react';

function SkillItem({ image, name, description, skills }) {
  const [hovered, setHovered] = useState(false);
  const [currentDescription, setCurrentDescription] = useState('');

  const handleMouseEnter = () => {
    setHovered(true);
    setCurrentDescription(name + " : " + description);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setCurrentDescription('');
  };

  return (
    <div className="skillItem">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bgImage"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {skills !== undefined && (
        <div className='subSkill'>
          {skills.map((skill, index) => (
            <SkillItem key={index} image={skill.image} name={skill.name} description={skill.description}/>
          ))}
        </div>
      )}
    </div>
  );
}

export default SkillItem;
