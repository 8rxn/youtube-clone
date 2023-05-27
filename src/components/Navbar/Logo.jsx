import React from 'react'
import {AiFillYoutube} from 'react-icons/ai'
import { IconButton } from '@material-tailwind/react'
// import {RxHamburgerMenu} from 'react-icons/rx'
import { Link } from 'react-router-dom'
const Logo = () => {
  return (
<Link to='/'>
    <div className='flex gap-1 items-center w-fit  absolute left-5 '>
       {/* <IconButton variant="text" className='text-white text-xl rounded-full p-6'>
        <RxHamburgerMenu/>
      </IconButton> */}
        
        <span className='text-red-500 text-4xl fill-white '><AiFillYoutube/></span>
        <span className='text-xl font-sans font-bold tracking-tightest text-white'>ClonedTube</span>
    </div>
</Link>
  )
}

export default Logo