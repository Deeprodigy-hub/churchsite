import React, { useState } from 'react'
import zbc from '../assets/zbc.png'
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import {Link} from 'react-router-dom'

const Navbar = () => {

    const [isDropdownOpen, setIsDropownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleDropdown = (e) => {
      e.preventDefault();
      setIsDropownOpen(!isDropdownOpen);
      
    };

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };


  return (
    <div>
      <nav className='flex absolute h-24 top-0 left-0 w-full z-50 p-4 bg-transparent justify-between'>
        
        {/* logo */}
        <div className='items-center ' >
          <img className='max-h-24 items-center' src={zbc} alt='' />
        </div>

         {/* Icon for Mobile */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-300 "
            >
              {isMobileMenuOpen ? (
                <></>
              ) : (
                <FaBars className="text-2xl" /> // Hamburger icon
              )}
            </button>
          </div>

        <ul className='hidden md:flex text-white  items-center place-content-end gap-4 space-x-5 justify-between'>
          <li className="relative group">
            <Link to='/'>Home</Link>
            <span className=" absolute left-0 bottom-0 mt-2 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
          </li>
          <li className="relative group">
            <Link to='/WatchLive'>Watch Us Live</Link>
            <span className=" absolute left-0 bottom-0 mt-2 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
          </li>
          <li className="relative group">
            <Link 
            to='/about'
            onMouseEnter={ () => setIsDropownOpen(true)}
            onMouseLeave={ () => setIsDropownOpen(false)}
            >
            <span className=" absolute left-0 bottom-0 mt-2 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
            About
            
            {isDropdownOpen && (
              
              <div className="absolute mt-2 w-40 bg-black bg-opacity-75 text-white rounded-lg shadow-lg">
                <span className='absolute -top-5 left-0 right-0 h-6 bg-transparent'></span>
                <ul className="flex flex-col space-y-2 p-4">
                 <li className="hover:underline"><Link to="/pastor">Our Pastor</Link></li>
                 <li className="hover:underline"><Link to="/beliefs">Our Beliefs</Link></li>
                 <li className="hover:underline"><Link to="/service">Service Times</Link></li>
                </ul>
              </div>
            )}            
            </Link>


          </li>
          <li className="relative group">
            <Link to='/events'>Events</Link>
            <span className=" absolute left-0 bottom-0 mt-2 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
          </li>
          <li className="relative group">
            <Link to='/give'>Give</Link>
            <span className=" absolute left-0 bottom-0 mt-2 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
          </li>
          <li className="relative group">
            <Link to='/'>Plan Your Visit</Link>
            <span className=" absolute left-0 bottom-0 mt-2 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
          </li>
        </ul>
        

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black text-white transform ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          } transition-transform duration-300 ease-in-out z-50 flex flex-col items-center justify-center`}
        >
          {/* Close Button */}
          <button
            onClick={toggleMobileMenu}
            className="absolute top-9 right-4 text-white text-3xl"
          >
            <FaTimes />
          </button>

          {/* Mobile Menu Items */}
          {isMobileMenuOpen && (
          <div className="md:hidden mt-36 gap-2 absolute top-0 left-0 w-full h-screen bg-black bg-opacity-90 z-50 overflow-y-auto">
            <div className="px-4 mx-3 font-bold pt-4 gap-2 pb-4 space-y-4">
              <ul>
                <li className="border border-white ">
                  <Link to='/'
                  className="block text-lg w-full text-left pl-3 py-3 g hover:bg-gray-800 focus:outline-none">
                  HOME</Link>
                  
                </li>
                <li className="border border-white mt-3">
                  <Link to='/WatchLive'
                  className="block text-lg w-full text-left pl-3 py-3 hover:bg-gray-800 focus:outline-none"
                  >WATCH US LIVE</Link>
                </li>
                <div className="border border-white mt-3">
                  <Link
                    to='/about'
                    onClick={toggleDropdown}
                    className="flex gap-44 text-lg w-full text-left pl-3 py-3 hover:bg-gray-800 focus:outline-none"
                  >
                    ABOUT
                    {isDropdownOpen ? (
                      <AiOutlineMinus className="inline mt-1 text-2xl" />
                    ) : (
                      <AiOutlinePlus className="inline mt-1 text-2xl" />
                    )}
                  </Link>
                  {isDropdownOpen && (
                    <div className="space-y-2 bg-black text-center">
                      <Link to="/pastor" className="block text-lg py-2 hover:bg-gray-800">
                        OUR PASTOR
                      </Link>
                      <Link to="/beliefs" className="block text-lg py-2 hover:bg-gray-800">
                        OUR BELIEFS
                      </Link>
                      <Link to="/service" className="block text-lg py-2 hover:bg-gray-800">
                        SERVICE TIMES
                      </Link>
                    </div>
                  )}
                </div>                
                <li className="border border-white mt-3">
                  <Link to='/events'
                  className="block text-lg w-full text-left pl-3 py-3 hover:bg-gray-800 focus:outline-none"
                  >EVENTS</Link>
                </li>
                <li className="border border-white mt-3">
                  <Link to='/give' className="block text-lg w-full text-left pl-3 py-3 hover:bg-gray-800 focus:outline-none"
                  >GIVE</Link>
                </li>
                <li className="border border-white mt-3">
                  <Link to='/Visit'
                  className="block text-lg w-full text-left pl-3 py-3 hover:bg-gray-800 focus:outline-none"
                  >PLAN YOUR VISIT</Link>
                </li>
              </ul>
              {/* About with Dropdown */}

            </div>
          </div>
        )}
        </div>
      </nav>
    </div> 
  )
}

export default Navbar