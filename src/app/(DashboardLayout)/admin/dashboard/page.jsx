import React from "react";
import './dashboard.css'

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className=" section1">
                <div className="totalUsers">
                    <p>Total Users</p>
                    <h1>30</h1>
                </div>
                <div className="sec1subDiv">
                    <div className="total totalServices">
                        <p>Total Services</p>
                        <h1>15</h1>
                    </div>
                    <div className="total totalBookings">
                        <p>Total Bookings</p>
                        <h1>50</h1>
                    </div>
                    <div className="total totalCustomers">
                        <p>Total Customers</p>
                        <h1>20</h1>
                    </div>
                    <div className="total totalSpecialists">
                        <p>Total Specialists</p>
                        <h1>5</h1>
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