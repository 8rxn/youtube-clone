import React from 'react'
import ReactPlayer from 'react-player'


const VideoPlayer = ({width,height,url}) => {
  return (
    <ReactPlayer config={{
        file:{
            attributes:{
                controlsList:"nodownload "
            }
        }
    }} playing={true} controls={true} width={width} height={height}  url = {url} /> 
  )
}

export default VideoPlayer