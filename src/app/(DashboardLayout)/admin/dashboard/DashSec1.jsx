import React from 'react';
import './dashboard.css';
import { UserOutlined } from '@ant-design/icons'


function DashSec1() {
    return (
        <div className=" section1">
            <div className="totalUsers">
                <UserOutlined style={{ fontSize: '45px', marginBottom: '10px' }} />
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
    )
}

export default DashSec1;
