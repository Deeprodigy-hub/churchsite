import React from 'react'
import homeimg from '../assets/homeimg.jpg'

const Home = () => {
  return (
    <div className='mt-20'>

        {/* Sermons */}
        <div className='p-20 bg-black text-white'>
            <div>
                <p className='text-center font-extrabold md:text-5xl text-4xl'>Watch Our Latest Sermon</p>
            </div>
            <div className='md:flex justify-between mt-12 '>
                <div className='flex flex-col justify-center items-center '>
                    <img src={homeimg} alt=''
                    className='h-56 pb-3'/>
                    <button className='gap-3 border-2 font-bold p-3 text-white  transition duration-300 ease-in-out hover:bg-white hover:text-black hover:border-black'>Watch The Current Series</button>
                </div>
                <div className='flex flex-col justify-center items-center '>
                    <img src={homeimg} alt=''
                    className='h-56 pb-3'/>
                    <button className='gap-3 border-2 font-bold p-3 text-white  transition duration-300 ease-in-out hover:bg-white hover:text-black hover:border-black'>Watch The Current Series</button>
                </div>
                <div className='flex flex-col justify-center items-center '>
                    <img src={homeimg} alt=''
                    className='h-56 pb-3'/>
                    <button className='gap-3 border-2 font-bold p-3 text-white  transition duration-300 ease-in-out hover:bg-white hover:text-black hover:border-black'>Watch The Current Series</button>
                </div>
            </div>
        </div> 

        {/* Upcoming Events */}
        <div className='m-20 '>
            <div>
                <p className='text-center font-extrabold md:text-5xl text-4xl'>Up coming Events</p>
            </div>
            <div className='md:flex justify-between w-auto'>
                <div className='flex flex-col mt-10 justify-center items-center '>
                    <img src={homeimg}
                    href='/'
                    alt=''
                    className='h-56 pb-3'/>
                </div>
                <div className='flex flex-col mt-10 justify-center items-center '>
                    <img src={homeimg}
                    href='/'
                    alt=''
                    className='h-56 pb-3'/>
                </div>
                <div className='flex flex-col mt-10 justify-center items-center '>
                    <img src={homeimg}
                    href='/'
                    alt=''
                    className='h-56 pb-3'/>
                </div>                
            </div>

        </div>
    </div>

  )
}

export default Home