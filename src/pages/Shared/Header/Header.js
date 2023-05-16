import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import avatar from '../../../images/avatar/avatar.jpg';
import logo from '../../../images/brand/suitcase-rolling-solid.svg';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0px";
        }
        else {
            document.getElementById("navbar").style.top = "-66px";
        }
        prevScrollpos = currentScrollPos;
    }

    return (
        <nav id='navbar' className="navbar fixed-top navbar-expand-lg navbar-light navbar-bg">
            <div className="container-fluid px-lg-5">
                <NavLink className="navbar-brand" to="/home">
                    <div className="d-flex justify-content-between align-items-center">
                        <img src={logo} alt="" width="40" height="40" />
                        <h5 className="ms-1 text-uppercase brand m-0 pt-1">Holiday Planners</h5>
                    </div>
                </NavLink>
                <button className="navbar-toggler border-radius" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                        <NavLink activeStyle={{
                            fontWeight: "bold",
                        }} className="nav-link text-black border-bottom-design me-3" to="/home">Home</NavLink>
                        <NavLink activeStyle={{
                            fontWeight: "bold",
                        }} className="nav-link text-black border-bottom-design me-3" to="/services">Services</NavLink>
                        <NavLink activeStyle={{
                            fontWeight: "bold",
                        }} className="nav-link text-black border-bottom-design me-3" to="/dashboard">Dashboard</NavLink>
                    </div>

                    <div className="ms-auto d-flex justify-content-center align-items-center">
                        <div className="nav-item ms-lg-4">
                            {user?.email ? <div className="d-flex justify-content-between align-items-center">
                                <button onClick={logOut} className="btn btn-outline-dark border-radius me-3"><p><i className="fas fa-sign-out-alt me-2"></i>Log Out</p></button>
                                <div className="">
                                    <NavLink to="/profile">{user?.email && user?.photoURL ? <img src={user?.photoURL} className="user-img" alt="" /> : <img src={avatar} title="User not logged in" alt="" className="user-img" />}</NavLink>
                                    <span className="nav-text ms-3 text-uppercase">{user?.displayName}</span>
                                </div>
                            </div>
                                : <div>
                                    <NavLink to="/login"><button className="btn btn-outline-dark border-radius me-3"><p><i className="fas fa-sign-in-alt me-2"></i>Log In</p></button></NavLink>
                                    <NavLink to="/register"><button className="btn btn-outline-dark border-radius"><p><i className="fas fa-sign-in-alt me-2"></i>Register</p></button></NavLink>
                                </div>}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;