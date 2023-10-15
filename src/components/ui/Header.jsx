'use client'
import { Avatar, Button, Col, Dropdown, Layout, Menu, Row, Space, message } from "antd";
import { MenuFoldOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import './header.css'
import { authKey } from "@/constants/storageKey";
import { getUserInfo } from "@/helpers/auth/authHelper";
import { useRouter } from "next/navigation";
const { Header: AntHeader } = Layout;
import dynamic from "next/dynamic";

const Header = () => {
    const router = useRouter()
    const user = getUserInfo()

    const logOut = () => {
        localStorage.removeItem(authKey)
        message.success('log out successful')
        router.push('/auth/signin')
    };

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
        {
            key: "2",
            label: (
                <Link className="dropdownItem" href='/profile'  >
                    Dashboard
                </Link>
            ),
        },

        user ?
            {
                key: "3",
                label: (
                    <Button onClick={logOut} type="text" danger>
                        Logout
                    </Button>
                ),
            } :
            {
                key: "4",
                label: (
                    <Link className="dropdownItem" href='/auth/signin'  >
                        Sign In
                    </Link>
                ),
            },



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
                        <h1 className="headerText"  >AUTO-MEDICS</h1>
                    </Link>
                    <div>
                        <div className="header-menu">
                            <ul className="menu">

                                <li><Link style={{ color: "white" }} href="/services">Services</Link></li>
                                <li><Link style={{ color: "white" }} href="/about-us">About Us</Link></li>
                                <li><Link style={{ color: "white" }} href="/profile">Dashboard</Link></li>


                                {
                                    user ?
                                        <li><Button onClick={logOut} type="primary" danger>
                                            Logout
                                        </Button></li>
                                        :

                                        <li><Link style={{ color: "white" }} href="/auth/signin">Sign In</Link></li>
                                }

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
        </AntHeader>
    );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false })