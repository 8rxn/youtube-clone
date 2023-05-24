import React from 'react'
import useFetch from '../../hooks/useFetch'

const VideosGrid = () => {
    const getData=async()=>{
        const data = await useFetch(1);
        console.log(data)
    }
    getData();
  return (
    <div className='grid w-full h-full '>

    </div>
  )
}

export default VideosGrid