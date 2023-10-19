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
                <p className='bannerSubTitles'> Your trusted partner in the automobile world</p>
                <p className='bannerSubTitles'>Quality service is our commitment, Customer satisfaction is our priority.</p>

            </div>
        </div>
    )
}



export default Banner
