import React from 'react'
import homeimg from '../assets/homeimg.jpg'
import ZbcSun from '../assets/zbcsun.jpg'

const Home = () => {
  return (
    <div className='mt-20'>

        {/* Sermons */}
        <div className='md:p-20 bg-black py-14 text-white'>
            <div>
                <p className='text-center font-extrabold md:text-5xl text-4xl'>Watch Our Latest Sermon</p>
            </div>
            <div className='md:flex justify-between mt-12 '>
                <div className='flex flex-col justify-center items-center mb-4 '>
                    <img src={homeimg} alt=''
                    className='md:h-56 p-4'/>
                    <button className='gap-3 border-2 font-bold p-3 text-white  transition duration-300 ease-in-out hover:bg-white hover:text-black hover:border-black'>Watch The Current Series</button>
                </div>
                <div className='flex flex-col justify-center items-center mb-4 '>
                    <img src={homeimg} alt=''
                    className='md:h-56 p-4'/>
                    <button className='gap-3 border-2 font-bold p-3 text-white  transition duration-300 ease-in-out hover:bg-white hover:text-black hover:border-black'>Watch The Current Series</button>
                </div>
                <div className='flex flex-col justify-center items-center mb-4 '>
                    <img src={homeimg} alt=''
                    className='md:h-56 p-4'/>
                    <button className='gap-3 border-2 font-bold p-3 text-white  transition duration-300 ease-in-out hover:bg-white hover:text-black hover:border-black'>Watch The Current Series</button>
                </div>
            </div>
        </div> 

        {/* Upcoming Events */}
        <div className='md:p-20 py-14 bg-slate-300'>
            <div>
                <p className='text-center font-extrabold md:text-5xl text-4xl'>Up Coming Events</p>
            </div>
            <div className='md:flex justify-between'>
                <div className='flex flex-col mt-10 justify-center items-center '>
                    <img src={ZbcSun}
                    href='/'
                    alt=''
                    className='md:h-auto md:w-80    p-4'/>
                </div>
                <div className='flex flex-col mt-10 justify-center items-center '>
                    <img src={ZbcSun}
                    href='/'
                    alt=''
                    className='md:h-auto md:w-80    p-4'/>
                </div>
                <div className='flex flex-col mt-10 justify-center items-center '>
                    <img src={ZbcSun}
                    href='/'
                    alt=''
                    className='md:h-auto md:w-80    p-4'/>
                </div>               
            </div>
        </div>
    </div>

  )
}

export default Home