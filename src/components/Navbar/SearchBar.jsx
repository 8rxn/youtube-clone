import React from 'react'
import {BsSearch} from 'react-icons/bs'
import { Input, Button } from "@material-tailwind/react";
const SearchBar = () => {

  const onChange=()=>{}

  return (
    <div className='rounded-3xl flex items-center ' >
      <input placeholder='Search' type="text" className='rounded-l-3xl h-full w-[35vw] px-4 rounded-r-none border-none mr-[2px] text-white placeholder:text-white/50 bg-[#121212] ' name='search'></input>
      
      <button className='text-white bg-none rounded-r-3xl bg-[#222222] p-3 px-6  '>
      <span className='bg-inherit text-white'>
      <BsSearch/>
      </span>
      </button>
    </div>
  )
}

export default SearchBar