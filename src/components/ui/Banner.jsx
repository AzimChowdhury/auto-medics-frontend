import React from 'react'
import './banner.css'

function Banner() {

    const divStyle = {
        backgroundImage: `url(https://i.ibb.co/94LCR9G/banner.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '450px',
        color: 'white',
    };
    return (
        <div style={divStyle}>
            <h1 className='bannerHeader'>AUTO MEDICS</h1>
            <div >
                <p className='bannerSubTitles'>The best car clinic nationwide</p>
                <p className='bannerSubTitles'> Your trusted partner in automotive care, ensuring your vehicles longevity and performance.</p>
                <p className='bannerSubTitles'>Where your cars health is our priority, and quality service is our commitment.</p>

            </div>
        </div>
    )
}



export default Banner
