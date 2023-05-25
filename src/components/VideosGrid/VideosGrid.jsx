import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import VideoCard from '../shared/VideoCard';
import VideosGridskeleton from './VideosGrid.skeleton';
const VideosGrid = () => {



  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
 const res = useFetch(page);

 useEffect(() => {
  setData(res[0]?.data?.posts)
  console.log(res)

 
 
 }, [res])
 
    

    if (data?.length>0){

      return (
        <div className='grid mx-auto md:mx-10 h-full grid-cols-1   min-[500px]:grid-cols-2  md:grid-cols-3 xl:grid-cols-5    gap-10'>
      {data?.map((item,i)=>( <VideoCard key={i} item={item} ></VideoCard>))}
    </div>
  )
}

else {
   return (
    <VideosGridskeleton/>   
   )
}

}

export default VideosGrid