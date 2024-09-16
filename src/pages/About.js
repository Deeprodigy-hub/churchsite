import React from 'react'

const About = () => {
  return (
    <div>
        <div className='py-20 text-center items-center'>
            <h2 className='pb-4 font-bold text-5xl'>Our Vision</h2>
            <p className='pb-4 text-2xl'>Connecting People, Growing Families, Changing Lives</p>
            <button className='gap-3 border-2 border-black font-bold p-3 text-black  transition duration-300 ease-in-out hover:bg-black hover:text-white hover:border-black'>Read More</button>
        </div>
        <div className='py-20 text-center items-center bg-slate-200'>
            <h2 className='pb-4 font-bold text-5xl'>Meet Our Pastor </h2>
            <p className='pb-4 text-2xl'>Apostle Dr Winifred Ugwu Iwuenze</p>
            <button className='gap-3 border-2 border-black font-bold p-3 text-black  transition duration-300 ease-in-out hover:bg-black hover:text-white hover:border-black'>Read More</button>
        </div>
    </div>
  )
}

export default About