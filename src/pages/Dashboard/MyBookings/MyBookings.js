import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import notFound from '../../../images/notFound/not.png';
import './MyBookings.css';

const MyBookings = () => {

    const { user } = useAuth();
    const [myBookingsInfo, setMyBookingsInfo] = useState([]);
    // const [toggleNotFoundImg, setToggleNotFoundImg] = useState(false);

    useEffect(() => {
        fetch('https://holiday-planner-server-side.onrender.com/bookings')
            .then(res => res.json())
            .then(data => setMyBookingsInfo(data));
    }, []);

    const myBookings = myBookingsInfo.filter(mybookings => mybookings.email === user.email);
    console.log(myBookings);

    // if(myBookings.length === 0){
    //     setToggleNotFoundImg(true);
    // }



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
                        const remainingBookings = myBookingsInfo.filter(bookings => bookings._id !== id);
                        setMyBookingsInfo(remainingBookings);
                    }
                });
        }
    };


    return (
        <div id='my-bookings' className="my-bookings-bg text-dark">
            <div className="my-bookings-content d-flex justify-content-center align-items-start">
                <div className="container px-lg-0 px-4 py-5">
                    <div className="row g-4">
                        <div className="col-12 col-lg-2">
                            <NavLink activeStyle={{ fontWeight: "bold" }} className="nav-link text-black border-bottom-design-my-bookings me-3" to="/myBookings"><i className="fas fa-check-circle me-2"></i>My bookings</NavLink>
                            <NavLink activeStyle={{ fontWeight: "bold" }} className="nav-link text-black border-bottom-design-my-bookings me-3" to="/manageAllBookings"><i className="fas fa-tasks me-2"></i>Manage All Bookings</NavLink>
                            <NavLink activeStyle={{ fontWeight: "bold" }} className="nav-link text-black border-bottom-design-my-bookings me-3" to="/addNewService"><i className="fas fa-plus me-2"></i>Add New Service</NavLink>
                        </div>
                        <div className="col-12 col-lg-10">
                            <div className="ms-lg-5">
                                <h4 className="mb-4 border-start border-3 ps-3 border-dark text-uppercase">My Bookings</h4>
                                {myBookings.length === 0 && (<div className="text-center"><img src={notFound} alt="" /></div>)}
                                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                                    {
                                        myBookings.map(mybooking =>
                                            <div className="col">
                                                <div className="card my-bookings p-3 border-0 border-radius">
                                                    <img src={mybooking?.destinationImg} alt="" className="w-100 border border-1 border-radius border-dark" />
                                                    <div className="mt-3 d-flex justify-content-between align-items-center">
                                                        <p>Booking Id: <span className="info">{mybooking?._id}</span></p>
                                                        {mybooking.status === 'pending' ? (<p className="status-red card-text">{mybooking?.status}</p>) : (<p className="status-green card-text">{mybooking?.status}</p>)}
                                                    </div>
                                                    <h5 className="card-title mt-3 mb-0">Package Name: <span className="info">{mybooking?.packageName}</span></h5>
                                                    <div className="mt-4">
                                                        <p>Date to Visit: <span className="info ms-1 text-decoration-underline">Date to Visit: {mybooking?.dateToVisit}</span></p>
                                                        <p>No of tickets: <span className="info ms-1 text-decoration-underline">No of tickets: {mybooking?.numberOfTickets}</span></p>
                                                    </div>
                                                    <button onClick={() => deleteBooking(mybooking._id)} className="w-100 mt-4 btn btn-outline-danger border-radius">Cancel the package</button>
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

export default MyBookings;