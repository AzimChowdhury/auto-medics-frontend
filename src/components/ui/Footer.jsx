'use client'
import { Layout } from 'antd';
import Link from 'next/link';
const { Footer } = Layout;

function FooterComponent() {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <Footer
            style={{
                fontSize: '20px',
                textAlign: 'center',
            }}
        >
            Auto-Medics ©{year} - All rights reserved by  <Link style={{ fontWeight: 500 }} target='_blank' href='https://azim-profile.netlify.app/'>Faijul Azim</Link>
        </Footer>
    )
}

export default FooterComponent
