import dynamic from 'next/dynamic'
import './about.css'

function AboutUs() {
    return (
        <div className='aboutContainer'>
            <h1 style={{ fontSize: '35px', textAlign: 'center' }} className='gradientHeader'>About Us</h1>

            <h3 className='gradientHeader'>Auto-Medics : Your Trusted Car Care Partner </h3>

            <p>At Auto-Medics, we are more than just a car servicing center in Chittagong. We are your dedicated automotive solutions partner, committed to providing top-notch services and expertise that keep your vehicle running smoothly. With a passion for automobiles and a mission to exceed your expectations, we have been serving the local community for 5 years. </p>

            <h3 className='gradientHeader'>Our Mission</h3>

            <p> Our mission is simple: to offer comprehensive car services and solutions for all your automobile problems, all under one roof. We understand the importance of your vehicle in your daily life and are dedicated to ensuring it operates at its best. Whether it is a routine checkup, complex repairs, or customized solutions, Auto-Medics is here to keep you on the road safely and efficiently.</p>

            <h3 className='gradientHeader'>Our Team</h3>

            <p>Our team of skilled and certified technicians is the backbone of Auto-Medics. They are not just experts in their field, but they share a deep love for automobiles. Their commitment to staying updated with the latest automotive technologies and their dedication to delivering top-quality service sets us apart.</p>

            <h3 className='gradientHeader'>Our Services</h3>

            <p>
                <ul>Auto-Medics offers a wide range of services, including:

                    <li>Regular Maintenance: From oil changes and tire rotations to brake checks and fluid top-ups, we will keep your vehicle in top shape.</li>
                    <li> Repairs and Diagnostics: Our advanced diagnostics tools and experienced mechanics will quickly identify and resolve any issues.</li>
                    <li>Customized Solutions: For car enthusiasts or owners of specialty vehicles, we provide tailored solutions to meet your unique needs.</li>
                    <li>Spare Parts and Accessories: We stock genuine spare parts and high-quality accessories to enhance your vehicles performance.</li>
                </ul>
            </p>

            <h3 className='gradientHeader'>Why Choose Us?</h3>

            <p>
                <ul>
                    <li>
                        Reliability: We understand the trust you place in us to care for your vehicle. Auto-Medics takes this responsibility seriously, ensuring all work is done to the highest standards.
                    </li>
                    <li>
                        Transparency: We believe in open and honest communication. You will receive clear explanations of the work needed and the cost involved.
                    </li>
                    <li>
                        Quality Assurance: Our work is backed by a quality guarantee. We strive for excellence in every service we provide.
                    </li>
                    <li>
                        Customer-Centric Approach: Your satisfaction is our priority. We aim to make your experience with us convenient and hassle-free.
                    </li>

                </ul>
            </p>

            <h3 className='gradientHeader'>    Our Location</h3>

            <p>
                Conveniently situated in Chittagong, our service center is easily accessible. Feel free to visit us at 46/5 Agrabad and experience our commitment to automotive excellence.
            </p>

            <h3 className='gradientHeader'>Contact Us</h3>

            <p> For all your car service needs, Auto-Medics is your trusted partner. Contact us at auto-medics@gmail.com or book your appointment through this website. We look forward to taking care of your vehicle and ensuring your peace of mind on the road.</p>

            <p> At Auto-Medics, we are not just servicing cars; we are nurturing trust, quality, and reliability. Join us in your journey towards hassle-free, efficient, and safe driving.</p>

        </div>
    )
}

export default dynamic(() => Promise.resolve(AboutUs), { ssr: false })
