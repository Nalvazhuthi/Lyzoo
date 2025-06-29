import React, { useEffect, useRef } from 'react';
import { ScrollIcon } from '../assets/svg/exportIcons';
import gsap from 'gsap';

const Home = () => {
  const homeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-statement", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out"
      });
    }, homeRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div className="home-page" id="home" ref={homeRef}>
      <main className="hero-statement">
        <div className="content">
          I build <br />
          custom websites & digital solutions

          <div className="highlight">Tailored to your needs</div>

          <a href="#contact" className="talk-button">
            Let’s discuss your project
          </a>
        </div>

        <div className="scrolling">
          <div className="icon">
            <ScrollIcon />
          </div>
          <div className="scroll">Scroll down to see my work</div>
        </div>
      </main>
    </div>
  );
};

export default Home;
