import React from 'react';
import { NavLink } from 'react-router-dom';
import useServicesInfo from '../../../hooks/useServicesInfo';
import Service from '../Service/Service';
import './Services.css';
import useAuth from '../../../hooks/useAuth';

const Services = () => {
    const { user } = useAuth();

    //custom hook used
    const [servicesInfo, loading] = useServicesInfo();

    return (
        <>
            {loading ? (<div className="spinner-bg">
                <div className="spinner-content d-flex justify-content-center align-items-center">
                    <div className="spinner-border text-dark" style={{ width: "5rem", height: "5rem" }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>) : (<div id='services' className="services-bg text-dark">
                <div className="services-content">
                    <div className="container px-lg-0 px-4 py-5">
                        <h5 className="mb-5 border-start border-3 ps-3 border-dark">Amazing Tours Packages</h5>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                            {
                                servicesInfo.map(service => <Service
                                    key={service._id}
                                    service={service}
                                ></Service>)
                            }
                            {user?.email && <div className="d-flex justify-content-center align-items-center">
                                <NavLink to="/addNewService" className="plus-text"><i className="far fa-plus-square plus-icon"></i></NavLink>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>)}
        </>
    );
};

export default Services;