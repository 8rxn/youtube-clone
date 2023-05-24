import React from 'react'
import Logo from '../Navbar/Logo'
import SearchBar from "../Navbar/SearchBar"
import NavProfile from '../Navbar/NavProfile'
const Navbar = () => {
  return (
    <div className='sticky top-0 p-2 flex justify-center '>
      <Logo/>
      <SearchBar></SearchBar>
      <NavProfile></NavProfile>
    </div>
  )
}

export default Navbar