import React from 'react';
import { NavLink } from 'react-router-dom';
import useServicesInfo from '../../../hooks/useServicesInfo';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

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
            </div>) : (<div className="services-bg text-dark">
                <div className="services-content">
                    <div className="container p-4 px-lg-0">
                        <h5 className="mb-5 border-start border-3 ps-3 border-dark">Amazing Tours Packages</h5>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                            {
                                servicesInfo.map(service => <Service
                                    key={service._id}
                                    service={service}
                                ></Service>)
                            }
                            <div className="d-flex justify-content-center align-items-center">
                                <NavLink to="/addNewService" className="plus-text"><i class="far fa-plus-square plus-icon"></i></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
        </>
    );
};

export default Services;