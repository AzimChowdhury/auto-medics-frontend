'use client'
import React, { useEffect, useState } from 'react';
import { Button, Rate, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { getUserInfo } from '@/helpers/auth/authHelper';
import { useGetMyReviewQuery, usePostReviewMutation } from '@/redux/api/reviewApi';
const desc = ['bad', ' below average', 'average', 'good', 'excellent'];


const Review = () => {
    const { email } = getUserInfo()
    const { data } = useGetMyReviewQuery(email)
    const [value, setValue] = useState(5);
    const [text, setText] = useState('');
    const [postReview] = usePostReviewMutation()


    useEffect(() => {
        if (data) {
            setValue(data.rating || 5);
            setText(data.comment || '');
        }
    }, [data]);


    const SubmitReview = async () => {
        if (email && value && text) {
            const data = { customerEmail: email, rating: value, comment: text }
            const res = await postReview(data).unwrap()
            if (res?.id) {
                message.success('review posted')
            } else {
                message.error('failed to post review')
            }
        }
    }


    return (
        <div style={{ width: '40%', margin: '30px auto' }}>
            <p style={{
                fontSize: '22px',
                margin: '10px 0px',
                fontWeight: '600',
                color: '#1452C2',
                textAlign: 'center'
            }}>Put your Review about Auto-Medics</p>
            <p style={{ margin: '10px 0px', textAlign: 'center' }}>
                <Rate style={{ fontSize: '40px' }} tooltips={desc} onChange={setValue} value={value} />
                {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
            </p>
            <TextArea required={true} onChange={(e) => setText(e.target.value)} style={{ border: ' 1px solid #1452C2' }} rows={8} placeholder="write your review here" maxLength={300} value={text} />
            <Button disabled={text === ''} onClick={() => SubmitReview()} type='primary' style={{ width: '100%', marginTop: '20px' }}>{data ? 'Update' : 'Post'}</Button>
        </div>
    );
};

export default Review;