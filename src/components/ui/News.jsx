'use client'
import dynamic from 'next/dynamic'
import './compo-about.css'
import { useSelector } from 'react-redux';

function News() {
    const darkTheme = useSelector((state) => state.darkTheme);
    return (
        <div className={`${JSON.parse(darkTheme) ? 'darkBg1' : 'lightBg1'}`} style={{ padding: "30px 0px" }}>
            <h1 style={{ textAlign: 'center', paddingTop: '50px', zIndex: '99' }} className='aboutHeader gradientHeader'>Latest News of AutoMobile Industry</h1>
            <h1 className='aboutHeader gradientHeader'>The garage of the future</h1>

            <div style={{ marginTop: '-10px' }} className='aboutContainer'>
                <img className='aboutImage' src="https://i.ibb.co/0jF8Q3y/fs19-dl-garageofthefuture-850.jpg" alt="" />
                <div className='aboutBody'>

                    <p className='aboutTexts'>
                        <ul>
                            The top innovations experts predict will be a reality in auto repair centres by 2050:

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
        </div>
    )
}

export default dynamic(() => Promise.resolve(News), { ssr: false })