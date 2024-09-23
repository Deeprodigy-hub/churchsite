import React from 'react'
import { RiBankFill } from "react-icons/ri";
import { SiCashapp } from "react-icons/si";
import { FaCcPaypal } from "react-icons/fa";
import GiveImg from "../assets/giveimg.jpg"

const Give = () => {
  return (
    <div className='mb-16'>
      <div className='mx-20 mb-16'>
        <div>
          <h2 className='font-bold md:text-5xl text-4xl text-center py-16'>Several Ways To Give</h2>
        </div>
        <div className='md:flex flex-row justify-between'>
          <div className='flex flex-col text-center items-center pb-14'>
            <FaCcPaypal className='text-3xl mb-4 text-center justify-center' />
            <p className='mb-4 text-2xl font-bold'>PayPal</p>
            <p className='text-xl'>
              winifrediwunze@gmail.com<br/>
            </p>
          </div>        
          <div className='flex flex-col text-center items-center pb-14'>
            <RiBankFill className='text-3xl mb-4 text-center justify-center' />
            <p className='mb-4 text-2xl font-bold'>Naira Account</p>
            <p className='text-xl'>
              0018675634<br/>
              Access Bank<br/>
              Winifred Ugwu Iwunze<br/>
            </p>
          </div>
          <div className='flex flex-col text-center items-center pb-14'>
            <SiCashapp className='text-3xl mb-4 text-center justify-center' />
            <p className='mb-4 text-2xl font-bold'>Cash App</p>
            <p className='text-xl'>
              $DiamondUgwu<br/>
            </p>
          </div>
        </div>        
      </div>


      <div>
        <div className="relative h-96 w-c  bg-cover bg-center" style={{ backgroundImage: `url(${GiveImg})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="text-center text-white px-4">
              <p className="text-lg md:text-2xl font-semibold">
              Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap. For with the measure you use, it will be measured to you.
              </p>
              <p className="mt-4 text-base md:text-lg">Luke 6:38</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Give