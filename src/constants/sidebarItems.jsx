"use client"
import {
    ProfileOutlined,
    TableOutlined,
    AppstoreOutlined,
    ScheduleOutlined,
    ThunderboltOutlined,
    CreditCardOutlined,
    FileTextOutlined,
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
            icon: <TableOutlined />
        },
        {
            label: <Link href={`/${role}/manage-admin`}>Manage Admin</Link>,
            key: "/manage-admin",
            icon: <TableOutlined />
        },
        {
            label: <Link href={`/${role}/manage-specialists`}>Manage Specialists</Link>,
            key: "/manage-specialists",
            icon: <TableOutlined />
        },
        {
            label: <Link href={`/${role}/manage-services`}>Manage Services</Link>,
            key: "/manage-services",
            icon: <TableOutlined />
        },
        {
            label: <Link href={`/${role}/manage-bookings`}>Manage Bookings</Link>,
            key: "/manage-bookings",
            icon: <TableOutlined />
        },
    ];




    if (role === 'customer') return defaultSidebarItems;
    else if (role === 'admin') return adminSidebarItems;
    else {
        return defaultSidebarItems;
    }
};