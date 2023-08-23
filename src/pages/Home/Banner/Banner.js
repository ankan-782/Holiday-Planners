import React from 'react';
import appleStoreLogo from "../../../../src/images/hero/apple-store-logo.png";
import googlePlayStoreLogo from "../../../../src/images/hero/google-play-store-logo.png";
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-bg">
            <div className="container px-lg-0 px-4">
                <div class="box_parent">
                    <div className="row align-items-center banner-content">
                        <div className="col-12 col-lg-6">
                            <div className="p-5">
                                <h1 className="banner-title mb-5 fw-bold">Discover, plan, and embark on unforgettable journeys with Holiday Planner.</h1>
                                <p className="lh-base fw-bold w-75">Your personalized guide to seamless travel experiences and cherished memories.</p>
                                <div className="d-flex mt-5">
                                    <img style={{ width: "150px", height: "50px" }} src={appleStoreLogo} alt="apple store logo" className="me-3" />
                                    <img style={{ width: "150px", height: "50px" }} src={googlePlayStoreLogo} alt="play store logo" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">

                        </div>
                    </div>

                    <svg class="flt_svg" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <filter id="flt_tag">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="flt_tag" />
                                <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
                            </filter>
                        </defs>
                    </svg>

                </div>
            </div>
        </div>
    );
};

export default Banner;

{/* <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
        <div className="carousel-item active">
            <div className='slide1 min-vh-100'>
                <div className="carousel-caption d-none d-md-block">
                    <h1 className="mb-5">Enjoy The Travel with <br /> <span className="banner-brand m-0">Holiday Planners</span></h1>
                    <h5 className="lh-base w-50 mx-auto line">We Provide best holiday planning to our customers so that they can travel peacefully and they can utilize their time perfectly.</h5>
                </div>
            </div>
        </div>
        <div className="carousel-item">
            <div className='slide2 min-vh-100'>
                <div className="carousel-caption d-none d-md-block">
                    <h1 className="mb-5">Life is Short and <br /> <span className="banner-brand">The World is Wide</span></h1>
                    <h5 className="lh-base w-50 mx-auto line">If you want to travel, but you’re not sure where to start, you just need to take the first step. Research places you’d like to go</h5>
                </div>
            </div>
        </div>
        <div className="carousel-item">
            <div className='slide3 min-vh-100'>
                <div className="carousel-caption d-none d-md-block">
                    <h1 className="mb-5">Get ready to Travel <br /> <span className="banner-brand">The World</span></h1>
                    <h5 className="lh-base w-50 mx-auto line">Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you did do. – Mark Twain</h5>
                </div>
            </div>
        </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
</div> */}