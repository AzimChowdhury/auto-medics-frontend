'use client'
import { Avatar, Button, Col, Dropdown, Layout, Row, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Link from "next/link";
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
                <Button onClick={logOut} type="text" danger>
                    Logout
                </Button>
            ),
        },
    ];
    return (
        <AntHeader

            style={{
                background: "#007BFF",
            }}
        >
            <Row
                justify="space-between"
                align="middle"
                style={{
                    height: "100%",
                }}
            >
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    margin: "0px 5%"
                }}>
                    <div>
                        <h1 style={{ margin: "0", color: 'white' }}>AUTO-MEDICS</h1>
                    </div>
                    <div>
                        <Link href='/auth/signin'>
                            <p style={{ margin: "0", color: 'white', fontSize: '18px' }}>Sing In</p>
                        </Link>
                    </div>
                </div>
            </Row>
        </AntHeader>
    );
};

export default Header;