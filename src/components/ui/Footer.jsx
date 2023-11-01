'use client'
import { Layout } from 'antd';
import Link from 'next/link';
const { Footer } = Layout;
import dynamic from 'next/dynamic';

function FooterComponent() {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <Footer
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
