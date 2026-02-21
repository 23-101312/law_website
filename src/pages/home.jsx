import React from 'react';
import Header from '../components/header';
import Hero from '../components/hero';
import Smalltitle from '../components/smalltitle';
import image1 from '../assets/image1.png';
import './home.css';
import Statnum from '../components/statnum';


const Home = (props) => {
  return ( 
    <>
     <Header />

     <main>
      <Hero />
      <section className='section_2'>
        <div className='section_2_content'>
          <Smalltitle smalltitletext="// About The Firm" />

        <div className='sec2_right'>
          <h2 className='sec2_title'>Since our inception in 2008, Harrington & Associates has redefined legal service by combining <span className='sec2_greentext'>strategic foresight</span> meticulous analysis, and an unwavering commitment to meaningful results.</h2>

          <div className='sec2_middle'>
            <p>We are not just legal representatives; we are strategic partners. Our firm was founded on the belief that modern legal challenges require more than just textbook knowledge—they demand creativity, adaptability, and a deep understanding of the global business landscape. </p>

            <p>From high-stakes litigation to complex corporate restructuring, we bring clarity to complexity. Our team of 50+ attorneys operates across 15 countries, ensuring that wherever your business goes, our protection follows.</p>
          </div>

          <img src={image1} alt="" />

        </div>
        </div>
      </section>

      <section className='stats_section'>
        <div className='stats_section_content'>
          <Statnum value="95%" label="CLIENT SUCCESS RATE" />
          <Statnum value="1,200+" label="CASES RESOLVED" />
          <Statnum value="50+" label="EXPERT ATTORNEYS" />
          <Statnum value="15+" label="GLOBAL OFFICES" />
        </div>
      </section>
      

     </main>

    </>
   );
}
 
export default Home;