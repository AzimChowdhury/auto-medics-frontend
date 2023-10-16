'use client'

import { useGetAllReviewQuery } from "@/redux/api/reviewApi"
import { Carousel, Rate } from 'antd';
import './review.css'


function Reviews() {
    const { data } = useGetAllReviewQuery()


    return (
        data && <div style={{ backgroundColor: "#EDEFF6", padding: '20px' }}>
            <h1 className="reviewTitle">
                What Customers Says About Us  ?
            </h1>

            <Carousel autoplay className="reviewWidth">

                {
                    data?.slice(0, 5)?.map(review => {
                        return (
                            <div key={review?.id}>
                                <div className="reviewContainer" >
                                    <div style={{ margin: '20px' }}>
                                        <img className="reviewImage" src={review?.customer?.image} alt="" />
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

export default Reviews
