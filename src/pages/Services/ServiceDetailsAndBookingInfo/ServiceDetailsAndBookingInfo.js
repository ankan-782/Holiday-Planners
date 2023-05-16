import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './ServiceDetailsAndBookingInfo.css';

const ServiceDetailsAndBookingInfo = () => {
    const { user } = useAuth();
    const [singleService, setSingleService] = useState({});
    const { singleServiceID } = useParams();
    const [manageBookings, setManageBookings] = useState([]);
    const [alreadyBooked, setAlreadyBooked] = useState(false);

    useEffect(() => {
        fetch('https://holiday-planner-server-side.onrender.com/bookings')
            .then(res => res.json())
            .then(data => setManageBookings(data));
    }, [alreadyBooked]);


    useEffect(() => {
        fetch(`https://holiday-planner-server-side.onrender.com/services/${singleServiceID}`)
            .then(res => res.json())
            .then(data => setSingleService(data));
    }, [singleServiceID])

    const { _id, destinationImg, destination, short_description, price, duration, hotelName, hotelImg, groupSize, spotNoOne, spotNoTwo, spotNoThree, spotNoFour, spotNoFive } = singleService;

    const serviceBooked = (manageBookings.filter(bookings => bookings.bookingID === _id)).filter(email => email.email === user.email);


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.destinationImg = destinationImg;
        data.bookingID = _id;
        data.packageName = destination;
        data.price = price;
        data.status = 'pending';

        fetch('https://holiday-planner-server-side.onrender.com/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert(`${destination} package booking done successfully.`);
                    reset();
                    setAlreadyBooked(!alreadyBooked);
                }
            })
    }

    return (
        <div className="single-service-details-bg text-dark">
            <div className="single-service-details-content">
                <div className="container p-4 px-lg-0">
                    <h4 className="my-4 border-start border-3 ps-3 border-dark">Booking Information</h4>
                    <div className="row g-5">
                        <div className="col-12 col-lg-8">
                            <div className="mb-5 single-service-details-img-content">
                                <div className="p-3 border border-3 border-dark d-flex justify-content-center align-items-center">
                                    <h1 className="position-absolute text-white destination-name-in-booking-page">{destination}</h1>
                                    <img src={destinationImg} className="w-100 border border-1 border-dark border-radius" alt="" />
                                </div>
                            </div>
                            <div className="card-body p-4 p-lg-5 destination-info border-radius">
                                <div className="mb-4 row g-3 g-lg-5">
                                    <div className="col-12 col-md-10">
                                        <h3 className="">{short_description}</h3>
                                    </div>
                                    <div className="col-12 col-md-2">
                                        <div className="price-info">
                                            <h3 className="mb-0">${price}</h3>
                                            <hr className="my-1" />
                                            <p className="mb-0">per person</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-5 d-flex justify-content-around align-items-center small-info border-radius">
                                    <div className="text-center">
                                        <h4><i className="far fa-clock"></i></h4>
                                        <p className="text-black">{duration} days</p>
                                    </div>
                                    <div className="text-center">
                                        <h4><i className="fas fa-users"></i></h4>
                                        <p className="text-black">{groupSize}+ peoples</p>
                                    </div>
                                    <div className="text-center">
                                        <h4><i className="fas fa-map-marker-alt"></i></h4>
                                        <p className="text-black">{destination}</p>
                                    </div>
                                </div>
                                <div className="mb-5 hotel-info border-radius">
                                    <h4 className="mb-4 border-start border-3 ps-3 border-dark">Hotel Information</h4>
                                    <div className="row g-2">
                                        <div className="col-12 col-md-4">
                                            <img src={hotelImg} className="w-100 border border-2 border-radius p-1 border-dark" alt="" />
                                        </div>
                                        <div className="col-12 col-md-8">
                                            <div className="card-body">
                                                <h4 className="mb-3 text-center text-lg-start">{hotelName}</h4>
                                                <div className="social-info border-radius">
                                                    <p className="border-start border-3 ps-2 border-dark text-start">Social Information</p>
                                                    <div className="mt-1 d-flex">
                                                        <button className="btn"><i className="fab fa-facebook-f fs-5 text-dark"></i></button>
                                                        <button className="btn"><i className="fab fa-instagram fs-5 text-dark"></i></button>
                                                        <button className="btn"><i className="fab fa-twitter fs-5 text-dark"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tourist-place-info border-radius">
                                    <div className="row g-2">
                                        <div className="col-12 col-lg-6">
                                            <h4 className="mb-4 border-start border-3 ps-3 border-dark">Tourist Spot Top Attractions</h4>
                                            <div className="ms-3">
                                                <div className="fs-5 mb-1">
                                                    <i className="fas fa-caret-square-right me-2"></i>
                                                    <span>{spotNoOne}</span>
                                                </div>
                                                <div className="fs-5 mb-1">
                                                    <i className="fas fa-caret-square-right me-2"></i>
                                                    <span>{spotNoTwo}</span>
                                                </div>
                                                <div className="fs-5 mb-1">
                                                    <i className="fas fa-caret-square-right me-2"></i>
                                                    <span>{spotNoThree}</span>
                                                </div>
                                                <div className="fs-5 mb-1">
                                                    <i className="fas fa-caret-square-right me-2"></i>
                                                    <span>{spotNoFour}</span>
                                                </div>
                                                <div className="fs-5 mb-1">
                                                    <i className="fas fa-caret-square-right me-2"></i>
                                                    <span>{spotNoFive}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <table className="table border border-1 border-dark">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row" className="border-end border-1 border-dark">Destination</th>
                                                        <td>{destination}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="border-end border-1 border-dark">Departure Time</th>
                                                        <td>9:15 AM To 9:30 AM.</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="border-end border-1 border-dark">Return Time</th>
                                                        <td>Approximately 10:30 PM.</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="border-end border-1 border-dark">Dress Code</th>
                                                        <td>comfortable clothing and light jacket.</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="border-end border-1 border-dark">Price Included</th>
                                                        <td>
                                                            <div className="mb-1">
                                                                <i className="fas fa-angle-double-right me-2"></i>
                                                                <span>5 Star Accommodation</span>
                                                            </div>
                                                            <div className="mb-1">
                                                                <i className="fas fa-angle-double-right me-2"></i>
                                                                <span>Air fases</span>
                                                            </div>
                                                            <div className="mb-1">
                                                                <i className="fas fa-angle-double-right me-2"></i>
                                                                <span>3 Nights Hotel Accomodation</span>
                                                            </div>
                                                            <div className="mb-1">
                                                                <i className="fas fa-angle-double-right me-2"></i>
                                                                <span>All transportation in destination location</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="border-end border-1 border-dark">Price Not Included</th>
                                                        <td>
                                                            <div className="mb-1">
                                                                <i className="fas fa-times me-2"></i>
                                                                <span>Guide Service Fee</span>
                                                            </div>
                                                            <div className="mb-1">
                                                                <i className="fas fa-times me-2"></i>
                                                                <span>Any Private Expenses</span>
                                                            </div>
                                                            <div className="mb-1">
                                                                <i className="fas fa-times me-2"></i>
                                                                <span>Room Service Fees</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <h4 className="mb-4 border-start border-3 ps-3 border-dark text-uppercase">Traveller's - Information</h4>
                            <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputName" className="form-label fs-6">Full Name</label>
                                    <input type="text" className="form-control input-bg py-3 border-radius" id="exampleInputName" placeholder="Name" defaultValue={user?.displayName} {...register("name")} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail" className="form-label fs-6">Email address</label>
                                    <input type="email" className="form-control input-bg py-3 border-radius" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="abc@pqr.xyz" defaultValue={user?.email} {...register("email")} required />
                                    <div id="emailHelp" className="form-text text-dark">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPhNo" className="form-label fs-6">Phone Number</label>
                                    <input type="text" className="form-control input-bg py-3 border-radius" id="exampleInputPhNo" placeholder="01XXXXXXXXX" {...register("phoneNo")} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputNOT" className="form-label fs-6">Number of Tickets</label>
                                    <input type="number" className="form-control input-bg py-3 border-radius" id="exampleInputNOT" placeholder="What no. of tickets" {...register("numberOfTickets")} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputDate" className="form-label fs-6">When To Visit</label>
                                    <input type="date" className="form-control input-bg py-3 border-radius" id="exampleInputDate" {...register("dateToVisit")} required />
                                </div>
                                {
                                    serviceBooked.length > 0 ? (<p>Already Booked</p>) : (<div className="text-center">
                                        <button type="submit" className="btn btn-outline-dark border-radius mt-4">Book this Tour Package</button>
                                    </div>)
                                }
                            </form>
                            <div className="why-book-with-us-info mb-5 border-radius">
                                <h4 className="mb-3 border-start border-3 ps-3 border-dark text-uppercase">Why Book with Us?</h4>
                                <div className="ms-2">
                                    <div className="mb-1">
                                        <i className="fas fa-angle-double-right me-2"></i>
                                        <span>5 Star Accommodation</span>
                                    </div>
                                    <div className="mb-1">
                                        <i className="fas fa-angle-double-right me-2"></i>
                                        <span>Air fases</span>
                                    </div>
                                    <div className="mb-1">
                                        <i className="fas fa-angle-double-right me-2"></i>
                                        <span>3 Nights Hotel Accomodation</span>
                                    </div>
                                    <div className="mb-1">
                                        <i className="fas fa-angle-double-right me-2"></i>
                                        <span>All transportation in destination location</span>
                                    </div>
                                </div>
                            </div>
                            <div className="FAQ-info border-radius">
                                <h4 className="mb-3 border-start border-3 ps-3 border-dark text-uppercase">Get a question?</h4>
                                <p className="mb-3">Do not hesitage to give us a call. We are an expert team and we are happy to talk to you.</p>
                                <div className="border-start border-2 border-dark ps-3 mb-4">
                                    <p className="fs-5"><i className="fas fa-phone-alt me-2"></i>01636456927</p>
                                </div>
                                <div className="border-start border-2 border-dark ps-3 mb-4">
                                    <p className="fs-5"><i className="far fa-envelope me-2"></i>royavijit782@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsAndBookingInfo;