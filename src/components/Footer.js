import React from 'react'
import { FaEnvelope, FaRegCreditCard, FaYoutube, FaTiktok } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaLocationDot, FaFacebookF } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='p-20 bg-black text-white'>
        <div className='md:flex justify-between '>
            <div className='flex flex-col text-center items-center justify-center mb-10 '>
                <FaEnvelope className='justify-center mb-2'/>
                <p className='font-bold mb-1'>Info</p>
                <a href='/' className='text-sm'>something@gmail.com</a>
            </div>
            <div className='flex flex-col items-center justify-center mb-10'>
                <IoCall className='justify-center mb-2'/>
                <p className='font-bold mb-1'>Call</p>
                <a href='/' className='text-sm'>0123456789</a>
            </div>
            <div className='flex flex-col items-center justify-center mb-10'>
                <FaLocationDot className='justify-center mb-2'/>
                <p className='font-bold mb-1'>Visit</p>
                <a href='/' className='w-60 text-sm justify-between text-center'>1653 Georgia 85 South, Fayetteville, GA 30215, USA</a>
            </div>
            <div className='flex flex-col items-center justify-center mb-10'>
                <FaRegCreditCard className='justify-center mb-2'/>
                <p className='font-bold mb-1'>Give </p>
                <a href='/' className='text-sm'>Give Online</a>
            </div>
        </div>
        <div className='mt-20 mb-7 flex gap-5 justify-center'>
            <FaFacebookF/>
            <FaTiktok/>
            <FaYoutube/>
        </div>
        <div className='text-center'>
            <p>&copy; Zion'sgate Bible Church</p>
        </div>
    </div>
  )
}

export default Footer