'use client'
import { getUserInfo } from '@/helpers/auth/authHelper'
import { useMyProfileQuery } from '@/redux/api/userApi'
import Image from 'next/image'
import React from 'react'
import userImage from '../../../assets/user.jpg';
import './profile.css'
import { Button } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import Link from 'next/link'

function Profile() {
    const user = getUserInfo()
    const { data, isLoading } = useMyProfileQuery({ ...user })

    return (
        <div>
            <div className='profileContainer'>
                <h1 >My Profile</h1>
                <div>
                    <Image className='profileImage' src={data?.image ? data?.image : userImage} alt='image' width={100} height={100} />
                    <p className='profileName'>Name : {data?.name ? data?.name : 'unknown'}</p>

                    <p className='profileText'>Email:{data?.email ? data?.email : 'unknown'}</p>
                    <p className='profileText'>Contact No: {data?.contactNo ? data?.contactNo : "unknown"}</p>
                    <p className='profileText'>Address: {data?.address ? data?.address : 'unknown'}</p>
                </div>
                <div>
                    <Link href={'/profile/edit'}><Button className='profileButton' type='primary'><EditOutlined /> Edit </Button></Link>
                </div>
            </div>
        </div>
    )
}

export default Profile
