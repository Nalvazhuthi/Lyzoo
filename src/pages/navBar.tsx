import React, { useState, useRef, useEffect } from 'react';

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
        <div className="first-name">Nanni</div>
        <div className="last-name">Nalvazhuthi</div>
      </div>

      <div className="mobile-logo">
        <div className="last-name">Nalvazhuthi</div>
        <div className="role">UI/UX Developer</div>
      </div>

      <div
        className={`hamburder ${hamburderOpen ? 'open' : ''}`}
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
        <div className="role">UI/UX Developer</div>
        <div className="location">Based in India</div>
      </div>
    </header>
  );
};

export default NavBar;
