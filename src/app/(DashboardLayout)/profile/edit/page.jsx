'use client'
import { getUserInfo } from '@/helpers/auth/authHelper'
import { useMyProfileQuery, useUpdateProfileMutation } from '@/redux/api/userApi'
import { Button, message } from 'antd'
import React, { useState } from 'react'
import userImage from '../../../../assets/user.jpg'
import Form from '@/components/Forms/Form'
import FormInput from '@/components/Forms/FormInput'
import './editProfile.css'
import UploadImage from '@/components/Forms/UploadImage'
import uploadToImgbb from '@/utils/uploadToImgbb'
import { useRouter } from 'next/navigation'
import dynamic from "next/dynamic";


function EditProfile() {
    const user = getUserInfo()
    const router = useRouter()
    const [updateProfile] = useUpdateProfileMutation()

    const { data } = useMyProfileQuery({ ...user })
    const defaultValue = {
        name: data?.name || '',
        email: data?.email || '',
        contactNo: data?.contactNo || '',
        address: data?.address || '',
        image: data?.image || '',
        skill: data?.skill || ''
    }


    const onSubmit = async (submitData) => {
        try {
            const obj = { ...submitData };
            const file = obj["file"];
            const res = await uploadToImgbb(file)

            if (res?.data?.url) {
                const image = res.data.url
                const { name, email, contactNo, address, skill } = submitData
                const uploadData = { name, contactNo, address, image: image, role: user?.role, skill, email }
                const response = await updateProfile(uploadData).unwrap()
                if (response?.id) {
                    message.success('profile information updated')
                    router.push('/profile')
                } else {
                    message.error('failed to update profile information')
                }
            } else {
                message.error('image upload failed')
            }

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <div className='editProfileContainer'>
                <h1 >Update Profile</h1>
                <Form submitHandler={onSubmit} defaultValues={defaultValue}>
                    <div className='inputDiv' >
                        <UploadImage type='file' name='file' defaultImage={data?.image ? data?.image : userImage} />
                    </div>





                    <div className='inputDiv'>
                        <FormInput name='name' type="text" size="larger" label="Name" />
                    </div>
                    <div className='inputDiv'>
                        <FormInput name='email' type="email" size="larger" label="Email" disabled={true} />
                    </div>
                    {
                        user?.role === 'specialist' && <div className='inputDiv'>
                            <FormInput name='skill' type="text" size="larger" label="Skill" />
                        </div>
                    }
                    <div className='inputDiv'>
                        <FormInput name='contactNo' type="text" size="larger" label="Contact No" />
                    </div>
                    <div className='inputDiv'>
                        <FormInput name='address' type="text" size="larger" label="Address" />
                    </div>

                    <Button className='profileButton' htmlType='submit' type='primary'> Update </Button>
                </Form>


            </div>
        </div>
    )
}

export default dynamic(() => Promise.resolve(EditProfile), { ssr: false })
