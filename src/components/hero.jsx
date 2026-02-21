import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Button from './button';
import './hero.css';
import bglight from '../assets/bg-light.png';

const Hero = (props) => {
  const contentRef = useRef(null);
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(labelRef.current, {
        opacity: 0,
        x: -40,
        y: 20,
        duration: 1.2,
        ease: 'power2.out',
        delay: 0.2,
        overwrite: 'auto',
      });
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 60,
        scale: 0.96,
        duration: 1.4,
        ease: 'power2.out',
        delay: 0.4,
        overwrite: 'auto',
      });
      gsap.from(descRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power2.out',
        delay: 0.65,
        overwrite: 'auto',
      });
      gsap.from(buttonsRef.current, {
        opacity: 0,
        y: 30,
        duration: 1.1,
        ease: 'power2.out',
        delay: 0.9,
        overwrite: 'auto',
      });
      gsap.from(statsRef.current?.children || [], {
        opacity: 0,
        x: 50,
        y: 40,
        scale: 0.9,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power2.out',
        delay: 0.6,
        overwrite: 'auto',
      });
    }, contentRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero_bg" style={{ backgroundImage: `url(${bglight})` }}></div>

      <div className="hero_content" ref={contentRef}>

        <div className='hero_left'>
          <p className="hero_label" ref={labelRef}>Est. 2008</p> 

          <h1 ref={titleRef}>
            Precision Advocacy for <span className="hero_highlight">Modern</span> Legal Challenges
          </h1>

          <p className="hero_description" ref={descRef}>We provide strategic counsel and rigorous representation for complex corporate, intellectual property, and litigation matters.          </p>

          <div className="hero_buttons" ref={buttonsRef}>
            <Button btnstyle="btnstyle2" btn="FIND A LAWYER" href="#contact" />
            <Button btnstyle="btnstyle3" btn="OUR EXPERTISE" href="#services" />
          </div>
        </div>

        <div className='hero_right' ref={statsRef}>
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
