'use client'
import React from "react";
import './dashboard.css';
import DashSec1 from './DashSec1';
import DashSec2 from './DashSec2';
import DashSec3 from './DashSec3';
import DashSec4 from './DashSec4';
import { useGetAdminsQuery, useGetCustomersQuery, useGetSpecialistsQuery } from "@/redux/api/userApi";



const Dashboard = () => {
    const query = { limit: 1000, page: 1, };
    const { data: customer, isLoading: customerLoading } = useGetCustomersQuery({ ...query });
    const { data: specialist, isLoading: specialistLoading } = useGetSpecialistsQuery({ ...query });
    const { data: admin, isLoading: adminLoading } = useGetAdminsQuery({ ...query });
    const totalUser = Number(customer?.length) + Number(specialist?.length) + Number(admin?.length);

    return (
        <div className="dashboard">
            <DashSec1 />
            <DashSec3 />
            <DashSec2 />
            <DashSec4 />
        </div>
    );
};

export default Dashboard;