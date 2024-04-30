import React from 'react'

function SkillItem({ image, name, description, skills, setCurrentDescription  }) { 

  return (
    <div className="skillItem" >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" 
        onMouseEnter={() => setCurrentDescription(name + " : " + description)}
        onMouseLeave={() => setCurrentDescription("")}>
        <div className='bgColor'/>
      </div>

      {skills !== undefined && (
        <div className='subSkill'>
          {skills.map((skill) => (
            <SkillItem image={skill.image} name={skill.name} description={skill.description} setCurrentDescription={setCurrentDescription} />
          ))} 
        </div>)}
    </div>
  );
}

export default SkillItem;