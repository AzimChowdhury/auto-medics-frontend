'use client'
import { Button, message } from 'antd'
import Form from '@/components/Forms/Form'
import FormInput from '@/components/Forms/FormInput'
import '../../../profile/edit/editProfile.css'
import UploadImage from '@/components/Forms/UploadImage'
import uploadToImgbb from '@/utils/uploadToImgbb'
import { useRouter } from 'next/navigation'
import dynamic from "next/dynamic";
import { useCreateSpecialistMutation } from '@/redux/api/authApi'


function CreateSpecialist() {
    const router = useRouter()
    const [CreateSpecialist] = useCreateSpecialistMutation()



    const onSubmit = async (submitData) => {
        try {
            const obj = { ...submitData };
            const file = obj["file"];
            const res = await uploadToImgbb(file)

            if (res?.data?.url) {
                const image = res.data.url
                const { name, email, contactNo, address, password, skill } = submitData
                const uploadData = { name, contactNo, address, image: image, email, password, skill }
                const response = await CreateSpecialist(uploadData).unwrap()
                if (response?.id) {
                    message.success('Specialist Created Successfully')
                    router.push('/admin/manage-specialists')
                } else {
                    message.error('failed to create specialist')
                }
            } else {
                message.error('image upload failed')
            }

        } catch (error) {
            console.log(error)
            message.error('something went wrong')
        }
    }
    return (
        <div>
            <div className='editProfileContainer'>
                <h1 style={{ textAlign: 'center' }}>Create Specialist</h1>
                <Form submitHandler={onSubmit} >
                    <div className='inputDiv' >
                        <UploadImage type='file' name='file' />
                    </div>

                    <div className='inputDiv'>
                        <FormInput name='name' type="text" size="larger" label="Name" required={true} />
                    </div>
                    <div className='inputDiv'>
                        <FormInput name='email' type="email" size="larger" label="Email" required={true} />
                    </div>
                    <div className='inputDiv'>
                        <FormInput name='password' type="password" size="larger" label="Password" required={true} />
                    </div>
                    <div className='inputDiv'>
                        <FormInput name='skill' type="text" size="larger" label="Skills" required={true} />
                    </div>
                    <div className='inputDiv'>
                        <FormInput name='contactNo' type="text" size="larger" label="Contact No" required={true} />
                    </div>
                    <div className='inputDiv'>
                        <FormInput name='address' type="text" size="larger" label="Address" required={true} />
                    </div>

                    <Button className='profileButton' htmlType='submit' type='primary'> Create </Button>
                </Form>


            </div>
        </div>
    )
}

export default dynamic(() => Promise.resolve(CreateSpecialist), { ssr: false })
