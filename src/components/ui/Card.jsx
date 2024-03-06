import React from 'react';
import './card.css'
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic';


const ReusableCard = ({ image, name, description, price }) => {
    const darkTheme = useSelector((state) => state.darkTheme);
    return (
        // <div className={`cardStyle ${darkTheme ? 'darkBg2' : 'lightBg2'}`}>
        <div
            className={`cardStyle ${JSON.parse(darkTheme) ? 'darkBg2' : 'lightBg2'}`}

        >
            <div className='cardImageDiv'>
                <img className='cardImage' src={image} />
            </div>
            <div >
                <h4 className='cardName'>{name}</h4>
                <h4 className='cardDescription'> Price: ${price}</h4>
                <p className='cardDescription'>{description && description.length > 100 ? `${description.slice(0, 100)} . . .` : description}</p>

                <Link href='/services'> <p className='cardDescription'> <button style={{ padding: '8px 20px', fontSize: '16px' }} className='gradientButton'>See Details</button></p></Link>
            </div>
            {/* </div> */}
        </div>
    )
};
export default dynamic(() => Promise.resolve(ReusableCard), { ssr: false })