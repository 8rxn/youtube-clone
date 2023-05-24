import React from 'react'

const VideoCard = ({title,thumbnailSrc,creatorLogo, creator}) => {
  return (
    <div className='flex flex-col'>
        <img src={thumbnailSrc} loading='lazy' alt={title+" thumbnail"} />
        <div className="flex"> 
        <img src={creatorLogo} alt={creator+" channel"} />
        <h2>{title}</h2>
        </div>
        <h3>{creator}</h3>
    </div>
  )
}

export default VideoCard