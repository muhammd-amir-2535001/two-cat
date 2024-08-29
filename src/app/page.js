import About from '@/components/reuseableComponenet/About'
import Clients from '@/components/reuseableComponenet/Clients'
import Contact from '@/components/reuseableComponenet/Contact'
import Footer from '@/components/reuseableComponenet/Footer'
import Header from '@/components/reuseableComponenet/Hearder'
import Hero from '@/components/reuseableComponenet/Hero'
import OurUsers from '@/components/reuseableComponenet/OurUsers'
import Portfolios from '@/components/reuseableComponenet/Portfolios'
import WorkingProcess from '@/components/reuseableComponenet/WorkingProcess'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <About/>
    <Portfolios/>
    <Clients/>
    <OurUsers/>
    <WorkingProcess/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default page
