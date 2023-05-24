import React from 'react'
import {AiFillYoutube} from 'react-icons/ai'
import { IconButton } from '@material-tailwind/react'
import {RxHamburgerMenu} from 'react-icons/rx'
const Logo = () => {
  return (
    <div className='flex gap-1 text-3xl items-center w-fit  absolute left-5 '>
       <IconButton variant="text" className='text-white text-xl rounded-full p-6'>
        <RxHamburgerMenu/>
      </IconButton>
        
        <span className='text-red-500 fill-white '><AiFillYoutube/></span>
        <span className='text-xl font-sans font-bold tracking-tightest text-white'>YouTube</span>
    </div>
  )
}

export default Logo