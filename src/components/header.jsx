import React, { useState } from 'react';
import Logo from './logo';
import NavLink from './navlink';
import Button from './button';
import './header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <nav>
        <Logo />

        <ul className={`nav_links ${menuOpen ? 'nav_links--open' : ''}`}>
          <NavLink navstyle="navstyle1" href="#home" text="Home" onClick={closeMenu} />
          <NavLink navstyle="navstyle2" href="#about" text="About Us" onClick={closeMenu} />
          <NavLink navstyle="navstyle2" href="#services" text="Services" onClick={closeMenu} />
          <NavLink navstyle="navstyle2" href="#contact" text="Contact" onClick={closeMenu} />
          <li className="nav_btn_mobile">
            <Button btnstyle="btnstyle1" btn="CONSULTATIONS" />
          </li>
        </ul>

        <Button btnstyle="btnstyle1" btn=" CONSULTATIONS" />

        <button
          className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {menuOpen && <div className="nav_overlay" onClick={closeMenu} />}
    </header>
  );
};

export default Header;
