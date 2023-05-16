import React from 'react';
import { NavLink } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {

    const { _id, destinationImg, destination, short_description, price, duration, groupSize } = service;
    return (
        <div className="col">
            <div className="card service border-0 border-radius h-100">
                <img src={destinationImg} className="card-img-top border-radius" alt="..." />
                <div className="destination-name">
                    <h5 className="card-title text-center fw-bold m-0 py-2 text-white">{destination}</h5>
                </div>
                <div className="card-body">
                    <div className="card-details">
                        <p className="card-text text-black lh-base">{short_description}</p>
                    </div>
                </div>
                <div className="card-body d-flex justify-content-between align-items-center">
                    <div>
                        <h6><i className="far fa-clock me-2"></i>Duration</h6>
                        <p className="ms-4 text-black-50">{duration} days</p>
                    </div>
                    <div>
                        <h6><i className="fas fa-users me-2"></i>Group Size</h6>
                        <p className="ms-4 text-black-50">{groupSize}+ peoples</p>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                    <div>
                        <h4 className="m-0">${price}</h4>
                        <p className="ms-1 text-black opacity-75">per person</p>
                    </div>
                    <NavLink to={`/serviceDetails/${_id}`}><button className="btn btn-outline-dark border-radius">Book Now</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Service;