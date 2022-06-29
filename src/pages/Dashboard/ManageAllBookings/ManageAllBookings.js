import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './ManageAllBookings.css';

const ManageAllBookings = () => {
    const { user } = useAuth();

    const [manageBookings, setManageBookings] = useState([]);
    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        fetch('https://safe-lowlands-06781.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setManageBookings(data));
    }, [updated]);

    const deleteBooking = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            fetch(`https://safe-lowlands-06781.herokuapp.com/bookings/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Bookings deleted successfully');
                        const remainingBookings = manageBookings.filter(allBookings => allBookings._id !== id);
                        setManageBookings(remainingBookings);
                    }
                });
        }
    }

    const updateBookingStatus = (id) => {
        fetch(`https://safe-lowlands-06781.herokuapp.com/bookings/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'approved' })
        })
            .then(res => res.json())
            .then(data => {
                setUpdated(!updated);
            })

    }

    return (
        <div id='manage-all-bookings' className="manage-all-bookings-bg text-dark">
            <div className="manage-all-bookings-content d-flex justify-content-center align-items-start">
                <div className="container-fluid p-lg-5 p-4">
                    <div className="row g-4">
                        <div className="col-12 col-lg-2">
                            <NavLink activeStyle={{ fontWeight: "bold" }} className="nav-link text-black border-bottom-design-manage-all-bookings me-3" to="/myBookings"><i class="fas fa-check-circle me-2"></i>My bookings</NavLink>
                            <NavLink activeStyle={{ fontWeight: "bold" }} className="nav-link text-black border-bottom-design-manage-all-bookings me-3" to="/manageAllBookings"><i class="fas fa-tasks me-2"></i>Manage All Bookings</NavLink>
                            <NavLink activeStyle={{ fontWeight: "bold" }} className="nav-link text-black border-bottom-design-manage-all-bookings me-3" to="/addNewService"><i class="fas fa-plus me-2"></i>Add New Service</NavLink>
                        </div>
                        <div className="col-12 col-lg-10">
                            <div className="ms-lg-5">
                                <h4 className="mb-4 border-start border-3 ps-3 border-dark text-uppercase">Manage All Bookings</h4>
                                <div className="row row-cols-1 row-cols-lg-2 g-5">
                                    {
                                        manageBookings.map(booking =>
                                            <div className="col">
                                                <div className="card bookings p-3 border-0 border-radius h-100">
                                                    <div className="row gy-3 gx-5">
                                                        <div className="col-12 col-lg-5">
                                                            <div className="mt-3">
                                                                <p>Booking Id: <p className="booking-id">{booking?._id}</p></p>
                                                                <h6 className="card-title mb-0 mt-3">Package Name: <span className="ms-1 fs-4">{booking?.packageName}</span></h6>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-lg-4">
                                                            <div>
                                                                <div>
                                                                    <p className="text-decoration-underline">User Information</p>
                                                                    <div className="mt-2">
                                                                        <p>Name: <span className="info ms-1 text-decoration-underline">{booking?.name}</span></p>
                                                                        <p>Email Address: <span className="info ms-1 text-decoration-underline">{booking?.email}</span></p>
                                                                        <p>Phone No: <span className="info ms-1 text-decoration-underline">{booking?.phoneNo}</span></p>
                                                                        <p>Date to Visit: <span className="info ms-1 text-decoration-underline">{booking?.dateToVisit}</span></p>
                                                                        <p>No of tickets: <span className="info ms-1 text-decoration-underline">{booking?.numberOfTickets}</span></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-lg-3">
                                                            <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
                                                                <div className="mb-3">
                                                                    {booking.status === 'pending' ? (<small className="status-red text-center">{booking?.status}</small>) : (<small className="status-green text-center">{booking?.status}</small>)}
                                                                </div>
                                                                <div className="d-flex justify-content-center align-items-center">
                                                                    {booking.status === 'pending' && <button className="btn btn-outline-success border-radius me-1" onClick={() => updateBookingStatus(booking._id)}><i class="fas fa-check-double fs-6 text-dark"></i></button>}
                                                                    <button className="btn btn-outline-danger border-radius" onClick={() => deleteBooking(booking._id)}><i class="fas fa-trash-alt fs-6 text-dark"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageAllBookings;