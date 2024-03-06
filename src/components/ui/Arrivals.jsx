'use client'
import './compo-about.css'
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';

function Arrivals() {
    const darkTheme = useSelector((state) => state.darkTheme);

    return (
        <div className={` ${JSON.parse(darkTheme) ? 'darkBg1' : 'lightBg1'}`}>

            <h1 style={{ textAlign: 'center', paddingTop: '50px', zIndex: '99' }} className='aboutHeader gradientHeader'>New arrivals in our garage</h1>
            <div className={`aboutContainer `}>

                <img className='aboutImage' src="https://i.ibb.co/Q9gStNN/car-wash-tech-1000x600.jpg" alt="" />
                <div className='aboutBody'>

                    <h1 style={{ fontSize: '25px', margin: '5px 0px' }} className='aboutHeader gradientHeader'>New automatic touch less rollover car washing machine</h1>
                    <p className='aboutTexts'>Introducing our state-of-the-art Automatic Touchless Rollover Car Washing Machine at our garage. Experience cutting-edge technology and meticulous car care without a single touch. This innovative system ensures a spotless, scratch-free clean for your vehicle, delivering unmatched convenience and pristine results. Your car deserves nothing less than the best.</p>
                </div>
            </div>



            <div className={`aboutContainer cs `}>

                <img className='aboutImage' src="https://i.ibb.co/G2bZB6s/Telematics-obstacles.jpg" alt="" />
                <div className='aboutBody'>

                    <h1 style={{ fontSize: '25px', margin: '5px 0px' }} className='aboutHeader gradientHeader'>New Telematics Service to monitor your vehicle</h1>
                    <p className='aboutTexts'>Offer telematics services that allow customers to track their vehicles health and performance in real-time. This can include features like remote diagnostics, maintenance reminders, and GPS tracking. These services can enhance customer experience and provide valuable data for preventive maintenance.</p>
                </div>
            </div>
        </div>
    )
}

export default dynamic(() => Promise.resolve(Arrivals), { ssr: false })
