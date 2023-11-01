'use client'
import { Drawer } from 'antd';
import './notification.css'
import { getUserInfo } from '@/helpers/auth/authHelper';
import { ISOStringToDate, ISOStringToTime } from '@/utils/Date';
import { useUpdateNotificationMutation } from '@/redux/api/notificationApi';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';


const Notification = ({ open, onClose, notifications }) => {
    const { email } = getUserInfo()
    const darkTheme = useSelector((state) => state.darkTheme);
    const [updateNotification] = useUpdateNotificationMutation()


    const updateToReaden = async (id) => {
        await updateNotification(id)

    }

    return (
        <div className={`${JSON.parse(darkTheme) ? 'darkBg1' : 'lightBg1'}`}>
            <Drawer
                style={{ backgroundColor: `${JSON.parse(darkTheme) ? '#131316' : '#FFFFFF'}` }}
                title={
                    <div className='gradientHeader' style={{ fontSize: '25px', fontWeight: 'bold' }}>
                        Notifications
                    </div>
                }
                placement="right" onClose={onClose} open={open}
            >

                {
                    notifications?.length > 0 ?
                        notifications?.map(notification => (

                            <div style={{ padding: "10px" }}
                                className={
                                    notification && JSON.parse(darkTheme) === false
                                        ? notification.email && !notification.readen
                                            ? 'lightBg2'
                                            : 'lightBg1'
                                        : notification.email && !notification.readen
                                            ? 'darkBg1'
                                            : 'darkBg2'
                                }
                                key={notification?.id}>


                                <p className='notificationHeader gradientHeader'>{notification?.title}</p>
                                <p className='notificationText'>{notification?.details}</p>
                                <p className='notificationTime'>
                                    {ISOStringToDate(notification?.timestamp)}
                                    _and _
                                    {ISOStringToTime(notification?.timestamp)}
                                </p>



                                {notification && (
                                    (notification.email && !notification.readen) ||
                                    (notification.readers && !notification.readers.includes(email))
                                ) && (
                                        <button
                                            onClick={() => updateToReaden(notification?.id)}
                                            style={{ fontSize: '12px', padding: '5px 10px', marginTop: '5px' }}
                                            className='gradientButton'
                                        >
                                            Mark as read
                                        </button>
                                    )}

                            </div>
                        ))
                        :
                        <p>No Notifications</p>
                }




            </Drawer>
        </div>
    );
};
export default dynamic(() => Promise.resolve(Notification), { ssr: false })