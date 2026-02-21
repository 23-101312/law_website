import React from 'react';
import Button from './button';
import './hero.css';
import bglight from '../assets/bg-light.png';

const Hero = (props) => {
  return (
    <section className="hero" id="home">
      <div className="hero_bg" style={{ backgroundImage: `url(${bglight})` }}></div>

      <div className="hero_content">

        <div className='hero_left'>
          <p className="hero_label">Est. 2008</p> 

          <h1>
            Precision Advocacy for <span className="hero_highlight">Modern</span> Legal Challenges
          </h1>

          <p className="hero_description">We provide strategic counsel and rigorous representation for complex corporate, intellectual property, and litigation matters.</p>

          <div className="hero_buttons">
            <Button btnstyle="btnstyle2" btn="FIND A LAWYER" href="#contact" />
            <Button btnstyle="btnstyle3" btn="OUR EXPERTISE" href="#services" />
          </div>
        </div>

        <div className='hero_right'>
            <div className="herostat">
              <div className="herostat_value">95%</div>
              <div className="herostat_label">CLIENT SUCCESS RATE</div>
            </div>

            <div className="herostat">
              <div className="herostat_value">1,200+</div>
              <div className="herostat_label">CASES RESOLVED</div>
            </div>
          </div>
        </div>

    </section>
  );
};

export default Hero;
