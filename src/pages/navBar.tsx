import React, { useState, useRef, useEffect } from 'react';
import { LogoIcon } from '../assets/svg/exportIcons';

const NavBar = () => {
  const [hamburderOpen, setHamburderOpen] = useState(false);
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [activeNav, setActiveNav] = useState<string>("#home");



  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        hamburderOpen &&
        !hamburgerRef.current?.contains(event.target as Node) &&
        !menuRef.current?.contains(event.target as Node)
      ) {
        setHamburderOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [hamburderOpen]);

  return (
    <header className="intro-header">
      <div className="identity">
        <LogoIcon />
        <div className="details">
          <div className="name">sleekweb.studio</div>
          <div className="description">Freelance Web Developer | Ecom Sites</div>
        </div>
      </div>


      <div
        className={`hamburger ${hamburderOpen ? 'open' : ''}`}
        onClick={() => setHamburderOpen(!hamburderOpen)}
        ref={hamburgerRef} // 👉 separate ref
      >
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <nav className={`hamburder-navs ${hamburderOpen ? 'open' : ''}`} ref={menuRef}>
        {["#home", "#about", "#services", "#pricing", "#works", "#contact"].map((href) => (
          <a
            key={href}
            className={`nav ${activeNav === href ? 'active' : ''}`}
            href={href}
            onClick={() => {
              setHamburderOpen(false);
              setActiveNav(href);
            }}
          >
            {href.replace("#", "").charAt(0).toUpperCase() + href.slice(2)} {/* Capitalize */}
          </a>
        ))}
      </nav>

      <nav className="navs">
        {["#home", "#about", "#services", "#pricing", "#works", "#contact"].map((href) => (
          <a
            key={href}
            className={`nav ${activeNav === href ? 'active' : ''}`}
            href={href}
            onClick={() => setActiveNav(href)}
          >
            {href.replace("#", "").charAt(0).toUpperCase() + href.slice(2)}
          </a>
        ))}
      </nav>


      <div className="role-location">
        <div className="role">Web Developer</div>
        <div className="location">Based in India</div>
      </div>
    </header>
  );
};

export default NavBar;
