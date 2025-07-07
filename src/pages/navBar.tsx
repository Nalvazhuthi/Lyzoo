import React, { useState, useRef, useEffect } from 'react';

const NavBar = () => {
  const [hamburderOpen, setHamburderOpen] = useState(false);
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

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
        <a className="nav" href="#home" onClick={() => setHamburderOpen(false)}>Home</a>
        <a className="nav" href="#about" onClick={() => setHamburderOpen(false)}>About</a>
        <a className="nav" href="#works" onClick={() => setHamburderOpen(false)}>Works</a>
        <a className="nav" href="#services" onClick={() => setHamburderOpen(false)}>Services</a>
        <a className="nav" href="#contact" onClick={() => setHamburderOpen(false)}>Contact</a>
      </nav>

      <nav className="navs">
        <a className="nav" href="#home">Home</a>
        <a className="nav" href="#about">About</a>
        <a className="nav" href="#services">Services</a>
        <a className="nav" href="#pricing">Pricing</a>
        <a className="nav" href="#works">Works</a>
        <a className="nav" href="#reviews">Reviews</a>
        <a className="nav" href="#contact">Contact</a>
      </nav>

      <div className="role-location">
        <div className="role">UI/UX Developer</div>
        <div className="location">Based in India</div>
      </div>
    </header>
  );
};

export default NavBar;
