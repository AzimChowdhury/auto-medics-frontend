import React from 'react';
import './card.css'
import Link from 'next/link';


const ReusableCard = ({ image, name, description, price }) => (
    <div className='cardStyle'>
        <div>
            <img className='cardImage' src={image} />
        </div>
        <div >
            <h4 className='cardName'>{name}</h4>
            <h4 className='cardDescription'> Price: ${price}</h4>
            <p className='cardDescription'>{description?.length > 50 ? <>{description?.split(0, 50)} . . .</> : description}</p>
            <Link href='/services'> <p className='cardDescription'> <button style={{ padding: '5px 10px', fontSize: '16px' }} className='gradientButton'>See Details</button></p></Link>
        </div>
    </div>
);
export default ReusableCard;