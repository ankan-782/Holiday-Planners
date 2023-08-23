import React, { useEffect, useRef, useState } from 'react';
import appleStoreLogo from "../../../../src/images/hero/apple-store-logo.png";
import googlePlayStoreLogo from "../../../../src/images/hero/google-play-store-logo.png";
import heroPhoto from "../../../images/Banner/travel.svg";
import './Banner.css';

const Banner = () => {
    const divRef = useRef(null);
    const [divHeight, setDivHeight] = useState(0);

    useEffect(() => {
        const observer = new ResizeObserver(entries => {
            for (let entry of entries) {
                const height = entry.target.clientHeight;
                setDivHeight(height + 8);
                console.log('Div height:', divHeight);
            }
        });

        if (divRef.current) {
            observer.observe(divRef.current);
        }

        // return () => {
        //     if (divRef.current) {
        //         observer.unobserve(divRef.current);
        //     }
        // };
    }, [divHeight]);

    return (
        <div className="banner-bg">
            <div className="container px-lg-0 px-4 position-relative">
                <div style={{ height: divHeight }} className="banner-content">
                    <div className="banner-content-bg"></div>
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
                <div ref={divRef} id="myDiv" style={{ zIndex: 999 }} className="row align-items-center position-absolute top-0">
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
                        <div className="">
                            <img src={heroPhoto} alt="hero section" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;