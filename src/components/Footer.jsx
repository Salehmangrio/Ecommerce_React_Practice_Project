import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-600 md:px-40 px-8 md:h-[70vh] h-[100vh]  flex flex-col justify-between '>
            <section className=' flex md:flex-row flex-col md:gap-12 gap-4 md:pt-20 pt-10 text-white list-none'>

                <div>
                    <h2 className='font-bold text-xl mb-4'>Custom Print Store</h2>
                </div>
                <div>
                    <h2 className='font-bold text-xl mb-4 '>Get in Touch with Us for the Best Quality Custom Prints & Supplies.</h2>
                    <p>Qui dolore ipsum quia dolor sit amet, consec tetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame.</p>
                </div>

                <div>
                    <h2 className='font-bold text-xl mb-4'>Quick Links</h2>
                    <li className='pb-2 hover:text-red-500'>Know More About Us</li>
                    <li className='pb-2 hover:text-red-500'>Visit Store</li>
                    <li className='pb-2 hover:text-red-500'>Let’s Connect</li>
                </div>

                <div>
                    <h2 className='font-bold text-xl mb-4'>Important Links</h2>
                    <li className='pb-2 hover:text-red-500'>Privacy Policy</li>
                    <li className='pb-2 hover:text-red-500'>Shipping Details</li>
                    <li className='pb-2 hover:text-red-500'>Terms & Conditions</li>
                </div>

            </section>
            <section>
            <hr/>
            <section className='flex flex-col md:flex-row md:justify-between items-center py-8 text-white'>
            <p>Copyright &copy; 2024 | Custom Printing</p>
            <p>Powered By Custom Printing 'Saleh Mangrio'</p>
            </section>
            </section>

        </div>
    )
}

export default Footer