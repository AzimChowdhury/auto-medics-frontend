import { Button } from 'antd'
import './wideCard.css'
import { getUserInfo } from '@/helpers/auth/authHelper';
import { useRouter } from 'next/navigation';

function WideCards({ index, image, name, description, price, time, setIsModalOpen, setService, id }) {
    const router = useRouter()
    const { email, role } = getUserInfo()

    return (
        <div style={(index % 2) ? { backgroundColor: "#e1e2e3", flexDirection: 'row-reverse' } : {}} className='cardBody' >
            <div>
                <img className='cardImage' src={image} alt='services' />
            </div>
            <div>
                <h1 style={{ color: '#007BFF' }} className='cardText'>{name}</h1>
                <h4 className='cardText'>Price: ${price}</h4>
                <p className='cardText'>Service Time: {time}/hr</p>
                <p className='cardText' style={{ textOverflow: 'ellipsis' }}>{description}</p>
                {
                    role === 'customer' &&
                    <Button
                        onClick={
                            email
                                ? () => {
                                    setIsModalOpen(true);
                                    setService({ name, id, image, description, price, time });
                                }
                                : () => router.push('/auth/signin')
                        }
                        style={{ margin: '20px 0px' }}
                        type='primary'
                    >
                        Book this service
                    </Button>
                }
            </div>
        </div >
    )
}

export default WideCards
