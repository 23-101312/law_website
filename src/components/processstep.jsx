import React from 'react';
import './processstep.css';

const Processstep = (props) => {
  return ( 
  <div className="processstep">
  <span className="processstep_number">{props.processnum}</span>

  <div className="processstep_content">
    <h3 className="processstep_title">{props.processtitle}</h3>
    <p className="processstep_text">{props.processdesc}
    </p>
  </div>
</div>

   );
}
 
export default Processstep;