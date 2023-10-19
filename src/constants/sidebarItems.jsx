"use client"
import {
    ProfileOutlined,
    TableOutlined,
    AppstoreOutlined,
    ScheduleOutlined,
    ThunderboltOutlined,
    CreditCardOutlined,
    FileTextOutlined,
    BookOutlined,
    CheckSquareOutlined,
    BellOutlined,
    UserOutlined,
    CheckCircleOutlined,
    CarryOutOutlined,
    DeploymentUnitOutlined,
} from "@ant-design/icons";
import Link from "next/link";



export const sidebarItems = (role) => {
    const defaultSidebarItems = [
        {
            label: <Link href={`/profile`}>Profile</Link>,
            key: "/profile",
            icon: <ProfileOutlined />
        },
    ];


    const adminSidebarItems = [
        ...defaultSidebarItems,
        {
            label: <Link href={`/${role}/manage-customers`}>Manage Customers</Link>,
            key: "/manage-customers",
            icon: <UserOutlined />
        },
        {
            label: <Link href={`/${role}/manage-admin`}>Manage Admin</Link>,
            key: "/manage-admin",
            icon: <CheckSquareOutlined />
        },
        {
            label: <Link href={`/${role}/manage-specialists`}>Manage Specialists</Link>,
            key: "/manage-specialists",
            icon: <DeploymentUnitOutlined />
        },
        {
            label: <Link href={`/${role}/manage-services`}>Manage Services</Link>,
            key: "/manage-services",
            icon: <TableOutlined />
        },
        {
            label: <Link href={`/${role}/manage-bookings`}>Manage Bookings</Link>,
            key: "/manage-bookings",
            icon: <CarryOutOutlined />
        },
        {
            label: <Link href={`/${role}/notify-users`}>Notify Users</Link>,
            key: "/notify-users",
            icon: <BellOutlined />
        },
    ];


    const customerSidebarItems = [
        ...defaultSidebarItems,
        {
            label: <Link href={`/${role}/my-bookings`}>My Bookings</Link>,
            key: "/my-bookings",
            icon: <BookOutlined />
        },
        {
            label: <Link href={`/${role}/review`}>My Review</Link>,
            key: "/manage-admin",
            icon: <CheckSquareOutlined />
        },

    ];


    const specialistSidebarItems = [
        ...defaultSidebarItems,
        {
            label: <Link href={`/${role}/my-bookings`}>Bookings for me</Link>,
            key: "/my-bookings",
            icon: <BookOutlined />
        },

    ];




    if (role === 'customer') return customerSidebarItems;
    else if (role === 'admin') return adminSidebarItems;
    else if (role === 'specialist') return specialistSidebarItems;
    else {
        return defaultSidebarItems;
    }
};