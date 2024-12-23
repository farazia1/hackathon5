import React from 'react'
import Navbar from './Home-page/layout/header/page'

import PromoBanner from './Home-page/layout/banner/page'
import Hero from './Home-page/hero/page'
import Section from './Home-page/section2/page'
import Section3 from './Home-page/section3/page'
import Section4 from './Home-page/section4/page'
import Section5 from './Home-page/section5/page'
import FilterComponent from './Product-Details-page/page'

const Home = () => {
  return (
    <div className=''>
      <PromoBanner/>
      {/* <Navbar/> */}
      <Hero/>
      <Section/>
      <Section3/>
      <Section4/>
      <Section5/>
    {/* <FilterComponent/> */}
      
    </div>
  )
}

export default Home
