'use client'
import { Drawer } from 'antd';
import './notification.css'
import { getUserInfo } from '@/helpers/auth/authHelper';
import { ISOStringToDate, ISOStringToTime } from '@/utils/Date';
import { useUpdateNotificationMutation } from '@/redux/api/notificationApi';


const Notification = ({ open, onClose, notifications }) => {
    const { email } = getUserInfo()
    const [updateNotification] = useUpdateNotificationMutation()


    const updateToReaden = async (id) => {
        await updateNotification(id)

    }

    return (
        <>
            <Drawer title={
                <div className='gradientHeader' style={{ fontSize: '25px', fontWeight: 'bold' }}>
                    Notifications
                </div>
            }
                placement="right" onClose={onClose} open={open}
            >

                {
                    notifications?.length > 0 ?
                        notifications?.map(notification => (

                            <div
                                className={
                                    notification && (
                                        (notification.email && !notification.readen) ||
                                        (notification.readers && !notification.readers.includes(email))
                                    ) ? 'notificationDiv' : "notificationReadDiv"

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
        </>
    );
};
export default Notification;