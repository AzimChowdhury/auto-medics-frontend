import React from 'react'

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
            <h1 style={{
                textAlign: 'center',
                paddingTop: '100px',
                fontSize: '50px'
            }}>AUTO MEDICS</h1>
            <div >
                <p style={{
                    textAlign: 'center',
                    paddingTop: '40px',
                    fontSize: '25px'
                }}>The best car clinic nationwide</p>
                <p style={{
                    textAlign: 'center',
                    paddingTop: '20px',
                    fontSize: '25px'
                }}> Your trusted partner in automotive care, ensuring your vehicles longevity and performance.</p>
                <p style={{
                    textAlign: 'center',
                    paddingTop: '20px',
                    fontSize: '25px'
                }}>Where your cars health is our priority, and quality service is our commitment.</p>

            </div>
        </div>
    )
}



export default Banner
