import React from 'react';
import Logo from './logo';
import NavLink from './navlink';
import Button from './button';
import './header.css';

const Header = () => {
  return (
<header>
<nav>
  <Logo />
  <ul>
    <NavLink navstyle="navstyle1" href="#home" text="Home" />
    <NavLink navstyle="navstyle2" href="#about" text="About Us" />
    <NavLink navstyle="navstyle2" href="#services" text="Services" />
    <NavLink navstyle="navstyle2" href="#contact" text="Contact" />
  </ul>
  <Button btnstyle="btnstyle1" btn=" CONSULTATIONS" />
</nav>
</header>


    );
}
 
export default Header;
