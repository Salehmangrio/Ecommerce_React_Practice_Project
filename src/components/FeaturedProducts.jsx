import React from 'react'

const FeaturedProducts = () => {
  return (
    <div className='  py-32  text-center flex flex-col gap-20 bg-slate-100 md:px-40 px-8' >
      <div className='flex md:flex-row flex-col gap-8 '>
        <div>
          <img src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2020/01/image-01.jpg" alt="Product 1" />
          <p className='font-light text-gray-700 pt-4 text-lg'>Most Loved Designs</p>
          <h2 className='font-medium text-black py-4'>Customize Your T-Shirts</h2>
        </div>
        <div>
          <p className='font-light text-gray-700'>Design of the Week</p>
          <h2 className='font-medium text-black py-4'>Rubber Print Your T-Shirt</h2>
          <img src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2020/01/image-03.jpg" alt="Product 2" />
        </div>
        <div>
          <img src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2020/01/image-02.jpg" alt="Product 3" />
          <p className='font-light text-gray-700 pt-4'>New T-shirt Edition</p>
          <h2 className='font-medium text-black py-4'>Customize Plain Colors</h2>
        </div>
      </div>

      <div className='flex flex-col justify-center gap-12'>
        <h1 className='font-bold text-3xl text-gray-700'>Our Featured Products</h1>
        <hr className='w-12 border-2 border-solid border-red-600 inline-block mx-auto' />

        <div className='flex md:flex-row flex-col gap-8'>
          <div>
            <img src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-white-400x400.jpg" alt="" />
            <p className='py-1 text-gray-500 font-light'>Mugs</p>
            <h2 className='font-bold '>Black Printed Coffee Mug</h2>
            <p className='py-1'>☆☆☆☆☆</p>
            <p className='font-semibold text-gray-700'>£15.00</p>
          </div>
          <div>
            <img src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-coffee-400x400.jpg" alt="" />
            <p className='py-1 text-gray-500 font-light'>Mugs</p>
            <h2 className='font-bold '>Father’s Day Coffee Mug</h2>
            <p className='py-1'>☆☆☆☆☆</p>
            <p className='font-semibold text-gray-700'>£19.00</p>
          </div>
          <div>
            <img src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-yellow-400x400.jpg" alt="" />
            <p className='py-1 text-gray-500 font-light'>Mugs</p>
            <h2 className='font-bold '>Personalised Mug</h2>
            <p className='py-1'>☆☆☆☆☆</p>
            <p className='font-semibold text-gray-700'>£14.00</p>
          </div>
          <div>
            <img src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-blue-400x400.jpg" alt="" />
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

export default FeaturedProducts