import React from 'react';
import './smalltitle.css';

const Smalltitle = (props) => {
  return (

    <h2 className={props.titlestyle}>{props.smalltitletext}</h2>
    );
}
 
export default Smalltitle;