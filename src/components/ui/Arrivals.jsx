'use client'
import './about.css'
import { useSelector } from 'react-redux';

function Arrivals() {
    const darkTheme = useSelector((state) => state.darkTheme);
    return (
        <div>
            <div className={`aboutContainer ${darkTheme ? 'darkBg2' : 'lightBg2'}`}>
                <img className='aboutImage' src="https://i.ibb.co/Q9gStNN/car-wash-tech-1000x600.jpg" alt="" />
                <div className='aboutBody'>
                    <h1 style={{ fontSize: '35px', margin: '15px 0px' }} className='aboutHeader gradientHeader'>New Arrivals</h1>
                    <h1 style={{ fontSize: '25px', margin: '5px 0px' }} className='aboutHeader gradientHeader'>New automatic touch less rollover car washing machine</h1>
                    <p className='aboutTexts'>Introducing our state-of-the-art Automatic Touchless Rollover Car Washing Machine at our garage. Experience cutting-edge technology and meticulous car care without a single touch. This innovative system ensures a spotless, scratch-free clean for your vehicle, delivering unmatched convenience and pristine results. Your car deserves nothing less than the best.</p>
                </div>
            </div>
        </div>
    )
}

export default Arrivals
