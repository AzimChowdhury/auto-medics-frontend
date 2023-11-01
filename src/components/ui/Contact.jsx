'use client'
/* eslint-disable react/no-unescaped-entities */
import './L&C.css'
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';

function Contact() {
    const darkTheme = useSelector((state) => state.darkTheme);
    return (
        <div className={`lcContainer cs ${JSON.parse(darkTheme) ? 'darkBg2' : 'lightBg2'}`}>
            <img className='lcImage' src="https://i.ibb.co/zX61VtX/image.png" alt="" />
            <div className='lcContent'>
                <h1 className='gradientHeader lcHeader'>Don't be shy Contact us anytime</h1>
                <p className='wideP'>24/7 Call Service</p>
                <p className='wideP'>+880 1585 * * * * * *</p>
                <p className='wideP'>Email- auto-medics@gmail.com</p>
                <p className='wideP'>Postal Code - 5464</p>
            </div>
        </div>
    )
}

export default dynamic(() => Promise.resolve(Contact), { ssr: false })
