import React from 'react'


function Banner() {
  return (
    <div className='relative overflow-hidden bg-gradient-to-r from-white to-blue-300 font-sans px-6 py-12 mb-7'>
<div className='absolute inset-0 opacity-20'>
  
<img src='https://media.istockphoto.com/id/938742222/photo/cheesy-pepperoni-pizza.jpg?s=1024x1024&w=is&k=20&c=OKXH55QwDa6L3cY2pTTz1DKVT2clqW3zcVaJVaU-N_U='
alt='delicious pizza banner'
 className='w-full h-full object-cover'/>
</div>
<div className='relative z-10 container mx-auto  flex-cols justify-center items-center text-center'>
    <h2 className='text-black sm:text-5xl font-bold mb-4'>
      Discover Our Menu
    </h2>
    <p className='text-black text-lg text-center mb-6 max-w-xl '> Shop Now For Exclusive Pizza Discount!
    </p>

    <button
    type='button'
    className='bg-cyan-600 text-black text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-pink-400 transition duration-300'>
      Exciting Deals Launch At 9 PM!
    </button>
    </div>
    </div>
  )
}

export default Banner
