'use client'
/* eslint-disable react/no-unescaped-entities */
import './L&C.css'
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';

function Location() {
    const darkTheme = useSelector((state) => state.darkTheme);


    return (
        <div className={`lcContainer ${JSON.parse(darkTheme) ? 'darkBg1' : 'lightBg1'}`}>
            <img className='lcImage' src="https://i.ibb.co/GMVTFMM/map-with-location-pin-vector.jpg" alt="" />
            <div className='lcContent'>
                <h1 className='gradientHeader lcHeader'>Don't hesitate, <br /> Visit Us anytime</h1>
                <p className='wideP'>Auto-Medics Avenue, Business Square</p>
                <p className='wideP'>26/6 Agrabad, Chittagong</p>
                <p className='wideP'>27 No. Ward</p>
                <p className='wideP'>Chittagong City Corporation</p>
            </div>
        </div>
    )
}

export default dynamic(() => Promise.resolve(Location), { ssr: false })
