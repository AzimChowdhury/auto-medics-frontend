'use client'
import { Layout } from 'antd';
import Link from 'next/link';
const { Footer } = Layout;

function FooterComponent() {
    return (
        <Footer
            style={{
                textAlign: 'center',
            }}
        >
            Auto-Medics ©2023 - All rights reserved by  <Link target='_blank' href='https://azim-profile.netlify.app/'>Faijul Azim</Link>
        </Footer>
    )
}

export default FooterComponent
