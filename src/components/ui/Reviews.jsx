'use client'

import { useGetAllReviewQuery } from "@/redux/api/reviewApi"
import { Carousel, Rate } from 'antd';
import './review.css'
import image from '../../assets/user.jpg'
import { useSelector } from 'react-redux';
import dynamic from "next/dynamic";


function Reviews() {
    const { data } = useGetAllReviewQuery()
    const darkTheme = useSelector((state) => state.darkTheme);


    return (
        data && <div className={`${JSON.parse(darkTheme) ? 'darkBg2' : 'lightBg2'}`} style={{ padding: '40px' }}>
            <h1 className="reviewTitle gradientHeader">
                What Customers Says About Us  ?
            </h1>

            <Carousel autoplay className="reviewWidth">

                {
                    data?.slice(0, 5)?.map(review => {
                        return (
                            <div key={review?.id}>
                                <div className={`reviewContainer ${JSON.parse(darkTheme) ? 'darkBg1' : 'lightBg1'}`} >
                                    <div style={{ margin: '20px' }}>
                                        <img className="reviewImage" src={review?.customer?.image ? review?.customer?.image : image} alt="" />
                                        <p className="reviewName">{review?.customer?.name}</p>
                                    </div>
                                    <div>
                                        <Rate disabled value={review?.rating} style={{ fontSize: '24px' }} />
                                        <p>{review?.comment}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </Carousel>
        </div>
    )
}

export default dynamic(() => Promise.resolve(Reviews), { ssr: false })
