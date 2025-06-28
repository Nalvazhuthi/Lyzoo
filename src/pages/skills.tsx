import React from 'react';

const Skills = () => {
  const skillSets = [
    ["HTML", "CSS", "JavaScript", "Responsive Layouts", "SCSS"],
    ["React", "React Router", "Tailwind CSS", "Framer Motion", "GSAP"],
    ["Three.js", "React Three Fiber", "GLTF", "DRACO Compression", "3D UI", "REST APIs", "Git", "GitHub"]
  ];

  return (
    <section className="skills-page">
      <div className="skills-content">
        {skillSets.map((set, i) => {
          const repeatedSkills = Array(20).fill(set).flat(); // Repeat for infinite look
          const direction = i % 2 === 0 ? 'scroll-left' : 'scroll-right';

          return (
            <div className={`skills-row ${direction}`} key={i}>
              <div className="skills-track">
                {repeatedSkills.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
