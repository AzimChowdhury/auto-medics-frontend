import About from '@/components/ui/About'
import Arrivals from '@/components/ui/Arrivals'
import Banner from '@/components/ui/Banner'
import Contact from '@/components/ui/Contact'
import Location from '@/components/ui/Location'
import News from '@/components/ui/News'
import Notification from '@/components/ui/Notification'
import Reviews from '@/components/ui/Reviews'
import Services from '@/components/ui/Services'
import React from 'react'





function HomePage() {
    return (
        <div>
            <Banner />
            <About />

            <Services />
            <Arrivals />
            <News />
            <Reviews />
            <Location />
            <Contact />
        </div>
    )
}

export default HomePage
