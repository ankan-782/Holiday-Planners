import React from 'react';
import './Dashboard.css';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Dashboard = () => {
    const { user } = useAuth();

    return (
        <div id='dashboard'>
            <div className="dashboard-bg text-dark">
                <div className="dashboard-content d-flex justify-content-center align-items-start">
                    <div className="container-fluid p-lg-5 p-4">
                        <div className="row g-4">
                            <div className="col-12 col-lg-2">
                                <NavLink activeStyle={{fontWeight: "bold"}} className="nav-link text-black border-bottom-design-dashboard me-3" to="/myBookings"><i class="fas fa-check-circle me-2"></i>My bookings</NavLink>
                                <NavLink activeStyle={{fontWeight: "bold"}} className="nav-link text-black border-bottom-design-dashboard me-3" to="/manageAllBookings"><i class="fas fa-tasks me-2"></i>Manage All Bookings</NavLink>
                                <NavLink activeStyle={{fontWeight: "bold"}} className="nav-link text-black border-bottom-design-dashboard me-3" to="/addNewService"><i class="fas fa-plus me-2"></i>Add New Service</NavLink>
                            </div>
                            <div className="col-12 col-lg-10">
                                <div className="ms-lg-5">
                                    <h1>Welcome to DashBoard Mr. {user.displayName}</h1>
                                    <div className="ms-3 mt-4">
                                        <div className="mb-1">
                                            <i class="fas fa-angle-double-right me-2"></i>
                                            <span>Click on the button Add New service for adding new service only if you are admin.</span>
                                        </div>
                                        <div className="mb-1">
                                            <i class="fas fa-angle-double-right me-2"></i>
                                            <span>Click on the button My bookings to see your all bookings so far.</span>
                                        </div>
                                        <div className="mb-1">
                                            <i class="fas fa-angle-double-right me-2"></i>
                                            <span>Click on the button Manage All Bookings to manage all users bookings only if you are admin.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <h2>this is Dashboard</h2>
            <MyBookings></MyBookings>
            <ManageAllBookings></ManageAllBookings>
            <AddNewService></AddNewService> */}
        </div>
    );
};

export default Dashboard;