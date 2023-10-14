import Banner from '@/components/ui/Banner'
import FooterComponent from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
import Services from '@/components/ui/Services'
import React from 'react'
import dynamic from 'next/dynamic';

const NoSSRHeader = dynamic(() => import('../components/ui/Header'), { ssr: false });




function HomePage() {
  return (
    <div>
      <NoSSRHeader />
      <Banner />
      <Services />
      <FooterComponent />
    </div>
  )
}

export default HomePage
