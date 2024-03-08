"use client"
import { Layout } from 'antd'
import Header from './Header';
import FooterComponent from './Footer';
import { getUserInfo } from '@/helpers/auth/authHelper';
const { Content } = Layout
import dynamic from 'next/dynamic';
import { HomeTwoTone } from '@ant-design/icons';
import Link from 'next/link';

const Contents = ({ children }) => {
    const { role } = getUserInfo()
    return (
        <Content style={{ minHeight: "100vh", marginTop: '20px', marginLeft: '25px' }}>

            {/* <Link href='/' style={{ fontSize: "35px", marginLeft: "20px", display: "inline-block" }}><HomeTwoTone /></Link> */}
            <h1 style={{
                textAlign: 'center',
                fontSize: '30px',
                background: 'linear-gradient(90deg, #000875, #2387fa)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
            }}>
                Auto-Medics {role && role?.charAt(0)?.toUpperCase() + role?.slice(1)} Dashboard
            </h1>

            <div style={{ padding: '20px' }}> {children}</div>

        </Content>
    );
};

export default dynamic(() => Promise.resolve(Contents), { ssr: false })