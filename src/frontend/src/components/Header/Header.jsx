import React from 'react'
import first_image from '../../assets/detectify_image.png';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
    <header className='sticky top-0  z-50'>
        
        <nav className=' h-20  shadow-md bg-white'>
          <div className='flex  items-center justify-between'>
            <div className=' flex items-center px-10 py-4 text-2xl  font-medium  '>
                 
                 <strong className='text-4xl'>D</strong>etectify
                 <img src={first_image} className='w-15 hover:scale-125 transition-transform duration-300 ' alt="" />
            </div>
            <ul className='hidden sm:flex space-x-16 items-center px-10 py-4 text-xl font-medium'>
              <NavLink to="/" exact activeClassName='text-blue-500'>
                <li>Home</li>
              </NavLink>
              <NavLink to='/About' activeClassName='text-blue-500'>
              <li>About</li>
              </NavLink>
              <NavLink to="/Services" activeClassName='text-blue-500'>
              <li>Services</li>
              </NavLink>
              
              
            </ul>
            <NavLink to="/Contact">
            <button className='px-4 py-2  text-white font-bold rounded  flex mr-11 focus:ring-2 focus:ring-blue-500 focus:outline-none   bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500'>Contact</button>
            </NavLink>
            
          </div>
        </nav>
    </header>
    </>
  )
}

export default Header
