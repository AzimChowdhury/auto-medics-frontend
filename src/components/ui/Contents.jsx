"use client"
import { Layout } from 'antd'
import Header from './Header';
import FooterComponent from './Footer';
import { getUserInfo } from '@/helpers/auth/authHelper';
const { Content } = Layout
import dynamic from 'next/dynamic';

const Contents = ({ children }) => {
    const { role } = getUserInfo()
    return (
        <Content style={{ minHeight: "100vh", marginTop: '20px' }}>
            <h1 style={{
                textAlign: 'center',
                fontSize: '35px',
                background: 'linear-gradient(90deg, #000875, #2387fa)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
            }}>
                Auto-Medics {role && role?.charAt(0)?.toUpperCase() + role?.slice(1)} Dashboard
            </h1>

            <div style={{ padding: '20px' }}> {children}</div>

        </Content>
    );
};

export default dynamic(() => Promise.resolve(Contents), { ssr: false })