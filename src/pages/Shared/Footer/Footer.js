import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Footer.css';

const Footer = () => {
    const { user } = useAuth();

    return (
        <div id="big-footer">
            <div className="container text-dark pt-5 pb-4 px-4 px-lg-0">
                <div className="row g-5">
                    <div className="col-12 col-lg-4">
                        <NavLink className="navbar-brand text-dark" to="/home">
                            <div className="d-flex align-items-center">
                                <i class="fas fa-suitcase-rolling fs-1 me-3"></i>
                                <h5 className="footer-brand m-0 pt-1">Holiday Planners</h5>
                            </div>
                        </NavLink>
                        <p>We Provide best holiday planning to our customers so that they can travel peacefully and they can utilize their time perfectly. We always look after our every customer very carefully. We running our service from the last 20 year.</p>
                        <div className="mt-4">
                            <h5>Receive Email Updates</h5>
                            <div className="d-flex">
                                <input type="text" placeholder="Your Email Address" className="form-control footer-input-bg border-radius" value={user?.email} />
                                <button className="ms-2 btn btn-outline-dark border-radius">SUBMIT</button>
                            </div>
                        </div>
                        <div className="mt-5">
                            <i class="fs-1 me-2 fab fa-cc-paypal"></i>
                            <i class="fs-1 me-2 fab fa-cc-visa"></i>
                            <i class="fs-1 me-2 fab fa-cc-mastercard"></i>
                            <i class="fs-1 me-2 fab fa-cc-amex"></i>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="pt-2 ps-2">
                            <h5 className="border-bottom border-2 pb-3 border-dark fw-bold">Navigation</h5>
                            <div className="mt-4 ps-2">
                                <p className="mb-4"><NavLink activeStyle={{ fontWeight: "bold" }} className="text-decoration-none text-black" to="/home">Home</NavLink></p>
                                <p className="mb-4"><NavLink activeStyle={{ fontWeight: "bold" }} className="text-decoration-none text-black" to="/services">Services</NavLink></p>
                                <p className="mb-4"><NavLink activeStyle={{ fontWeight: "bold" }} className="text-decoration-none text-black" to="/dashboard">Dashboard</NavLink></p>
                                {/* <p className="mb-4"><NavLink activeStyle={{ fontWeight: "bold" }} className="text-decoration-none text-black" to="/allBookings">Manage All Bookings</NavLink></p>
                                <p className="mb-4"><NavLink activeStyle={{ fontWeight: "bold" }} className="text-decoration-none text-black" to="/addService">Add New Service</NavLink></p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="pt-2 ps-2">
                            <h5 className="border-bottom border-2 pb-3 border-dark fw-bold">Need Help?</h5>
                            <div className="mt-4">
                                <div className="border-start border-2 border-dark ps-3 mb-4">
                                    <p>Call Us</p>
                                    <h6 className="fw-bold">01636456927</h6>
                                </div>
                                <div className="border-start border-2 border-dark ps-3 mb-4">
                                    <p>Email Us</p>
                                    <h6 className="fw-bold">royavijit782@gmail.com</h6>
                                </div>
                                <div className="border-start border-2 border-dark ps-3 mb-4">
                                    <p>Main Location</p>
                                    <h6 className="fw-bold">Sylhet, Bangladesh</h6>
                                </div>
                                <div className="border-start border-2 border-dark ps-3 mb-4">
                                    <p>Follow us</p>
                                    <div className="d-flex fs-5 social-links">
                                        <a href="https://www.facebook.com/ankan.roy.50999" target="_blank" className="me-3">
                                            <i className="fab fa-facebook"></i>
                                        </a>
                                        <a href="https://www.instagram.com/ankan_782/" target="_blank" className="me-3">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                        <a href="https://twitter.com/AvijitAnkan" target="_blank" className="me-3">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="container mt-5 mb-3" />
                <div className="d-lg-flex justify-content-between align-items-center">
                    <p>Copyright © 2021  |  Holiday Planners  |  Avijit Roy  |  All Rights Reserved.</p>
                    <div className="d-flex mt-3 mt-lg-0">
                        <p><NavLink activeStyle={{ fontWeight: "bold" }} className="text-decoration-none mx-2 text-black" to="/privacy">Privacy Policy</NavLink>  |</p>
                        <p><NavLink activeStyle={{ fontWeight: "bold" }} className="text-decoration-none mx-2 text-black" to="/terms">Terms of Use</NavLink>  |</p>
                        <p><NavLink activeStyle={{ fontWeight: "bold" }} className="text-decoration-none mx-2 text-black" to="/cookie">Cookie Policy</NavLink></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;