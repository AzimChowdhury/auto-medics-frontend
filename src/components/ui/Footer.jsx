'use client'
import { Layout } from 'antd';
import Link from 'next/link';
const { Footer } = Layout;
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';

function FooterComponent() {
    const date = new Date()
    const year = date.getFullYear()
    const darkTheme = useSelector((state) => state.darkTheme);
    return (
        <Footer
            className={`${JSON.parse(darkTheme) ? 'darkBg1' : 'lightBg1'}`}
            style={{
                padding: '30px 0px',
                fontSize: '18px',
                textAlign: 'center',
            }}
        >
            Auto-Medics ©{year} - All rights reserved by  <Link style={{ fontWeight: 500 }} target='_blank' href='https://azim-profile.netlify.app/'>Faijul Azim</Link>
        </Footer>
    )
}

export default dynamic(() => Promise.resolve(FooterComponent), { ssr: false })
