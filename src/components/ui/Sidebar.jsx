"use client";

import { useState } from "react";
import { Layout, Menu } from "antd";
import Link from "next/link";
import { getUserInfo } from "@/helpers/auth/authHelper";
import { sidebarItems } from "@/constants/sidebarItems";

const { Sider } = Layout;
const menuStyle = {
    background: 'transparent',
    fontSize: '16px',
    color: 'white'
};

const SideBar = () => {

    const { role } = getUserInfo()
    return (
        <Sider
            collapsible={true}
            collapsedWidth={40}
            width={250}
            style={{
                overflow: "auto",
                height: "100vh",
                position: "fixed", // Key change for overlay behavior
                left: 0,
                top: 0,
                bottom: 0,
                background: "linear-gradient(to bottom, #000875,#020c9c, #007BFF)",
                zIndex: 1000, // Ensure overlay with high z-index
            }}
        >
            <div
                style={{
                    color: "white",
                    fontSize: "25px",
                    textAlign: "center",
                    fontWeight: "bold",
                    margin: "15px 0px",
                }}
            >
                <Link style={{ color: 'white' }} href={'/'}>
                    <img style={{
                        width: '90%',
                        height: 'auto',
                    }} src="https://i.ibb.co/mBCCPbc/image-removebg-preview-2.png" alt="" />
                </Link>
            </div>
            <Menu
                theme="dark"
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={sidebarItems(role)}
                style={menuStyle}
            />






        </Sider>
    );
};

export default SideBar;