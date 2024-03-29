import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <h3 className='text-orange-500 font-bold text-2xl text-center'>Quick Delivery App </h3>
       <div className='w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[550px] mx-auto my-4' src='https://clipground.com/images/delivery-logo-png-1.png' alt='image'/>
       <div className='flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold'>Get the App</p>
        <h1 className='md:text-4xl sm: text-3xl text-2xl font-bold py-2'>Limitless convenience on-demand</h1>
       <p>
        Delicious food to be delivered on prompt and healthy way. Quick and Fast delivery!
       </p>
       <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium 
       my-6 mx-auto md:mx-0 py-3'>Get Started </button>
       </div>

       </div>
       
        </div>
  )
}

 export default Delivery       