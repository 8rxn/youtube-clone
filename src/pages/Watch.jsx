import React,{useEffect} from 'react'
import ReactPlayer from 'react-player' 
import { VideoDetails } from '../context/VideoContext';
import {AiOutlineLike, AiOutlineComment,AiOutlineLink} from 'react-icons/ai'
import { Chip } from '@material-tailwind/react';

const PlaceHolder=()=>{
    return(
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ipsum ex cum nulla voluptatibus ut iure aliquid expedita ratione. Voluptatibus eveniet expedita distinctio iusto id consequuntur, quidem recusandae a quasi.</h1>
    )
}

const Watch = () => {
const {video}= React.useContext(VideoDetails);

let width = window.innerWidth

  return (
    <>
    <div className='flex w-fit m-auto gap-4 flex-col md:hidden sm:items-start  items-center '>
        {width<720 && <ReactPlayer playing={true} controls={true} width={"95vw"} height={"190vw"}  url = {video?.submission?.mediaUrl} />}
        <div className='text-start md:w-[30vw] sm:w-[80vw] max-w-[95vw] overflow-hidden m-auto flex flex-col gap-4'>
            <h2 className='font-bold text-2xl'>  {video.submission.title}</h2>
            <div className='flex w-full min-[450]:justify-start justify-center'>
                <Chip variant='outlined' className='bg-[#222222] hover:bg-[#323232] border-[#121212] duration-100 ease-in rounded-3xl w-full mx-3 max-w-[30vw] text-center text-lg cursor-pointer text-white' value={video.reaction.count + ""} icon={<AiOutlineLike/>} />
                <Chip variant='outlined' className='bg-[#222222] border-[#121212] hover:bg-[#323232] duration-100 text-lg ease-in rounded-3xl mx-3 w-full max-w-[30vw] text-center text-white cursor-pointer' value={video.comment.count} icon={<AiOutlineComment/>} />
                    
            </div>
            <div className=' flex gap-4 items-center'>
                <img src={video.creator.pic} alt={video.creator.name+" Logo"} className='w-12 aspect-square rounded-full' />
                <div>
                <h2 className='font-semibold text-xl leading-6 md:w-fit w-[35vw] min-[400]:w-[45vw] text-ellipsis overflow-hidden'>{video.creator.name}</h2>
                <p className='text-sm font'>{video.creator.handle}</p>
                </div>
                <button className='bg-transparent border-2 rounded-xl px-4'> Follow </button>
            </div>
            <h2>{video.submission.description}</h2>
            <a href={video.submission.hyperlink} target='_blank' rel='noreferrer'  className='bg-[#121212] border-2 rounded-xl px-4 w-fit py-2 hover:bg-[#222222] m-auto duration-150 ease-in'>Go to GroCare <span><AiOutlineLink></AiOutlineLink> </span></a>
        </div>
    </div>

    {/* //Desktop Player */}
    <div className='hidden w-fit m-auto gap-4 md:flex  '>
        {width > 720 && <ReactPlayer playing={true} controls={true} width={450} height={900}  url = {video?.submission?.mediaUrl} />}
        <div className='text-start w-[35vw]  overflow-hidden m-auto flex flex-col justify-start gap-4'>
            <h2 className='font-bold text-2xl'>  {video.submission.title}</h2>
            
            <div className=' flex gap-4 items-center'>
                <img src={video.creator.pic} alt={video.creator.name+" Logo"} className='w-12 aspect-square rounded-full' />
                <div>
                <h2 className='font-semibold text-xl leading-6 md:w-fit w-[35vw] min-[400]:w-[45vw] text-ellipsis overflow-hidden'>{video.creator.name}</h2>
                <p className='text-sm font'>{video.creator.handle}</p>
                </div>
                <button className='bg-[#121212] border-2 rounded-xl px-4 hover:bg-[#222222] duration-150 ease-in py-1'> Follow </button>
            </div>

            <div className='flex gap-4'>
                <Chip variant='outlined' className='bg-[#222222] hover:bg-[#323232] border-[#121212] duration-100 ease-in rounded-3xl px-8 text-lg cursor-pointer text-white' value={video.reaction.count + ""} icon={<AiOutlineLike/>} />
                <Chip variant='outlined' className='bg-[#222222] border-[#121212] hover:bg-[#323232] duration-100 text-lg ease-in rounded-3xl px-8 text-white cursor-pointer' value={video.comment.count} icon={<AiOutlineComment/>} />
                    
            </div>
            <h2>{video.submission.description}</h2>

            <a href={video.submission.hyperlink} target='_blank' rel='noreferrer'  className='bg-[#121212] border-2 rounded-xl px-4 w-fit py-2 hover:bg-[#222222] duration-150 ease-in self-end '>Go to GroCare <span><AiOutlineLink></AiOutlineLink> </span></a>
        </div>
    </div>
    </>
  )
}

export default Watch