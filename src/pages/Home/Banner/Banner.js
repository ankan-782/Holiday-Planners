import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
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
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>




            {/* <div className="container-fluid px-0 text-white">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators mb-lg-5">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <div className="d-flex justify-content-center align-items-center">
                            <img src={img1} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block caption-content">
                                <h5 className="mb-4">“I don’t count my sit-ups. I only start counting when it starts hurting because they’re the only ones that count.”</h5>
                                <h3>-Muhammad Ali</h3>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item min-vh-100" data-bs-interval="3000">
                        <img src={img2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block caption-content">
                            <h5 className="mb-4">“Go the extra mile. It’s never crowded.”</h5>
                            <h3>-Wayne Dyer</h3>
                        </div>
                    </div>
                    <div className="carousel-item min-vh-100" data-bs-interval="3000">
                        <img src={img3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block caption-content">
                            <h5 className="mb-4">“You just can’t beat the person who never gives up.”</h5>
                            <h3>-Babe Ruth</h3>
                        </div>
                    </div>
                    <div className="carousel-item min-vh-100" data-bs-interval="3000">
                        <img src={img4} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block caption-content">
                            <h5 className="mb-4">“Take care of your body. It’s the only place you have to live.”</h5>
                            <h3>-Jim Rohn</h3>
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
            </div>
        </div> */}





        </div>
    );
};

export default Banner;