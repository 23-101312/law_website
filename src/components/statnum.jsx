import React from 'react';
import './statnum.css';

const Statnum = (props) => {
  return ( 
    <div className="statnum">
      <div className="statnum_value">{props.value}</div>
      <div className="statnum_label">{props.label}</div>
    </div>

   );
}
 
export default Statnum;