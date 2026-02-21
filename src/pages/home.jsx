import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../components/header';
import Hero from '../components/hero';
import Smalltitle from '../components/smalltitle';
import image1 from '../assets/image1.png';
import './home.css';
import Statnum from '../components/statnum';
import arrow from '../assets/arrow.svg';
import Legallist from '../components/services';
import Processstep from '../components/processstep';
import Contactform from '../components/contactform';
import Footer from '../components/footer';

gsap.registerPlugin(ScrollTrigger);


const Home = (props) => {
  const section2Ref = useRef(null);
  const statsRef = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);

  useEffect(() => {
    const sectionConfig = [
      { ref: section2Ref, selector: '.section_2_content', x: -80 },
      { ref: section4Ref, selector: '.section_4_content', x: 80 },
      { ref: section5Ref, selector: '.section_5_content', x: -80 },
      { ref: section6Ref, selector: '.sec6_inner', x: 80 },
    ];

    sectionConfig.forEach(({ ref: r, selector, x }) => {
      if (!r.current) return;
      const el = r.current.querySelector(selector) || r.current;
      gsap.fromTo(
        el,
        { opacity: 0, y: 100, x, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: 2,
          ease: 'power2.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: r.current,
            start: 'top 85%',
            end: 'top 15%',
            scrub: 2.5,
          },
        }
      );
    });

    const statItems = statsRef.current?.querySelectorAll('.statnum');
    if (statItems?.length) {
      gsap.fromTo(
        statItems,
        { opacity: 0, y: 80, scale: 0.75, x: -30 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          x: 0,
          duration: 2,
          stagger: 0.25,
          ease: 'power2.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 85%',
            end: 'top 15%',
            scrub: 2.5,
          },
        }
      );
    }

    ScrollTrigger.refresh();
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return ( 
    <>
     <Header />

     <main>
      <Hero />
      <section className='section_2' ref={section2Ref}>
        <div className='section_2_content'>
          <Smalltitle titlestyle="smalltitle1" smalltitletext="// About The Firm" />

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

      <section className='stats_section' ref={statsRef}>
        <div className='stats_section_content'>
          <Statnum value="95%" label="CLIENT SUCCESS RATE" />
          <Statnum value="1,200+" label="CASES RESOLVED" />
          <Statnum value="50+" label="EXPERT ATTORNEYS" />
          <Statnum value="15+" label="GLOBAL OFFICES" />
        </div>
      </section>

      <section className='section_4' ref={section4Ref}>
        <div className='section_4_content'>
          <div className='sec4_title'>
            <div className='sec4_titleleft'>
              <Smalltitle titlestyle="smalltitle1" smalltitletext="// Our Expertise" />
              <h2 className='sec4title'>Comprehensive Legal Services</h2>
            </div>
            <div className='sec4_titleright'>
              <p>View All Practice Areas</p>
              <img src={arrow} alt="" />
            </div>

          </div>
          <Legallist legalnum="01." legaltitle="Corporate Law" legaldesc="Comprehensive guidance for mergers, acquisitions, and corporate governance. We help businesses navigate the complex regulatory landscape with precision. " />
          <Legallist legalnum="02." legaltitle="Intellectual Property" legaldesc="Protection and enforcement of patents, trademarks, copyrights, and trade secrets. We help businesses safeguard their intellectual assets. " />
          <Legallist legalnum="03." legaltitle="Litigation & Defense" legaldesc="Strategic representation in complex civil and criminal litigation. We provide aggressive advocacy for our clients' interests. " />

        <Legallist legalnum="04." legaltitle="Real Estate Law" legaldesc="Guidance on property transactions, zoning issues, and regulatory compliance. We help businesses navigate the complexities of real estate law. " />
          </div>
      </section>

      <section className='section_5' ref={section5Ref}>
        <div className='section_5_content'>
          <div className='sec5_left'>
            <Smalltitle titlestyle="smalltitle1" smalltitletext="// Our Approach" />
            <h2 className='sec5_title'>A Methodical Path to Resolution </h2>
            <p>We believe that the best legal outcomes are the result of careful planning and strategic foresight. Our four-step process ensures nothing is overlooked. </p>
          </div>

          <div className='sec5_right'>
            <Processstep processnum="01" processtitle="Initial Consultation" processdesc="We begin with a confidential discussion to understand your unique situation, objectives, and challenges." />
            <Processstep processnum="02" processtitle="Strategic Analysis" processdesc="Our team conducts a thorough review of the legal landscape, identifying risks and opportunities tailored to your case." />
            <Processstep processnum="03" processtitle="Precise Execution" processdesc="We implement a custom legal strategy with rigorous attention to detail, keeping you informed at every stage." />
            <Processstep processnum="04" processtitle="Continuous Support" processdesc="Beyond the immediate resolution, we provide ongoing advisory to ensure  success and compliance." />
          </div>
        </div>
      </section>

      <section className='section_6' ref={section6Ref}>
      <div className="sec6_inner">
        <div className="sec6_left">
           <Smalltitle titlestyle="smalltitle2" smalltitletext="// CONTACT US" />
          <h2 className="consult_title">
            Ready to Secure <br />
            <span className="consult_titleitalic">Your Future?</span>
          </h2>

          <p className="consult_desc">
            Schedule a confidential consultation with our senior partners. We
            review every inquiry personally and respond within 24 hours.
          </p>

          <div className="consult_info">
            <div className="consult_inforow">
              <span className="consult_infoline" />
              <div className="consult_infotext">
                <div className="consult_infolabel">New York Office</div>
                <div className="consult_infovalue">
                  123 Legal Avenue, Suite 400, NY 10001
                </div>
              </div>
            </div>

            <div className="consult_inforow">
              <span className="consult_infoline" />
              <div className="consult_infotext">
                <div className="consult_infolabel">Direct Line</div>
                <div className="consult_infovalue">+1 (555) 123-4567</div>
              </div>
            </div>

            <div className="consult_inforow">
              <span className="consult_infoline" />
              <div className="consult_infotext">
                <div className="consult_infolabel">Email</div>
                <div className="consult_infovalue">hello@harrington.law</div>
              </div>
            </div>
          </div>
        </div>

        <div className='sec6_right'>
          <Contactform />
        </div>


      </div>
      </section>
      

     </main>

     <Footer />

    </>
   );
}
 
export default Home;