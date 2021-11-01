import React from 'react';
import img1 from '../../../images/partners/img1.png';
import img2 from '../../../images/partners/img2.png';
import img3 from '../../../images/partners/img3.png';
import img4 from '../../../images/partners/img4.png';
import img5 from '../../../images/partners/img5.png';
import img6 from '../../../images/partners/img6.png';
import img7 from '../../../images/partners/img7.png';
import img8 from '../../../images/partners/img8.png';
import img9 from '../../../images/partners/img9.png';
import img10 from '../../../images/partners/img10.png';
import img11 from '../../../images/partners/img11.png';
import './OurPartners.css';

const OurPartners = () => {
    return (
        <div className="partners-bg">
            <div className="container text-dark partners-content px-4 px-lg-0">
                <h5 className="border-start border-3 border-dark ps-3 mb-5">Our Partners</h5>
                <div className="row g-5">
                    <div className="col-12 col-md-3 col-lg-2">
                        <div className="rounded-3 border-start border-bottom border-3 ps-3 pb-3 border-dark">
                            <img src={img1} alt="" className="w-100 rounded-3 border-end border-top border-3 border-dark" />
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-lg-2">
                        <div className="rounded-3 border-start border-bottom border-3 ps-3 pb-3 border-dark">
                            <img src={img2} alt="" className="w-100 rounded-3 border-end border-top border-3 border-dark" />
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-lg-2">
                        <div className="rounded-3 border-start border-bottom border-3 ps-3 pb-3 border-dark">
                            <img src={img3} alt="" className="w-100 rounded-3 border-end border-top border-3 border-dark" />
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-lg-2">
                        <div className="rounded-3 border-start border-bottom border-3 ps-3 pb-3 border-dark">
                            <img src={img4} alt="" className="w-100 rounded-3 border-end border-top border-3 border-dark" />
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-lg-2">
                        <div className="rounded-3 border-start border-bottom border-3 ps-3 pb-3 border-dark">
                            <img src={img5} alt="" className="w-100 rounded-3 border-end border-top border-3 border-dark" />
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-lg-2">
                        <div className="rounded-3 border-start border-bottom border-3 ps-3 pb-3 border-dark">
                            <img src={img6} alt="" className="w-100 rounded-3 border-end border-top border-3 border-dark" />
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-lg-2">
                        <div className="rounded-3 border-start border-bottom border-3 ps-3 pb-3 border-dark">
                            <img src={img7} alt="" className="w-100 rounded-3 border-end border-top border-3 border-dark" />
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-lg-2">
                        <div className="rounded-3 border-start border-bottom border-3 ps-3 pb-3 border-dark">
                            <img src={img8} alt="" className="w-100 rounded-3 border-end border-top border-3 border-dark" />
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-lg-2">
                        <div className="rounded-3 border-start border-bottom border-3 ps-3 pb-3 border-dark">
                            <img src={img9} alt="" className="w-100 rounded-3 border-end border-top border-3 border-dark" />
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-lg-2">
                        <div className="rounded-3 border-start border-bottom border-3 ps-3 pb-3 border-dark">
                            <img src={img10} alt="" className="w-100 rounded-3 border-end border-top border-3 border-dark" />
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-lg-2">
                        <div className="rounded-3 border-start border-bottom border-3 ps-3 pb-3 border-dark">
                            <img src={img11} alt="" className="w-100 rounded-3 border-end border-top border-3 border-dark" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurPartners;