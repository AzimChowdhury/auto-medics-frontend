'use client'
import Link from 'next/link'
import './about.css'
import { useSelector } from 'react-redux';

function About() {
    const darkTheme = useSelector((state) => state.darkTheme);


    return (
        <div className={`aboutContainer ${darkTheme ? 'darkBg2' : 'lightBg2'}`}>
            <img className='aboutImage' src="https://i.ibb.co/ynVyDC3/F0331238-Car-service-centre.jpg" alt="" />
            <div className='aboutBody'>
                <p className='aboutHeader gradientHeader'>Who are we ?</p>
                <p className='aboutTexts'>
                    We are one of the best automobile service providing institute nationwide and the best in the city. We served all the automobile problem with efficiency. We are famous for our quality service and customer satisfaction.
                </p>
                <Link href='/services'><button className='gradientButton'>Our services</button></Link>
            </div>

        </div>
    )
}

export default About
