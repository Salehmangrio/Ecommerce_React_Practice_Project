import React from 'react'

const LovedProducts = () => {
  return (
    <div className='text-center bg-slate-100 py-20 md:px-40 px-8'>
      <div className='flex flex-col justify-center gap-12 '>
        <h1 className='font-bold text-3xl text-gray-700'>Most Loved Products</h1>
        <hr className='w-12 border-2 border-solid border-red-600 inline-block mx-auto' />

        <div className='flex md:flex-row flex-col gap-8'>
          <div>
            <img src="	https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/tshirt4-600x600.jpg" alt="" />
            <p className='py-1 text-gray-500 font-light'>Mugs</p>
            <h2 className='font-bold '>Black Printed Coffee Mug</h2>
            <p className='py-1'>☆☆☆☆☆</p>
            <p className='font-semibold text-gray-700'>£15.00</p>
          </div>
          <div>
            <img src="	https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/tshirt6-600x600.jpg" alt="" />
            <p className='py-1 text-gray-500 font-light'>Mugs</p>
            <h2 className='font-bold '>Father’s Day Coffee Mug</h2>
            <p className='py-1'>☆☆☆☆☆</p>
            <p className='font-semibold text-gray-700'>£19.00</p>
          </div>
          <div>
            <img src="	https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/tshirt2-600x600.jpg" alt="" />
            <p className='py-1 text-gray-500 font-light'>Mugs</p>
            <h2 className='font-bold '>Personalised Mug</h2>
            <p className='py-1'>☆☆☆☆☆</p>
            <p className='font-semibold text-gray-700'>£14.00</p>
          </div>
          <div>
            <img src="	https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/tshirt5-600x600.jpg" alt="" />
            <p className='py-1 text-gray-500 font-light'>Mugs</p>
            <h2 className='font-bold '>Valentine’s Day Special Mug</h2>
            <p className='py-1'>☆☆☆☆☆</p>
            <p className='font-semibold text-gray-700'>£21.00</p>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default LovedProducts;
