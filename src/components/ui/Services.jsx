'use client'
import React from 'react'
import ReusableCard from './Card';
import { useGetServicesQuery } from '@/redux/api/serviceApi';
import { ArrowRightOutlined } from '@ant-design/icons';
import Link from 'next/link';

function Services() {

    const { data: services } = useGetServicesQuery()

    return (
        <div>
            <h2 className='gradientHeader' style={{
                textAlign: 'center',
                fontSize: "42px",
                fontWeight: 700,
                padding: "40px 0px"
            }}>Our Top Services</h2>
            <div className='cardContainer'>
                {
                    services?.slice(0, 6)?.map(service => (
                        <ReusableCard
                            key={service.id}
                            name={service?.name}
                            price={service?.price}
                            description={service?.description}
                            image={service?.image}
                        />
                    )
                    )
                }
            </div>


            <div style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '20px',
            }}>
                <Link href="/services" style={{

                    textDecoration: 'none',

                }}>
                    <button className='gradientButton'  >
                        See All Services  <ArrowRightOutlined />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Services
