"use client"
import { Layout } from 'antd'
import Header from './Header';
import FooterComponent from './Footer';
const { Content } = Layout

const Contents = ({ children }) => {
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
                Auto-Medics Dashboard
            </h1>

            <div style={{ padding: '20px' }}> {children}</div>

        </Content>
    );
};

export default Contents;