import React from 'react'
import PromoBanner from './Home-page/layout/banner/page'
import Hero from './Home-page/hero/page'
import Section4 from './Home-page/section4/page'
import TopSelling from './Home-page/topSelling/page'
import NewArrivalPage from './Home-page/newArrival/page'



const Home = () => {
  return (
    <div className=''>
      <PromoBanner/>


      <Hero/>
      {/* <Section/> */}
      
     <TopSelling/>
     <NewArrivalPage/>
      {/* <Section3/> */}
      <Section4/>
   
      
    </div>
  )
}

export default Home
