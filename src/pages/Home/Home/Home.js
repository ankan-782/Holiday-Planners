import React from 'react';
import Banner from '../Banner/Banner';
import OurPartners from '../OurPartners/OurPartners';
import AboutUs from '../AboutUs/AboutUs';
import useServicesInfo from '../../../hooks/useServicesInfo';
import ServicesInHome from '../ServicesInHome/ServicesInHome';
import { NavLink } from 'react-router-dom';
import Gallery from '../Gallery/Gallery';
import './Home.css';


const Home = () => {

    //custom hook used
    const [servicesInfo, loading] = useServicesInfo();

    return (
        <div>
            <Banner></Banner>
            {loading ? (<div className="spinner-bg">
                <div className="spinner-content d-flex justify-content-center align-items-center">
                    <div className="spinner-border text-dark" style={{ width: "5rem", height: "5rem" }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>) : (<div className="home-bg text-dark">
                <div className="home-content">
                    <div className="container p-4 px-lg-0">
                        <h5 className="mb-5 border-start border-3 ps-3 border-dark">Amazing Tours Packages</h5>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                            {
                                // servicesInfo.slice(0, 6).map(service => <ServicesInHome
                                //     key={service._id}
                                //     service={service}
                                // ></ServicesInHome>)
                                servicesInfo.map(service => <ServicesInHome
                                    key={service._id}
                                    service={service}
                                ></ServicesInHome>)

                                // I am adding all service in home page also because,
                                // when user add a new service it should be added on the home page also as like as services section.
                                // This is the requirement in Assignment 11.
                                // but I can do the slice method to show 6 services. but for requirement purpose i commented those lines above.
                            }
                            <div className="d-flex justify-content-center align-items-center">
                                <NavLink to="/addNewService" className="plus-text"><i class="far fa-plus-square plus-icon"></i></NavLink>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <NavLink className="btn btn-outline-dark border-radius my-5" to="/services">View All Packages in Services section</NavLink>
                        </div>
                    </div>
                </div>
            </div>)}

            <AboutUs></AboutUs>
            <Gallery></Gallery>
            <OurPartners></OurPartners>
        </div>
    );
};

export default Home;