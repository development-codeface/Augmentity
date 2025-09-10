import React from 'react'
import { Link } from 'react-router-dom'
import ContactForm from '../ContactFrom/ContactForm'


const ContactSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className="contact pt-85">
                <div className="container">
                    <div className="row pb-130 mt-none-30">
                        <div className="col-lg-4 mt-30">
                            <div className="item-contact_info">
                                <div className="xb-item--inner">
                                     <div className="contact-info_widget">
                                        <h3 className="xb-title">UK Office</h3>
                                        <span className="xb-location">5 Bickels Yard <br/> 151-153  Bermondsey St. London SE1 3HA</span>
                                    </div>
                                     <div className="contact-info_widget">
                                        <h3 className="xb-title">UAE Office</h3>
                                        <span className="xb-location">2403, The Prism Tower  <br />Business Bay, Dubai</span>
                                    </div>
                                    <div className="xb-item--top">
                                        <h3 className="xb-item--title">Contact </h3>
                                        <span className="xb-item--hotline">+44 7884479884</span>
                                        <span className="xb-item--hotline">+971 524710069</span>
                                        <span className="xb-item--email"> secure@augmentity.net</span>
                                        <ul className="social_icons_block list-unstyled ul_li">
                                            <li>
                                                <Link onClick={ClickHandler} to="/contact" aria-label="Twitter"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.3872 0H15.9952L10.299 7.20048L17 17H11.7545L7.64298 11.0582L2.94415 17H0.332464L6.42395 9.29688L0 0H5.37853L9.09105 5.43101L13.3872 0ZM12.4711 15.2755H13.9155L4.5917 1.63462H3.0402L12.4711 15.2755Z" fill="#0C111D" />
                                                </svg></Link>
                                            </li>
                                            <li><Link onClick={ClickHandler} to="/contact" aria-label="Linkedin"><i className="fab fa-linkedin-in"></i></Link></li>
                                        </ul>
                                    </div>
                                   
                                 
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 mt-30">
                            <div className="cs-contact-wrap cs-contact-form cd-contact-form item-contact_form">
                                <h2 className="xb-title">Get In Touch</h2>
                               
                                <ContactForm />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default ContactSection;