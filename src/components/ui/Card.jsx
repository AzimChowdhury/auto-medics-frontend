import React from 'react';
import Image from 'next/image';
import './card.css'
import { Button } from 'antd';


const ReusableCard = ({ image, name, description }) => (
    <div className='cardStyle'>
        <div>
            <Image className='cardImage' width={100} height={100} alt="" src={image} />
        </div>
        <div >
            <h4 className='cardName'>{name}</h4>
            <p className='cardDescription'>{description}</p>
            <p className='cardDescription'> <Button type='primary'>See Details</Button></p>
        </div>
    </div>
);
export default ReusableCard;