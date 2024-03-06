'use client'
import { Avatar, Badge, Button, Col, Dropdown, Layout, Menu, Row, Space, Switch, message } from "antd";
import { BellOutlined, BellTwoTone, MenuFoldOutlined } from "@ant-design/icons";
import Link from "next/link";
import './header.css'
import { authKey } from "@/constants/storageKey";
import { getUserInfo } from "@/helpers/auth/authHelper";
import { useRouter } from "next/navigation";
const { Header: AntHeader } = Layout;
import dynamic from "next/dynamic";
import Notification from "./Notification";
import { useState } from "react";
import { useGetNotificationsQuery } from "@/redux/api/notificationApi";
import { useDispatch } from 'react-redux';
import { switchTheme } from "@/redux/reducers/themeSlice";



const Header = () => {
    const router = useRouter()
    const user = getUserInfo()
    const [open, setOpen] = useState(false);
    const { data: notifications } = useGetNotificationsQuery(user.email)
    const dispatch = useDispatch();

    const logOut = () => {
        localStorage.removeItem(authKey)
        message.success('log out successful')
        router.push('/auth/signin')
    };


    const onChange = (checked) => {
        let initialState = JSON.parse(localStorage.getItem('darkTheme'))
        if (initialState === null) {
            localStorage.setItem('darkTheme', false)
        }

        dispatch(switchTheme(initialState))
        localStorage.setItem('darkTheme', !initialState)
        router.push('/')


    };



    const showDrawer = () => {
        setOpen(true);
    };





    const onClose = () => {
        setOpen(false);
    };



    const unreadCount = notifications?.reduce((count, notification) => {
        if (notification?.email && !notification?.readen) {
            return count + 1;
        } else if (notification?.readers && notification?.readers?.includes(user?.email)) {
            return count + 1;
        }
        return count;
    }, 0);


    const checked = JSON.parse(localStorage.getItem('darkTheme'))



    const items = [
        {
            key: "0",
            label: (
                <Link className="dropdownItem" href='/services'  >
                    Services
                </Link>
            ),
        },
        {
            key: "1",
            label: (
                <Link className="dropdownItem" href='/about-us'  >
                    About Us
                </Link>
            ),
        },

        user &&
        {
            key: "2",
            label: (
                <Link className="dropdownItem" href='/profile'  >
                    Dashboard
                </Link>
            ),
        },


        user?.role === 'customer' &&
        {
            key: '3', label: (
                <li style={{ cursor: 'pointer' }} onClick={showDrawer}>
                    <Badge count={unreadCount ? unreadCount : 0}>
                        <BellTwoTone style={{ fontSize: '28px', color: 'white' }} />

                    </Badge>
                </li>
            )
        },



        user ?

            {
                key: "4",
                label: (
                    <Button onClick={logOut} type="primary" danger>
                        Logout
                    </Button>
                ),
            }
            :
            {
                key: "5",
                label: (
                    <Link className="dropdownItem" href='/auth/signin'  >
                        Sign In
                    </Link>
                ),
            },
        {
            key: "6",
            label: (
                <li><Switch defaultChecked={checked} onChange={onChange} /></li>
            )
        }


    ];





    return (
        <AntHeader

            style={{
                background: "linear-gradient(to right, #000875, #007BFF)",
                height: 'auto',
                padding: 0,
                position: 'sticky',
                top: 0,
                zIndex: 99
            }}
        >
            <Row
                justify="space-between"
                align="middle"
                style={{
                    height: "100%",
                }}
            >
                <div className="header">
                    <Link href='/'>
                        {/* <h1 className="headerText"  >AUTO-MEDICS</h1> */}
                        <img className="headerImg" src="https://i.ibb.co/mBCCPbc/image-removebg-preview-2.png" alt="" />
                    </Link>
                    <div>
                        <div className="header-menu">
                            <ul className="menu">

                                <li><Link style={{ color: "white" }} href="/services">Services</Link></li>
                                <li><Link style={{ color: "white" }} href="/about-us">About Us</Link></li>



                                {
                                    user ?
                                        <>
                                            <li><Link style={{ color: "white" }} href="/profile">Dashboard</Link></li>

                                            {
                                                user?.role === 'customer' && <li style={{ cursor: 'pointer' }} onClick={showDrawer}>
                                                    <Badge count={unreadCount ? unreadCount : 0}>
                                                        <BellOutlined style={{ fontSize: '28px', color: 'white' }} />

                                                    </Badge>
                                                </li>
                                            }

                                            <li><Button onClick={logOut} type="primary" danger>
                                                Logout
                                            </Button></li>
                                        </>
                                        :

                                        <li><Link style={{ color: "white" }} href="/auth/signin">Sign In</Link></li>

                                }
                                <li><Switch defaultChecked={checked} onChange={onChange} /></li>

                            </ul>

                            <div className="dropdown">
                                <Dropdown
                                    menu={{
                                        items,
                                    }}
                                    placement="bottomRight"
                                    arrow={{
                                        pointAtCenter: true,
                                    }}
                                >
                                    <Button><MenuFoldOutlined /></Button>
                                </Dropdown>
                            </div>
                        </div>

                    </div>
                </div>
            </Row>
            <Notification onClose={onClose} open={open} notifications={notifications} />
        </AntHeader>
    );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false })