'use client'
import { getUserInfo } from '@/helpers/auth/authHelper'
import { useMyProfileQuery } from '@/redux/api/userApi'
import { Button } from 'antd'
import React from 'react'
import userImage from '../../../../assets/user.jpg'
import Form from '@/components/Forms/Form'
import FormInput from '@/components/Forms/FormInput'
import './editProfile.css'
import UploadImage from '@/components/Forms/UploadImage'

function EditProfile() {
    const user = getUserInfo()

    const { data } = useMyProfileQuery({ ...user })
    const defaultValue = {
        name: data?.name || '',
        email: data?.email || '',
        contactNo: data?.contactNo || '',
        address: data?.address || '',
    }


    const onSubmit = async (data) => {
        try {
            console.log(data)
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
                        <UploadImage type='file' />
                    </div>
                    <div className='inputDiv'>
                        <FormInput name='name' type="text" size="larger" label="Name" />
                    </div>
                    <div className='inputDiv'>
                        <FormInput name='email' type="email" size="larger" label="Email" disabled={true} />
                    </div>
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

export default EditProfile
