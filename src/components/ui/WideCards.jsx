import { Button } from 'antd'
import './wideCard.css'
import { getUserInfo } from '@/helpers/auth/authHelper';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

function WideCards({ index, image, name, description, price, time, setIsModalOpen, setService, id }) {
    const router = useRouter()
    const { email, role } = getUserInfo()
    const darkTheme = useSelector((state) => state.darkTheme);

    return (
        <div
            style={(index % 2) ? { flexDirection: 'row-reverse' } : {}}
            className={
                JSON.parse(darkTheme) ?
                    ((index % 2) ? 'cardBody darkBg1' : 'cardBody darkBg2')
                    :
                    ((index % 2) ? 'cardBody lightBg1' : 'cardBody lightBg2')}
        >
            <div>
                <img className='cardImage2' src={image} alt='services' />
            </div>
            <div>
                <h1 style={{ color: '#007BFF' }} className='cardText'>{name}</h1>
                <h4 className='cardText'>Price: ${price}</h4>
                <p className='cardText'>Service Time: {time}/hr</p>
                <p className='cardText wCardDes' style={{ textOverflow: 'ellipsis' }}>{description}</p>
                {
                    role === 'customer' &&
                    <button className='gradientButton'
                        onClick={
                            email
                                ? () => {
                                    setIsModalOpen(true);
                                    setService({ name, id, image, description, price, time });
                                }
                                : () => router.push('/auth/signin')
                        }
                        style={{ margin: '20px 0px', fontSize: '16px' }}
                        type='primary'
                    >
                        Book this service
                    </button>
                }
            </div>
        </div >
    )
}

export default WideCards
