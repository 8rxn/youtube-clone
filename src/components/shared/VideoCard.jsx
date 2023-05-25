import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import { VideoDetails } from '../../context/VideoContext';

const VideoCard = ({item}) => {
  const {setVideo}= useContext(VideoDetails);
  const{submission, creator}=item

  return (
    <Link to={`/watch`} onClick={()=>{setVideo(item)}}>
    <div className='flex flex-col w-full gap-4 '>
        {<img src={submission.thumbnail} loading='lazy' width={314} height={176} className='rounded-lg' /> ||  <Skeleton count={1} height={300} ></Skeleton>}
        <div className="flex gap-4 text-start"> 
        <img src={creator.pic} loading='lazy' className=' w-12  aspect-square h-fit rounded-full object-cover' alt={creator.name+" channel"} />
        <div>
        <h2 className='text-lg text-ellipsis overflow-hidden w-3/4 '>{submission.title}</h2>
        <h3 className=' text-sm text-white/80'>{creator.name}</h3>
        </div>
        </div>
    </div>
    </Link>
  )
}

export default VideoCard