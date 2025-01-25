import React from 'react'
import first_image from '../../assets/detectify_image.png';

function Header() {
  return (
    <>
    <header className='sticky top-0 z-10 '>
        
        <nav className='bg-gray-200 h-20  shadow-md'>
          <div className='flex  items-center justify-between'>
            <div className=' flex items-center px-10 py-4 text-2xl  font-medium  '>
                 
                 <strong className='text-4xl'>D</strong>etectify
                 <img src={first_image} className='w-15 hover:scale-125 transition-transform duration-300 ' alt="" />
            </div>
            <ul className='flex space-x-16 items-center px-10 py-4 text-xl font-medium'>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              
            </ul>
            <button className='px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition duration-300 flex mr-11 focus:ring-2 focus:ring-blue-500 focus:outline-none'>Contact</button>
          </div>
        </nav>
    </header>
    </>
  )
}

export default Header
