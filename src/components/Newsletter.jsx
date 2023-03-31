import React from 'react'

function Newsletter() {
  return (
    <div className="w-full py-16 text-white px-5">
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 '>
            <div className='lg:col-span-2'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                <p>Sign up to our newsletter and stay up to date</p>
            </div>
           <div className='my-4  '>
            <div className='flex flex-col w-full sm:flex-row items-center justify-between'>
            <input className='p-4 my-3  flex rounded-md w-full font-bold text-black ' type="email" placeholder='Enter Email' />
            <button className="bg-[#00df9a] text-black w-[200px] font-medium rounded-md  my-6 ml-2 px-1 py-4 ">Notify Me!</button>
            
           </div>
           <p>We Care about the protection of your data. Read Our<span className='text-[#00df9a] ml-2'>Privacy Policy!</span></p>
        </div>
        </div>
    </div>
  )
}

export default Newsletter