import React from 'react';
import './navlink.css';

const NavLink = (props) => {
  return (
    <li>
      <a className={props.navstyle} href={props.href}>{props.text}</a>
    </li>
  );
}
 
export default NavLink;