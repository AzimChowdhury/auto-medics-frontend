import Banner from '@/components/ui/Banner'
import FooterComponent from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
import Reviews from '@/components/ui/Reviews'
import Services from '@/components/ui/Services'
import React from 'react'





function HomePage() {
    return (
        <div>
            <Banner />
            <Services />
            <Reviews />
        </div>
    )
}

export default HomePage
