import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Skills = () => {
    const skillSets = [
        ["HTML", "CSS", "JavaScript", "Responsive Layouts", "SCSS"],
        ["React", "React Router", "Tailwind CSS", "Framer Motion", "GSAP"],
        ["Three.js", "React Three Fiber", "GLTF", "DRACO Compression", "3D UI", "REST APIs", "Git", "GitHub"]
    ];

    const rowRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        rowRefs.current.forEach((row, i) => {
            const items = row.children;

            if (!items.length) return;

            const rowWidth = row.getBoundingClientRect().width;
            const itemWidth = (items[0] as HTMLElement).getBoundingClientRect().width;
            const initialOffset = ((2 * itemWidth) / rowWidth) * 100 * -1;

            gsap.set(row, {
                xPercent: initialOffset
            });

            const duration = 5 * (i + 1);

            gsap.to(row, {
                ease: "none",
                duration,
                xPercent: 0,
                repeat: -1
            });
        });
    }, []);

    return (
        <section className="skills-page">
            <div className="skills-content">
                {skillSets.map((set, i) => (
                    <div
                        key={i}
                        className="skills-row"
                    >
                        {[...set, ...set].map((skill, index) => (
                            <div key={index} className='skill-item'>
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
