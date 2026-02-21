import React from 'react';
import './services.css';
import arrow from '../assets/arrow.svg';

const Legallist = (props) => {
  return (
    <div className='legaldiv'>
      <p className='legalnum'>{props.legalnum}</p>
      <h2 className='legaltitle'>{props.legaltitle}</h2>
      <p className='legaldesc'>{props.legaldesc}</p>

      <div className='arrow'>
        <img src={arrow} alt="" />
      </div>
    </div>

    );
}
 
export default Legallist;