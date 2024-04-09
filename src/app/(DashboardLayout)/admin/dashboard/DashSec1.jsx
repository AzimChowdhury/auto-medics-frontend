import React from 'react';
import './dashboard.css';
import { UserOutlined } from '@ant-design/icons'
import Link from "next/link";


function DashSec1({ totalUser, service, booking, specialist, customer }) {
    return (
        <div className=" section1">
            <Link href={'/admin/manage-customers'} className="totalUsers">
                <UserOutlined style={{ fontSize: '45px', marginBottom: '10px' }} />
                <p className="totalHeading">Total Users</p>
                <p className="totalNumber">{totalUser}</p>
            </Link>
            <div className="sec1subDiv">
                <Link href={"/admin/manage-services"} className="total totalServices">
                    <p className="totalHeading">Total Services</p>
                    <p className="totalNumber">{service}</p>
                </Link>
                <Link href={"/admin/manage-bookings"} className="total totalBookings">
                    <p className="totalHeading">Total Bookings</p>
                    <p className="totalNumber">{booking}</p>
                </Link>
                <Link href={'/admin/manage-customers'} className="total totalCustomers">
                    <p className="totalHeading">Total Customers</p>
                    <p className="totalNumber">{customer}</p>
                </Link>
                <Link href={'/admin/manage-specialists'} className="total totalSpecialists">
                    <p className="totalHeading">Total Specialists</p>
                    <p className="totalNumber">{specialist}</p>
                </Link>

            </div>
        </div>
    )
}

export default DashSec1;
