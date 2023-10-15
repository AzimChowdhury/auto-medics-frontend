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
import FormSelectField from '@/components/Forms/FormSelectField'
import { useGetSpecialistsQuery } from '@/redux/api/userApi'
import { useCreateServicesMutation } from '@/redux/api/serviceApi'


function CreateService() {
    const router = useRouter()
    const { data } = useGetSpecialistsQuery()
    const [createServices] = useCreateServicesMutation()

    const selectOptions = data?.map(item => {
        return {
            label: `${item?.name} ,  Skill: ${item?.skill}`,
            value: item?.id
        };
    });



    const onSubmit = async (submitData) => {
        try {
            const obj = { ...submitData };
            const file = obj["file"];
            const res = await uploadToImgbb(file)

            if (res?.data?.url) {
                const image = res.data.url
                let { name, description, price, time, specialist } = submitData
                price = Number(price)
                time = Number(time)

                const uploadData = { name, description, price, time, specialistId: specialist, image: image }
                console.log(uploadData)
                const response = await createServices(uploadData).unwrap()
                console.log(response)
                if (response?.id) {
                    message.success('Service Created Successfully')
                    router.push('/admin/manage-services')
                } else {
                    message.error('failed to create service')
                }
            } else {
                message.error('image upload failed')
            }

        } catch (error) {
            console.log(error)
            message.error('failed to create service')
        }
    }
    return (
        <div>
            <div className='editProfileContainer'>
                <h1 style={{ textAlign: 'center' }}>Create Service</h1>
                <Form submitHandler={onSubmit} >
                    <div className='inputDiv' >
                        <UploadImage type='file' name='file' />
                    </div>

                    <div className='inputDiv'>
                        <FormInput name='name' type="text" size="larger" label="Name" required={true} />
                    </div>
                    <div className='inputDiv'>
                        <FormInput name='description' type="text" size="larger" label="Description" required={true} />
                    </div>
                    <div className='inputDiv'>
                        <FormInput name='price' type="number" size="larger" label="Price /$" required={true} />
                    </div>
                    <div className='inputDiv'>
                        <FormInput name='time' type="number" size="larger" label="Time /hr" required={true} />
                    </div>
                    <div className='inputDiv'>
                        <FormSelectField options={selectOptions} label="Specialist" name="specialist" size='large' placeholder='select' />
                    </div>


                    <Button className='profileButton' htmlType='submit' type='primary'> Create </Button>
                </Form>


            </div>
        </div>
    )
}

export default CreateService 