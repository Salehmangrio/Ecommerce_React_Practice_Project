import React from 'react'

const SalePage = () => {
  return (
    <div className='md:h-[70vh] h-[40vh] flex flex-col justify-center gap-8 items-start px-8 md:px-40 '>
        <h2 className='text-3xl font-semibold text-slate-700'>Hurry Up!</h2>
        <h1 className='text-4xl font-bold text-slate-700'>Deal of the Day!</h1>
        <p className='font-semibold'>Buy This T-shirt At 20% Discount, Use Code Off20</p>
        <button className='bg-red-500 w-52 text-white uppercase py-2 px-8 rounded-md hover:bg-red-600'> &gt;Shop Now</button>
    </div>
  )
}

export default SalePage