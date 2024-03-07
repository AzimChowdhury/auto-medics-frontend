'use client'
import WideCards from '@/components/ui/WideCards'
import { useGetServicesQuery } from '@/redux/api/serviceApi'
import { Button, DatePicker, Modal, TimePicker, message } from 'antd';
import { useState } from 'react';
import dayjs from 'dayjs';
import { convertToISOString, getCurrentTime, getTomorrowsDate } from '@/utils/Date';
import { getUserInfo } from '@/helpers/auth/authHelper';
import { useCreateBookingsMutation } from '@/redux/api/bookingsApi';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import Loading from '@/app/loading';



function Services() {
    const { data: services, isLoading } = useGetServicesQuery()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [service, setService] = useState({});
    const tomorrow = getTomorrowsDate()
    const now = getCurrentTime()
    const [selectedTime, setSelectedTime] = useState(now);
    const [selectedDate, setSelectedDate] = useState(tomorrow);
    const format = 'HH:mm';
    const dateFormatList = ['DD-MM-YYYY'];
    const { email } = getUserInfo()
    const darkTheme = useSelector((state) => state.darkTheme);

    const [createBookings] = useCreateBookingsMutation()


    const handleOk = () => {
        submitBooking()
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const submitBooking = async () => {
        const dateTime = convertToISOString(selectedDate, selectedTime)
        const res = await createBookings({ email, serviceId: service?.id, timeSlot: dateTime }).unwrap()
        if (res?.id) {
            message.success('Service Booked successfully')
        } else {
            message.error('Service booking Failed')
        }

    }


    function disabledDate(current) {
        const today = new Date(); // Current date and time
        today.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0

        // Disable today's date and times before the current time
        return current && (current < today || (current.isSame(today, 'day') && current < new Date()));
    }



    return (
        <div>

            <div style={{ minHeight: '80vh' }}>
                <div className={` ${JSON.parse(darkTheme) ? 'darkBg2' : 'lightBg2'}`} style={{ textAlign: 'center' }}>
                    <h1 style={{ color: '#007BFF', paddingTop: '20px', fontSize: '45px' }}>Our Services</h1>


                    <div>
                        {
                            isLoading && <Loading />
                        }
                        {services?.map((service, index) => {
                            return (
                                <WideCards
                                    index={index}
                                    key={service?.id}
                                    name={service?.name}
                                    image={service?.image}
                                    price={service?.price}
                                    time={service?.time}
                                    id={service?.id}
                                    description={service?.description}
                                    setIsModalOpen={setIsModalOpen}
                                    setService={setService}
                                />
                            )
                        })}
                    </div>
                </div>

            </div>



            {/*-----------------------------
                    booking modal 
            -----------------------------*/}

            <Modal title={`Book this Service - ${service?.name}`} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                    <div style={{ width: "50%" }}>
                        <img width={'100%'} src={service?.image} alt="service image" />
                    </div>
                    <div style={{ width: "50%", paddingLeft: '10px' }}>
                        <p style={{ fontSize: '14px', fontWeight: '600' }}>Price : $ {service?.price}</p>
                        <p style={{ fontSize: '14px', fontWeight: '600' }}>Time :   {service?.time}/hr</p>
                        <p style={{ fontSize: '12px' }}>{service?.description} </p>
                    </div>
                </div>



                <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center", marginTop: '10px' }}>
                    <div style={{ width: "50%" }}>
                        <p>Choose Date</p>
                        <DatePicker onChange={(date, dateString) => {
                            setSelectedDate(dateString)
                        }} defaultValue={dayjs(selectedDate, format)} format={dateFormatList} disabledDate={disabledDate} />
                    </div>
                    <div style={{ width: "50%" }}>
                        <p>Choose Time</p>
                        <TimePicker onChange={(time, timeString) => {
                            setSelectedTime(timeString)
                        }} defaultValue={dayjs(selectedTime, format)} format={format} disabledTime={disabledDate} />

                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default dynamic(() => Promise.resolve(Services), { ssr: false })
