import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './ManageAllBookings.css';

const ManageAllBookings = () => {

    const [manageBookings, setManageBookings] = useState([]);
    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        fetch('https://holiday-planner-server-side.onrender.com/bookings')
            .then(res => res.json())
            .then(data => setManageBookings(data));
    }, [updated]);

    const deleteBooking = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            fetch(`https://holiday-planner-server-side.onrender.com/bookings/${id}`, {
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
    };

    const updateBookingStatus = (id) => {
        fetch(`https://holiday-planner-server-side.onrender.com/bookings/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'approved' })
        })
            .then(res => res.json())
            .then(data => {
                setUpdated(!updated);
            });

    };

    return (
        <div id='manage-all-bookings' className="manage-all-bookings-bg text-dark">
            <div className="manage-all-bookings-content d-flex justify-content-center align-items-start">
                <div className="container px-lg-0 px-4 py-5">
                    <div className="row g-4">
                        <div className="col-12 col-lg-2">
                            <NavLink activeStyle={{ fontWeight: "bold" }} className="nav-link text-black border-bottom-design-manage-all-bookings me-3" to="/myBookings"><i className="fas fa-check-circle me-2"></i>My bookings</NavLink>
                            <NavLink activeStyle={{ fontWeight: "bold" }} className="nav-link text-black border-bottom-design-manage-all-bookings me-3" to="/manageAllBookings"><i className="fas fa-tasks me-2"></i>Manage All Bookings</NavLink>
                            <NavLink activeStyle={{ fontWeight: "bold" }} className="nav-link text-black border-bottom-design-manage-all-bookings me-3" to="/addNewService"><i className="fas fa-plus me-2"></i>Add New Service</NavLink>
                        </div>
                        <div className="col-12 col-lg-10">
                            <div className="ms-lg-5">
                                <h4 className="mb-4 border-start border-3 ps-3 border-dark text-uppercase">Manage All Bookings</h4>
                                <div className="row row-cols-1 row-cols-lg-2 g-5">
                                    {
                                        manageBookings.map(booking =>
                                            <div className="col">
                                                <div className="card bookings p-3 border-0 border-radius position-relative">
                                                    <div className="row g-4">
                                                        <div className="col-12 col-lg-5">
                                                            <div>
                                                                <p>Booking Id: <span className="info">{booking?._id}</span></p>
                                                                <p className="card-title mb-0 mt-3">Package Name: <span className="ms-1 fs-4 info">{booking?.packageName}</span></p>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-lg-7">
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
                                                    <div className="mt-4">
                                                        <div className="d-flex">
                                                            {booking.status === 'pending' && <button className="btn btn-outline-success border-radius w-100 me-3" onClick={() => updateBookingStatus(booking._id)}>Approve <i className="fas fa-check-double fs-6"></i></button>}
                                                            <button className="btn btn-outline-danger border-radius w-100" onClick={() => deleteBooking(booking._id)}>Delete <i className="fas fa-trash-alt fs-6"></i></button>
                                                        </div>
                                                    </div>
                                                    <div style={{top: 0, right: 0}} className="position-absolute">
                                                        {booking.status === 'pending' ? (<small className="status-red text-center">{booking?.status}</small>) : (<small className="status-green text-center">{booking?.status}</small>)}
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