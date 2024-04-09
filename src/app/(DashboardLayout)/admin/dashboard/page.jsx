import React from "react";
import './dashboard.css'

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className=" section1">
                <div className="totalUsers">
                    <p className="totalHeading">Total Users</p>
                    <p className="totalNumber">30</p>
                </div>
                <div className="sec1subDiv">
                    <div className="total totalServices">
                        <p className="totalHeading">Total Services</p>
                        <p className="totalNumber">15</p>
                    </div>
                    <div className="total totalBookings">
                        <p className="totalHeading">Total Bookings</p>
                        <p className="totalNumber">50</p>
                    </div>
                    <div className="total totalCustomers">
                        <p className="totalHeading">Total Customers</p>
                        <p className="totalNumber">20</p>
                    </div>
                    <div className="total totalSpecialists">
                        <p className="totalHeading">Total Specialists</p>
                        <p className="totalNumber">05</p>
                    </div>

                </div>
            </div>
            <div className="section section2">
                2
            </div>
            <div className="section section3">
                3
            </div>
            <div className="section section4">
                4
            </div>
        </div>
    );
};

export default Dashboard;