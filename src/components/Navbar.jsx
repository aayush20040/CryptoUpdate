import React from 'react'
import {LogoIcon} from '../icons/Icon'
function Navbar() {
  return (
    <div className='bg-gray-800 text-white h-14  flex  items-center '>
        <div className='   max-w-7xl w-full  mx-auto px-2 text-2xl '>
        <div className='flex items-center gap-1 cursor-pointer'>
            <LogoIcon/>
            <p><span className='text-yellow-500'>C</span>rypto<span className='text-yellow-500'>U</span>pdate</p>

        </div> 
        </div>
      
    </div>
  )
}

export default Navbar
