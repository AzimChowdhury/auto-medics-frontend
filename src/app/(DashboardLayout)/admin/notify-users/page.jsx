'use client'
import Form from '@/components/Forms/Form'
import FormInput from '@/components/Forms/FormInput'
import { useCreateNotificationMutation } from '@/redux/api/notificationApi'
import { Button, message } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React, { useState } from 'react'

function NotifyUsers() {
    const [text, setText] = useState('');
    const [createNotification] = useCreateNotificationMutation()

    const onSubmit = async (data) => {
        const submitData = { title: data?.title, details: text }
        console.log(submitData)
        const res = await createNotification(submitData).unwrap()
        if (res?.id) {
            message.success('all user notified successfully')
        } else {
            message.error('failed to notify')
        }
    }
    return (
        <div style={{ width: '40%', margin: '20px auto' }}>
            <h1 className='gradientHeader' style={{ textAlign: 'center', margin: '10px 0px' }}>Notify all the Customers</h1>
            <Form submitHandler={onSubmit}>
                <FormInput name='title' type="text" size="larger" label="Title" required={true} />
                <TextArea style={{ margin: "15px 0px" }} required={true} onChange={(e) => setText(e.target.value)} rows={4} placeholder="write details here" maxLength={150} value={text} />
                <Button style={{ width: '100%', }} type='primary' htmlType='submit'>Notify</Button>
            </Form>
        </div>
    )
}

export default NotifyUsers
