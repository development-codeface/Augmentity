import React from "react";
import Project from '../../../api/project'
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import { Fade } from "react-awesome-reveal";
import itemImg from '../../../images/gallery/MISION.png'

const ProjectSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="project pb-140 o-hidden">
            <div className="container">
             
                
                <div className="pro-top ul_li_between mb-65 mission-te">
                    <div className="sec-title mission-sec">
                        
                        <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
                            <div>
                                <h2 className="title mb-15 wow fadeInLeft" data-wow-duration="600ms">Mission</h2>
                            </div>
                        </Fade>
                        <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
                            <div>
                                <span className="content wow fadeInLeft" data-wow-duration="600ms">Our mission is to help every organisation create a digital  safe-space for their business and people.</span>
                            </div>
                        </Fade>
                    </div>
                    <div className="mission-img">
                        <img src={itemImg} alt="" />
                    </div>
                         
                </div>
                <div className="pro-top ul_li_between mb-65 swat-team">
                    <div class="colourab2"></div>
                    <div className="sec-title">
                        <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9} className="your-swat-title" >
                            <div>
                                <h2 className="title mb-15 wow fadeInLeft" data-wow-duration="600ms">Your <br/> <span className="swat-clr">Swat Team  </span>on Standby</h2>
                            </div>
                        </Fade>
                        <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9} className="your-swat-content">
                            <div>
                                <span className="content wow fadeInLeft" data-wow-duration="600ms">
                                    
                                    Whilst you focus on transforming your digital organisation with Al and automation, we help you to stay confident about cyber risk.
We are a team of elite security consultants, with a global threat intelligence network, and a unique comprehensive framework to assess and transform your security strategy for tomorrow's demands.
Our team have advised world-class organisations in investment banking, financial services, retail and manufacturing, as well as cybersecurity product vendors - to build attack resilience at every layer.

                                </span>
                                 <span className="content wow fadeInLeft" data-wow-duration="600ms" style={{marginTop: "15px"}}>
                                    
We are human and we understand nothing is perfect and therein lies our strength in defending against the adversaries.
                                </span>
                            </div>
                        </Fade>
                        
                    </div>
                  
                </div>
                <div className="pro-top ul_li_between mb-65 independent">
                    <div className="sec-title">
                        <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9} className="your-swat-content">
                       
                                <span className="content wow fadeInLeft" data-wow-duration="600ms">
                                        "An independent technology consultant's Hippocratic oath is to always provide an unbiased vendor-agnostic advice"</span>

                            
                        </Fade>
                    </div>
                  
                </div>
            </div>
          
        </section>
    );
}

export default ProjectSection;