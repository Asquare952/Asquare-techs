import React from 'react'
import Hero from './Hero'
import BestSellingProducts from './BestSellingProducts'
import Catigories from './Catigories'
import ExploreProducts from './ExploreProducts'
import OurServices from './OurServices'
const HomePage = () => {
  return (
    <div className="pt-[90px]">
      <Hero />
      <div className="container">
        <Catigories />
        <BestSellingProducts />
        <ExploreProducts />
        <OurServices />
      </div>
    </div>
  );
}

export default HomePage
