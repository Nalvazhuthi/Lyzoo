import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Skills = () => {
  const skillSets = [
    ["HTML", "CSS", "JavaScript", "Responsive Layouts", "SCSS"],
    ["React", "React Router", "Tailwind CSS", "Framer Motion", "GSAP"],
    ["Three.js", "React Three Fiber", "GLTF", "DRACO Compression", "3D UI", "REST APIs", "Git", "GitHub"]
  ];

  const containerRef = useRef(null);
  const rowRefs = useRef<HTMLDivElement[]>([]);

  
  useGSAP(() => {
    rowRefs.current.forEach((row, i) => {
      const direction = i % 2 === 0 ? 1 : -1;
      const duration = 20 - i * 3;

      gsap.to(row, {
        xPercent: direction * -100,
        duration,
        ease: "none",
        repeat: -1
      });
    });
  }, { scope: containerRef });

  return (
    <section className="skills-page" ref={containerRef}>
      <div className="skills-content">
        {skillSets.map((set, i) => (
          <div
            key={i}
            className="skills-row"
            ref={(el) => {
              if (el) rowRefs.current[i] = el;
            }}
            style={{
              display: 'flex',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            }}
          >
            {[...set, ...set].map((skill, index) => (
              <div
                key={index}
                className="skill-item"
                style={{
                  flex: '0 0 auto',
                  padding: '0.5rem 1rem',
                  fontSize: '1rem',
                  whiteSpace: 'nowrap'
                }}
              >
                <span>{skill}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
