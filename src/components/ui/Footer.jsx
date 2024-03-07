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
                <div className='footerSections'>
                    <div className='footerImgContainer'>
                        <img className='footerImg' src="https://i.ibb.co/g9H82G8/Picture1.png" alt="" />
                        <p>Auto-Medics Avenue</p>
                        <p>26/6 Agrabad, Chittagong</p>
                        <p>27 No. Ward</p>
                        <p>Chittagong City.</p>
                    </div>
                </div>
                <div className='footerSections'>
                    <p>Links</p>
                    <div className='footerOptions'>
                        <p>Services</p>
                        <p>About Us</p>
                        <p>Terms and Conditions</p>
                        <p>Refund policy</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
                <div className='footerSections'>
                    <p>Support</p>
                    <div className='footerOptions'>
                        <p>auto-medics@gmail.com</p>
                        <p>+880 1839-703806</p>
                        <p>(Available : Sat - Thu, 10:00 AM to 10:00 PM)</p>
                    </div>
                </div>
                <div className='footerSections'>
                    <p>Follow us</p>
                    <img className='socialIcons' src="https://i.ibb.co/3WtFMhj/Picture111.png" alt="" />
                </div>
            </div>



            <p className='copyright'>Auto-Medics ©{year} - All rights reserved by  <Link style={{ fontWeight: 500 }} target='_blank' href='https://azim-profile.netlify.app/'>Faijul Azim</Link> </p>
        </Footer>
    )
}

export default dynamic(() => Promise.resolve(FooterComponent), { ssr: false })
