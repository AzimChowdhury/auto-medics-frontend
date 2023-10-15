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




    if (role === 'customer') return customerSidebarItems;
    else if (role === 'admin') return adminSidebarItems;
    else {
        return defaultSidebarItems;
    }
};