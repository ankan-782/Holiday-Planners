import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Registration.css';

const Registration = () => {
    const { setUser, setUserDetails, signInUsingGoogle, processRegistration, setIsLoading} = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location?.state?.from || '/';

    const getName = e => {
        setName(e.target.value);
    }

    const getEmail = e => {
        setEmail(e.target.value);
    }

    const getPassword = e => {
        setPassword(e.target.value);
    }



    // Google login
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                history.push(redirect_url);
            })
    }



    //registration method (sign up)
    const handleRegistration = (e) => {
        e.preventDefault();
        setIsLoading(true);
        processRegistration(email, password)
            .then(result => {
                setUserDetails(name);
                history.push(redirect_url);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <div className="registration-bg text-dark">
            <div className="registration-content d-flex justify-content-center align-items-center align-items-lg-start p-lg-5">
                <i class="fas fa-hotel hotel-icon"></i>
                <div className="container p-3">
                    <div className="registration-content-sizing">
                        <div className="d-flex justify-content-between mb-5">
                            <NavLink to="/register" className="text-decoration-none text-dark py-2 text-center w-100" activeStyle={{ backgroundColor: "rgb(185, 163, 195)" }}>Registration</NavLink>
                            <NavLink to="/login" className="text-decoration-none text-dark py-2 text-center w-100" activeStyle={{ backgroundColor: "rgb(185, 163, 195)" }}>Log In</NavLink>
                        </div>
                        <form onSubmit={handleRegistration}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputName" className="form-label fs-6">Name</label>
                                <input type="text" onBlur={getName} className="form-control input-bg py-3 rounded-0" id="exampleInputName" placeholder="Name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label fs-6">Email address</label>
                                <input type="email" onBlur={getEmail} className="form-control input-bg py-3 rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="abc@pqr.xyz" required />
                                <div id="emailHelp" className="form-text text-dark">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="inputPassword5" className="form-label fs-6">Password</label>
                                <input type="password" onBlur={getPassword} id="inputPassword5" className="form-control input-bg py-3 rounded-0" aria-describedby="passwordHelpBlock" placeholder="Password" required />
                                <div id="passwordHelpBlock" className="form-text text-dark">
                                    Your password must be at least 6 characters long, contain at least one uppercase letter and at least a number.
                                </div>
                            </div>
                            <div className="mt-1 text-danger">{error}</div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-outline-dark rounded-0 mb-3">Register</button>
                                <p>Already have an account? <NavLink className="text-decoration-none text-dark account-switch ms-2" to="/login">Please Login</NavLink></p>
                            </div>
                        </form>
                        <hr className="mt-4" />
                        <div className="mt-4 text-center">
                            <button onClick={handleGoogleLogin} className="btn btn-outline-dark rounded-0"><p><i className="fab fa-google me-3"></i>Google Sign In</p></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;