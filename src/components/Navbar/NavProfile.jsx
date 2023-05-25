import React from 'react'
import { Avatar,IconButton, Menu, MenuHandler, MenuList, MenuItem,Typography, } from '@material-tailwind/react'
import {IoIosNotifications} from 'react-icons/io'
import {RiVideoAddLine} from 'react-icons/ri'
const NavProfile = () => {
  return (
    <div className='flex gap-6 absolute right-5 items-center'>

        <IconButton variant="text" className='text-white text-xl rounded-full p-6 hidden md:inline-block'>
        <RiVideoAddLine/>
      </IconButton>
        <IconButton variant="text" className='text-white text-xl rounded-full p-6 hidden md:inline-block'>
        <IoIosNotifications/>
      </IconButton>
      <Menu placement="bottom-end">
          <MenuHandler>
        <Avatar size='sm' src=''></Avatar>
          </MenuHandler>
          <MenuList>
        <MenuItem className="flex items-center gap-2">
          {/* <UserCircleIcon strokeWidth={2} className="h-4 w-4" /> */}
          <Typography variant="small" className="font-normal">
            My Profile
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
          {/* <Cog6ToothIcon strokeWidth={2} className="h-4 w-4" /> */}
          <Typography variant="small" className="font-normal">
            Edit Profile
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
          {/* <InboxArrowDownIcon strokeWidth={2} className="h-4 w-4" /> */}
          <Typography variant="small" className="font-normal">
            Inbox
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
          {/* <LifebuoyIcon strokeWidth={2} className="h-4 w-4" /> */}
          <Typography variant="small" className="font-normal">
            Help
          </Typography>
        </MenuItem>
        <hr className="my-2 border-blue-gray-50" />
        <MenuItem className="flex items-center gap-2 ">
          {/* <PowerIcon strokeWidth={2} className="h-4 w-4" /> */}
          <Typography variant="small" className="font-normal">
            Sign Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
    </div>
  )
}

export default NavProfile