import React from 'react';
import './button.css';

const Button = (props) => {
  return ( 
    <button className={props.btnstyle}>
     {props.btn}
    </button>

   );
}
 
export default Button;