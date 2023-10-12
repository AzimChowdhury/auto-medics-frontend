'use client'
import { Col, Row } from 'antd';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import ReusableCard from './Card';

function Services() {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div>
            <h2 style={{
                color: "#007BFF",
                textAlign: 'center',
                fontSize: "30px",
                padding: "40px 0px"
            }}>Our Top Services</h2>
            <div className='cardContainer'>
                {
                    services?.map(service => <>
                        <ReusableCard
                            name={service?.name}
                            description={service?.description}
                            image={service?.image}
                        />
                    </>
                    )
                }
            </div>
        </div>
    )
}

export default Services
