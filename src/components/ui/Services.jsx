'use client'
import React from 'react'
import ReusableCard from './Card';
import { useGetServicesQuery } from '@/redux/api/serviceApi';
import { ArrowRightOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import Loading from '@/app/loading';

function Services() {

    const { data: services, isLoading } = useGetServicesQuery()
    const darkTheme = useSelector((state) => state.darkTheme);

    return (
        <div className={`${JSON.parse(darkTheme) ? 'darkBg2' : 'lightBg2'}`} style={{ padding: '30px 0px' }}>
            <h1 className='gradientHeader' style={{
                textAlign: 'center',
                fontSize: "38px",
                fontWeight: 700,
                padding: "30px 0px"
            }}>Our Top Services</h1>
            {
                isLoading && <Loading />
            }
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
                    padding: '20px 0px',
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

export default dynamic(() => Promise.resolve(Services), { ssr: false })
