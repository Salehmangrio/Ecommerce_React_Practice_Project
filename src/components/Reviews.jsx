import React from 'react';
import { base64Image } from '../data/data';

const Reviews = () => {
    return (
        <div className='md:px-40 px-8 flex flex-col gap-12 py-12 bg-slate-100'>
            <h1 className='block text-center font-bold text-3xl text-gray-700'>Our Happy Clients!</h1>
            <hr className='border-2 border-solid border-red-500 w-20 block mx-auto' />
            <div className='flex flex-col md:flex-row gap-12'>

                <div className='shadow-[3px_3px_6px_3px_#ccc] px-12 py-12 md:w-[500px]  rounded-xl flex flex-col gap-4 relative pb-28 overflow-x-hidden hover:shadow-[5px_5px_10px_5px_#ccc]' >
                    <p>"Absolutely love this product! It exceeded my expectations in every way. The quality is superb, and it works exactly as described. Highly recommend it to anyone looking for top-notch performance!"</p>
                    <p>⭐️⭐️⭐️⭐️⭐️</p>
                    <div className='flex gap-4 items-center absolute bottom-10'>
                        <img src="https://yt3.googleusercontent.com/IhHGOq5IePmIwwxE479fOT9ZV8UhZsAw5zr3WutsxQfueSpVEVsobI933r2WUAo0ANs1SVy-Rg=s900-c-k-c0x00ffffff-no-rj" alt="IMage Avtar" className='w-12 h-12 rounded-full' />
                        <h3 className='font-medium'>Saleh Mangrio</h3>
                    </div>
                </div>

                <div className='shadow-[3px_3px_6px_3px_#ccc] px-12 py-12 md:w-[500px] rounded-xl flex flex-col gap-4 relative pb-28 overflow-x-hidden hover:shadow-[5px_5px_10px_5px_#ccc]' >
                    <p>"This is hands down the best purchase I've made this year. It’s incredibly easy to use, and the results are outstanding. Great value for the price!"</p>
                    <p>⭐️⭐️⭐️☆☆</p>
                    <div className='flex gap-4 items-center absolute bottom-10'>
                        <img src={base64Image.src2} alt="IMage Avtar" className='w-12 h-12 rounded-full' />
                        <h3 className='font-medium'>Chander Kumar</h3>
                    </div>
                </div>

                <div className='shadow-[3px_3px_6px_3px_#ccc] px-12 py-12 md:w-[500px] rounded-xl flex flex-col gap-4 relative pb-28 overflow-x-hidden hover:shadow-[5px_5px_10px_5px_#ccc]' >
                    <p>"I was a bit hesitant at first, but this product truly blew me away. It’s durable, reliable, and efficient. Definitely worth every penny!</p>
                    <p>⭐️⭐️⭐️⭐️☆</p>
                    <div className='flex gap-4 items-center absolute bottom-10'>
                        <img src={base64Image.src1} alt="IMage Avtar" className='w-12 h-12 rounded-full' />
                        <h3 className='font-medium'>Chander Valasai</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Reviews