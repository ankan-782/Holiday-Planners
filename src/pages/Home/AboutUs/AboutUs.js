import React from 'react';
import img1 from '../../../images/about/cox1.jpg';
import img2 from '../../../images/about/guliakhali1.jpg';
import img3 from '../../../images/about/sundor4.jpg';
import img4 from '../../../images/about/vola3.jpg';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div id='about-us' className="about-us-bg text-dark d-flex justify-content-center align-items-center">
            <div className="container-fluid p-lg-5 p-4">
                <div className="row g-5">
                    <div className="col-12 col-lg-6">
                        <div className="row g-3">
                            <div className="col-12 col-lg-6">
                                <div className="img-content">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <h3 className="position-absolute text-white">C O X' S B A Z A R</h3>
                                        <img src={img1} alt="" className="img-fluid border-radius border border-2 p-2 border-dark" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="img-content">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <h3 className="position-absolute text-white">G U L I A K H A L I</h3>
                                        <img src={img2} alt="" className="img-fluid border-radius border border-2 p-2 border-dark" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="img-content">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <h3 className="position-absolute text-white">S U N D A R B A N</h3>
                                        <img src={img3} alt="" className="img-fluid border-radius border border-2 p-2 border-dark" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="img-content">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <h3 className="position-absolute text-white">V O L A G A N J</h3>
                                        <img src={img4} alt="" className="img-fluid border-radius border border-2 p-2 border-dark" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <h5 className="mb-4 border-start border-3 ps-3 border-dark">About Us</h5>
                        <h2 className="mb-4">Plan Your Trip with Us</h2>
                        <p>When we created Holiday Planners, we knew we wanted to be more than just a travelling Agency. Having worked in traditional travel agency in the past, we knew we needed to create a concept that would provide our customers with the most effective things for success. This meant we needed to offer a wide range of services for our travel loving customers.</p><br />
                        <p>This also meant we needed to provide a learning environment run by experienced and successful coaches. However, our most important goal was to create a welcoming atmosphere and community in which everyone feels a sense of belonging.</p>
                        <div className="mt-5 row g-3">
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="text-center about-card h-100">
                                    <i className="fas fa-bus fs-2 mb-3"></i>
                                    <h6 className="fw-bold text-dark text-uppercase">Private Transport</h6>
                                    <p>Clean and Airy</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="text-center about-card h-100">
                                    <i className="fas fa-globe fs-2 mb-3"></i>
                                    <h6 className="fw-bold text-dark text-uppercase">Diverse Destinations</h6>
                                    <p>Every Level</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="text-center about-card h-100">
                                    <i className="fas fa-hotel fs-2 mb-3"></i>
                                    <h6 className="fw-bold text-dark text-uppercase">Great Hotels</h6>
                                    <p>Affordable</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="text-center about-card h-100">
                                    <i className="fas fa-user-check fs-2 mb-3"></i>
                                    <h6 className="fw-bold text-dark text-uppercase">Fast Booking</h6>
                                    <p>All Services</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;