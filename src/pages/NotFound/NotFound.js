import React from 'react';
import { NavLink } from 'react-router-dom';
import notFoundGif from '../../images/notFound/404.gif';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="error-content d-flex flex-column justify-content-center align-items-center not-found-bg">
            <img src={notFoundGif} alt="" className="not-found-img" />
            <h3 className="mt-5">Error 404!</h3>
            <small className="text-center">The page you are looking for is not found ! Go back to Home</small>
            <NavLink to="/"><button className="btn btn-outline-dark border-radius mt-4"><i className="fas fa-home fs-3"></i></button></NavLink>
        </div>
    );
};

export default NotFound;