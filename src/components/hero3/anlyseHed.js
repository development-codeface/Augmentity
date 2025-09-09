import React from 'react';
import { Link } from 'react-router-dom'
import { Fade } from "react-awesome-reveal";
import bgImg  from '../../images/video/6.gif'
import bgImg2  from '../../images/gallery/Asset 24.svg'
import LetterGlitch from '../hero4/letter-glitch';

const Hero3 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="hero hero-style-six pos-rel pt-110">
            <div className="container service-banner">
                   
                <div className="hero_wrap">
                    <div className="h-full row align-items-center">
                        <div className='letter-glitch-div'>
                                    <LetterGlitch
  glitchSpeed={10}
  centerVignette={true}
  outerVignette={false}
  smooth={true}
/>
                            </div>
                        <div className="col-lg-6">
                            <div className="xb-hero">
                                <Fade direction='up' triggerOnce={'false'} duration={800} delay={6}>
                                    <div>
                                        <h1 className="xb-item--title wow fadeInUp " data-wow-delay="0ms" data-wow-duration="600ms" style={{color:'#DCDC46'}}>Analyse </h1>
                                    </div>
                                    <div>
                                        <p className="xb-item--content wow fadeInUp" data-wow-delay="0ms" data-wow-duration="600ms">Gain visibility. Benchmark your risk. Get ahead of threats. </p>
                                    </div>
                                </Fade>
                            </div>
                         
                        </div>
                        <div className="border-col col-lg-6">
                            <div className="xb-hero">
                                <Fade direction='up' triggerOnce={'false'} duration={800} delay={6}>
                                   <div className='banner-service-image'>
                                     <div className="xb-img desktop">
                                         <img src={bgImg} alt="" />
                                        </div>
                                     <div className="xb-img mobile">
                                         <img src={bgImg2} alt="" />
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
        </section>
    )
}

export default Hero3;