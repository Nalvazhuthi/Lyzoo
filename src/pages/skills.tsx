import React from 'react'

const Skills = () => {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "React Router",
        "Tailwind CSS",
        "SCSS",
        "GSAP",
        "Framer Motion",
        "Responsive Layouts",
        "REST APIs",
        "Git & GitHub",
        "Three.js",
        "React Three Fiber",
        "GLTF / DRACO Compression",
        "Interactive 3D UI"
    ]
    return (
        <div className='skills-page'>
            <div className="skill-wrapper">
                {skills.map((skill, index) => (
                    <div className="skill">{skill}</div>
                ))}
            </div>
            <div className="skill-wrapper">
                {skills.map((skill, index) => (
                    <div className="skill">{skill}</div>
                ))}
            </div>
            <div className="skill-wrapper">
                {skills.map((skill, index) => (
                    <div className="skill">{skill}</div>
                ))}
            </div>
        </div>
    )
}

export default Skills