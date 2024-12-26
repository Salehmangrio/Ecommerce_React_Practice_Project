import React from 'react'
import pointingGirl from '../assets/pointing_girl.png';


const LandingPage = () => {
  return (
    <div className='flex md:justify-between md:flex-row flex-col   bg-slate-50 md:px-40 px-8 pt-12 md:pt-0' >
      <section className=' flex flex-col justify-center md:gap-8 gap-4 '>
        <hr className="w-12  border-2 border-solid border-red-500" />
        <p className='font-bold text-lg text-gray-700' >Best Quality Products</p>
        <h1 className=' md:text-7xl text-3xl  text-gray-700 font-serif font-light'>We Print What You Want!</h1>
        <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien.</p>
        <button className='bg-red-500 w-52 text-white uppercase py-2 px-8 rounded-md hover:bg-red-600'>&gt; Get Started</button>

      </section>
      <section >
        <img src={pointingGirl} alt="Hero Image" className='mr-40' />
        {/* <img src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2019/06/image26-free.png" alt="Hero Image" /> */}
      </section>
    </div>
  )
}

export default LandingPage