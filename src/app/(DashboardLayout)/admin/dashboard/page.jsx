'use client'
import React from "react";
import './dashboard.css';
import DashSec1 from './DashSec1';
import DashSec2 from './DashSec2';
import DashSec3 from './DashSec3';
import DashSec4 from './DashSec4';
import { useGetAdminsQuery, useGetCustomersQuery, useGetSpecialistsQuery } from "@/redux/api/userApi";
import { useGetBookingsQuery } from "@/redux/api/bookingsApi";
import { getUserInfo } from "@/helpers/auth/authHelper";
import { useGetServicesQuery } from "@/redux/api/serviceApi";
import Loading from "@/app/loading";



const Dashboard = () => {
    const query = { limit: 1000, page: 1, };
    const { role, email } = getUserInfo()
    const { data: customer, isLoading: customerLoading } = useGetCustomersQuery({ ...query });
    const { data: specialist, isLoading: specialistLoading } = useGetSpecialistsQuery({ ...query });
    const { data: admin, isLoading: adminLoading } = useGetAdminsQuery({ ...query });
    const { data: booking, isLoading: bookingLoading } = useGetBookingsQuery({ role, email });
    const totalUser = Number(customer?.length) + Number(specialist?.length) + Number(admin?.length);
    const { data: service, isLoading: serviceLoading } = useGetServicesQuery({ ...query });

    if (customerLoading || bookingLoading || specialistLoading || adminLoading || serviceLoading) {
        return <Loading />
    }





    return (
        <div className="dashboard">
            <DashSec1
                totalUser={totalUser}
                service={service?.length}
                booking={booking?.length}
                customer={customer?.length}
                specialist={specialist?.length}
            />
            <DashSec3
            />
            <DashSec2 />
            <DashSec4 />
        </div>
    );
};

export default Dashboard;