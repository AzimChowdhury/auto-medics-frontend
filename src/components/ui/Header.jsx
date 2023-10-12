'use client'
import { Avatar, Button, Col, Dropdown, Layout, Menu, Row, Space } from "antd";
import { MenuFoldOutlined, UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Link from "next/link";
import './header.css'
const { Header: AntHeader } = Layout;

const Header = () => {
    const router = useRouter();

    const logOut = () => {
        router.push("/login");
    };

    const items = [
        {
            key: "0",
            label: (
                <Link className="dropdownItem" href='/auth/signin'  >
                    Sign In
                </Link>
            ),
        },
        // {
        //     key: "1",
        //     label: (
        //         <Button onClick={logOut} type="text" danger>
        //             Logout
        //         </Button>
        //     ),
        // },
    ];
    return (
        <AntHeader

            style={{
                background: "#007BFF",
                height: 'auto',
                padding: 0
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
                    <div>
                        <h1 className="headerText"  >AUTO-MEDICS</h1>
                    </div>
                    <div>
                        <div class="header-menu">
                            <ul class="menu">
                                <li><Link style={{ color: "white" }} href="/auth/signin">Sign In</Link></li>
                            </ul>

                            <div class="dropdown">
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

export default Header;