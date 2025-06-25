import React from 'react'
import bannerimage from '../assets/image.jpg'

const Banner = () => {
    return (
        <div className='w-full my-6 px-4'>
          <div className='relative rounded-xl overflow-hidden shadow-lg'>
              <img src={bannerimage} alt="banner image" className='w-full h-16 md:h-80 object-cover ' />
              <div className='absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center'>
                <h2 className='text-white text-3xl md:text-5xl font-bold mb-2'>Get Your Groceries <br />
                Delivered in 10 mintues
                </h2>
                <p className='text-white text-lg md:text-xl mb-4'>Fresh & Fast Delivery At Your Doorstep</p>
                <button className='bg-green-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600'>Shop Now</button>
              </div>
          </div>
        </div>
    )
}

export default Banner
