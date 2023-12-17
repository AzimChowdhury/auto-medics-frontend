'use client'
import dynamic from 'next/dynamic'
import './compo-about.css'
import { useSelector } from 'react-redux';

function News() {
    const darkTheme = useSelector((state) => state.darkTheme);
    return (
        <div className={`${JSON.parse(darkTheme) ? 'darkBg1' : 'lightBg1'}`} style={{ padding: "30px 0px" }}>
            <h1 style={{ textAlign: 'center', paddingTop: '50px', zIndex: '99' }} className='aboutHeader gradientHeader'>Latest News of AutoMobile Industry</h1>
            <h1 style={{ textAlign: 'center', paddingTop: '25px' }} className='aboutHeader gradientHeader'>The garage of the future</h1>
            <p style={{ textAlign: 'center', fontSize: '24px', paddingTop: '25px' }}> The top innovations experts predict will be a reality in auto repair centres by 2050:</p>
            <div style={{ marginTop: '-10px' }} className='aboutContainer'>
                <img className='aboutImage' src="https://i.ibb.co/0jF8Q3y/fs19-dl-garageofthefuture-850.jpg" alt="" />
                <div className='aboutBody'>

                    <p className='aboutTexts'>
                        <ul>


                            <li>Holographic and augmented reality (AR) technology</li>
                            <li>Advanced robotics to assist with maneuvering and adjustment of vehicles</li>
                            <li>3D printing of car parts to improve turnaround time for repairs</li>
                            <li>Self-diagnosing cars</li>
                            <li>Advanced Security Systems: High-tech surveillance, biometric access control, and AI-driven security measures will protect both customer vehicles</li>
                            <li>Innovative staff training areas for mechanics to learn as technology evolves</li>
                        </ul>
                    </p>
                </div>
            </div>


            <div style={{ marginTop: '-100px' }} className='aboutContainer cs'>
                <img className='aboutImage' src="https://i.ibb.co/q08ZcjD/21-b5c2a3bc-6a48-4be0-a8f0-985bf47c0e1a.png" alt="" />
                <div className='aboutBody'>

                    <p className='aboutTexts'>
                        <ul>


                            <li>Specialized diagnostic tools and software for self-driving car systems</li>
                            <li>Charging stations for electric vehicles, with the capacity for fast-charging technology</li>
                            <li>Sensors on vehicles providing real-time data for anticipating and preventing potential issues</li>
                            <li>Mechanics trained in VR environments to simulate complex repair scenarios</li>
                            <li>AI-driven customer service bots providing instant updates and personalized recommendations</li>
                            <li>Drones used for quick and thorough inspections of vehicles, especially for hard-to-reach areas</li>
                        </ul>
                    </p>
                </div>
            </div>


        </div>
    )
}

export default dynamic(() => Promise.resolve(News), { ssr: false })