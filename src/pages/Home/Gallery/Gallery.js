import React from 'react';
import './Gallery.css';
import img1 from '../../../images/offerings/Coxs-Bazar/cox1.jpg';
import img2 from '../../../images/offerings/Coxs-Bazar/cox2.jpg';
import img3 from '../../../images/offerings/Coxs-Bazar/cox3.jpg';
import img4 from '../../../images/offerings/Dhaka/ahsan1.jpg';
import img5 from '../../../images/offerings/Dhaka/lalbag1.jpg';
import img6 from '../../../images/offerings/Dhaka/lalbag2.JPG';
import img7 from '../../../images/offerings/Dhaka/shohid1.jpg';
import img8 from '../../../images/offerings/Dhaka/smriti1.jpg';
import img9 from '../../../images/offerings/Dhaka/smriti2.jpg';
import img10 from '../../../images/offerings/Guliakhali/guliakhali1.jpg';
import img11 from '../../../images/offerings/Guliakhali/guliakhali2.JPG';
import img12 from '../../../images/offerings/Kuakata/kuakata2.jpg';
import img13 from '../../../images/offerings/Kuakata/kuakata3.jpg';
import img14 from '../../../images/offerings/Kuakata/kuakata4.jpg';
import img15 from '../../../images/offerings/Rangamati/ranga1.jpg';
import img16 from '../../../images/offerings/Rangamati/sajek1.jpg';
import img17 from '../../../images/offerings/Rangamati/sajek2.jpg';
import img18 from '../../../images/offerings/Rangamati/sajek3.jpg';
import img19 from '../../../images/offerings/Sompur/sompur1.jpg';
import img20 from '../../../images/offerings/Sompur/sompur2.jpg';
import img21 from '../../../images/offerings/Sompur/sompur3.jpg';
import img22 from '../../../images/offerings/Srimongol/srimon1.jpg';
import img23 from '../../../images/offerings/Srimongol/srimon2.jpg';
import img24 from '../../../images/offerings/Srimongol/srimon3.jpg';
import img25 from '../../../images/offerings/Sundorban/sundor1.jpg';
import img26 from '../../../images/offerings/Sundorban/sundor2.jpg';
import img27 from '../../../images/offerings/Sundorban/sundor3.jpg';
import img28 from '../../../images/offerings/Sundorban/sundor4.jpg';
import img29 from '../../../images/offerings/Sylhet/bisna1.jpg';
import img30 from '../../../images/offerings/Sylhet/bisna2.jpg';
import img31 from '../../../images/offerings/Sylhet/jaf1.jpg';
import img32 from '../../../images/offerings/Sylhet/jaf2.jpg';
import img33 from '../../../images/offerings/Sylhet/jaf3.jpg';
import img34 from '../../../images/offerings/Sylhet/lala1.jpg';
import img35 from '../../../images/offerings/Sylhet/rata1.jpg';
import img36 from '../../../images/offerings/Sylhet/vola1.jpg';
import img37 from '../../../images/offerings/Sylhet/vola2.jpg';
import img38 from '../../../images/offerings/Sylhet/vola3.jpg';

const Gallery = () => {
    return (
        <div className="gallery-bg text-dark">
            <div className="gallery-content">
                <i class="fab fa-instagram instagram-icon"></i>
                <i class="fab fa-facebook facebook-icon"></i>
                <i class="fab fa-twitter twitter-icon"></i>
                <div className="container p-4 px-lg-0">
                    <h5 className="border-start border-3 border-dark ps-3 mb-5">Gallery Section</h5>
                    <div className="row g-4">
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">C O X' S B A Z A R</h6>
                                    <img src={img1} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">C O X' S B A Z A R</h6>
                                    <img src={img2} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">C O X' S B A Z A R</h6>
                                    <img src={img3} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">A H S A N - M A N J I L</h6>
                                    <img src={img4} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">L A L B A G - F O R T</h6>
                                    <img src={img5} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">L A L B A G - F O R T</h6>
                                    <img src={img6} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">S H O H I D - M I N A R</h6>
                                    <img src={img7} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">S M R I T I - S O U D H</h6>
                                    <img src={img8} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">S M R I T I - S O U D H</h6>
                                    <img src={img9} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">G U L I A K H A L I</h6>
                                    <img src={img10} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">G U L I A K H A L I</h6>
                                    <img src={img11} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">K U A K A T A</h6>
                                    <img src={img12} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">K U A K A T A</h6>
                                    <img src={img13} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">K U A K A T A</h6>
                                    <img src={img14} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">R A N G A M A T I</h6>
                                    <img src={img15} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">S A J E K</h6>
                                    <img src={img16} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">S A J E K</h6>
                                    <img src={img17} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">S A J E K</h6>
                                    <img src={img18} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">S O M P U R - B I H A R</h6>
                                    <img src={img19} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">S O M P U R - B I H A R</h6>
                                    <img src={img20} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">S O M P U R - B I H A R</h6>
                                    <img src={img21} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">L A U A C H A R A <br />S R I M O N G O L</h6>
                                    <img src={img22} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">S R I M O N G O L</h6>
                                    <img src={img23} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">S R I M O N G O L</h6>
                                    <img src={img24} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">S U N D O R B A N</h6>
                                    <img src={img25} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">S U N D O R B A N</h6>
                                    <img src={img26} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">S U N D O R B A N</h6>
                                    <img src={img27} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">S U N D O R B A N</h6>
                                    <img src={img28} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">B I S N A K A N D I</h6>
                                    <img src={img29} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">B I S N A K A N D I</h6>
                                    <img src={img30} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">J A F L O N G</h6>
                                    <img src={img31} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">J A F L O N G</h6>
                                    <img src={img32} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">J A F L O N G</h6>
                                    <img src={img33} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">L A L A K H A L</h6>
                                    <img src={img34} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">R A T A R G U L</h6>
                                    <img src={img35} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">V O L A G A N J</h6>
                                    <img src={img36} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">V O L A G A N J</h6>
                                    <img src={img37} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className="gallery-img-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h6 className="position-absolute text-white">V O L A G A N J</h6>
                                    <img src={img38} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;