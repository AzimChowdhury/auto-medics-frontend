"use client"
import { Layout } from 'antd'
import Header from './Header';
import FooterComponent from './Footer';
const { Content } = Layout

const Contents = ({ children }) => {
    return (
        <Content style={{ minHeight: "100vh", marginTop: '30px' }}>
            {/* <Header /> */}

            <div style={{ padding: '20px' }}> {children}</div>

        </Content>
    );
};

export default Contents;