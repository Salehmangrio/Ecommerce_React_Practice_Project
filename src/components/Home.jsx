import React from 'react';
import {
  LandingPage,
  FeaturedProducts,
  SalePage,
  LovedProducts,
  Reviews,
} from './';

const Home = () => {
  return (
    <div className='bg-girl bg-no-repeat bg-fixed bg-slate-50'
      style={{ backgroundPosition: 'calc(100% - 4rem) center', backgroundSize: '50%' }} >
      <LandingPage />
      <FeaturedProducts />
      <SalePage />
      <LovedProducts />
      <svg
        className='bg-slate-100'
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -7 500 40"
        preserveAspectRatio="none"
        width="100%"
      >
        <path
          d="M 0,0 C 100,0, 150,20, 250,5 C 350,0, 400,30, 500,10"
          stroke="gray"
          strokeWidth=".2"
          fill="transparent"
        />
      </svg>
      <Reviews />
      
    </div>
  )
}

export default Home