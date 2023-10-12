import Banner from '@/components/ui/Banner'
import FooterComponent from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
import Services from '@/components/ui/Services'
import React from 'react'

function HomePage() {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <FooterComponent />
    </div>
  )
}

export default HomePage
