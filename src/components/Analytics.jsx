import React from 'react'
import laptopAnalytics from '../components/assets/analytics-laptop.jpg'
function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={laptopAnalytics} alt="/analyticsLaptop"></img>
        <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'> DATA ANALYTICS DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analyitcs Centrally</h1>
            <p className='text-justify '>Managing data analytics centrally refers to the practice of centralizing all data analytics activities within an organization in a single location. This can include consolidating data from multiple sources, analyzing data, and disseminating insights to stakeholders.</p>
            <button className='bg-black w-[200px] mx-auto text-[#00df9a] font-medium rounded-md md:m-4 my-6 py-4'>Get Started</button>
        </div>
        </div>
    </div>
  )
}

export default Analytics