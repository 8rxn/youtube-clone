import React from 'react'
import Logo from '../Navbar/Logo'
import SearchBar from "../Navbar/SearchBar"
import NavProfile from '../Navbar/NavProfile'
const Navbar = () => {
  return (
    <div className=' p-2 flex justify-center pb-10'>
      <Logo/>
      <SearchBar></SearchBar>
      <NavProfile></NavProfile>
    </div>
  )
}

export default Navbar