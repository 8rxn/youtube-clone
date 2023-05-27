import React from 'react'
import { Avatar,IconButton, Menu, MenuHandler, MenuList, MenuItem,Typography, } from '@material-tailwind/react'
import {IoIosNotifications} from 'react-icons/io'
import {RiVideoAddLine,RiUpload2Line,RiVideoLine} from 'react-icons/ri'
const NavProfile = () => {
  return (
    <div className='flex gap-6 absolute right-5 items-center'>


      <Menu placement="bottom-end">
          <MenuHandler>
        <IconButton variant="text" className='text-white text-xl rounded-full p-6 hidden md:inline-block'>
        <RiVideoAddLine/>
      </IconButton>
          </MenuHandler>
          <MenuList className="bg-[#323232] text-white px-8  border-none shadow-lg  shadow-[#121212]/10  ">
        <div className=" flex items-center gap-4 mb-4 text-xl">
        <span className=''><RiUpload2Line/></span>
        <h2 className=' text-start leading-6'>
          Upload
        </h2>
         
        </div>

        <div className=" flex items-center gap-4 text-xl">
        <span className=''><RiVideoLine/></span>
        <h2 className=' text-start leading-6'>
          Create
        </h2>
         
        </div>

        
        
      </MenuList>
    </Menu>

    
      <Menu placement="bottom-end">
          <MenuHandler>
          <IconButton variant="text" className='text-white text-xl rounded-full p-6 hidden md:inline-block'>
        <IoIosNotifications/>
      </IconButton>
          </MenuHandler>
          <MenuList className="bg-[#323232] text-white px-10  border-none shadow-lg  shadow-[#121212]/10  ">
        <div className=" flex items-center gap-8">

        <h2 className='text-lg text-start leading-6'>
          No Notifications yet
        </h2>
         
        </div>

        
        
      </MenuList>
    </Menu>
        
      <Menu placement="bottom-end">
          <MenuHandler>
        <Avatar size='sm' src=''></Avatar>
          </MenuHandler>
          <MenuList className="bg-[#323232] text-white px-5 pr-10 border-none shadow-lg  shadow-[#121212]/10  ">
        <div className=" cursor-pointer flex items-center gap-8">
        <Avatar size='sm'  src=''></Avatar>
        <h2 className='text-lg text-start leading-6'>
          Profile Name<br/><span className='text-sm'>Profile Tag</span>
        </h2>
         
        </div>
        <div className='h-[1px] my-4 w-full bg-white'>

        </div>
        <div className=" cursor-pointer  flex items-center gap-2">
        <h2 className='text-lg text-center leading-6'>
          Options
        </h2>
         
        </div>
        
        
      </MenuList>
    </Menu>
    </div>
  )
}

export default NavProfile