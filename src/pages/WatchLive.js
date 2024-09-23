import React from 'react'
import { FaVideo, FaBoxArchive,  } from "react-icons/fa6"; 
import {FaYoutube} from "react-icons/fa"


const WatchLive = () => {
  return (
    <div className='md:p-20 p-14'>
        <div className='text-center'>
            <h2 className='pb-4 font-bold md:text-5xl text-4xl' >Now Streaming on Multiple Platforms</h2>
            <p className='pb-4 text-2xl'>Facebook, Youtube, and Tiktok</p>
        </div>
        <div className='md:flex  justify-between gap-7 mt-8'>
            <div  className='flex flex-col text-center items-center justify-center mb-20'>
                <FaVideo className='text-orange-500 text-2xl  items-center justify-center mb-4'/> 
                <h2 className='font-bold text-2xl mb-3'>Watch us Live</h2>   
                <p className='text-xl'>Sunday 9:00am & Wednesday 6:00pm</p>
                <button className='mt-3 gap-3 border-2 border-black font-bold p-3 text-black  transition duration-300 ease-in-out hover:bg-black hover:text-white hover:border-black'>Watch Current Series</button>            
            </div>
            <div className='flex flex-col text-center items-center justify-center mb-20'>
                <FaBoxArchive className='text-orange-500 text-2xl items-center justify-center mb-4'/>    
                <h2 className='font-bold text-2xl mb-3'>Saved Sermon</h2>   
                <p className='text-xl'>Missed Service? We got you covered!</p>
                <button className='mt-3 gap-3 border-2 border-black font-bold p-3 text-black  transition duration-300 ease-in-out hover:bg-black hover:text-white hover:border-black'>Sermon Archives</button>
            </div>
            <div className='flex flex-col text-center items-center justify-center mb-20'>
                <FaYoutube className='text-orange-500 text-2xl items-center justify-center mb-4'/>    
                <h2 className='font-bold text-2xl mb-3'>Our Youtube Page</h2>   
                <p className='text-xl'>Click to the link to Subscribe</p>
                <button className='mt-3 gap-3 border-2 border-black font-bold p-3 text-black  transition duration-300 ease-in-out hover:bg-black hover:text-white hover:border-black'>Subscribe to our channel</button>
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default WatchLive