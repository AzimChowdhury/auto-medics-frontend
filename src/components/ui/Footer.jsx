'use client'
import { Layout } from 'antd';
import Link from 'next/link';
const { Footer } = Layout;
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import './footer.css';


function FooterComponent() {
    const date = new Date()
    const year = date.getFullYear()
    const darkTheme = useSelector((state) => state.darkTheme);
    return (
        <Footer
            className={`${JSON.parse(darkTheme) ? 'darkBg2' : 'lightBg2'}`}
        >
            <div className='footer-container'>
                <div>
                    <p>Address</p>
                </div>
                <div>
                    <p>Links</p>
                </div>
                <div>
                    <p>Support</p>
                </div>
                <div>
                    <p>Follow us</p>
                </div>
            </div>



            <p style={{ textAlign: 'center' }}>Auto-Medics ©{year} - All rights reserved by  <Link style={{ fontWeight: 500 }} target='_blank' href='https://azim-profile.netlify.app/'>Faijul Azim</Link> </p>
        </Footer>
    )
}

export default dynamic(() => Promise.resolve(FooterComponent), { ssr: false })
