import React,{useContext} from 'react'
import WatchPage from '../components/WatchPage/WatchPage.component'
import Error from '../components/WatchPage/Error'
import { VideoDetails } from '../context/VideoContext'


const Watch = () => {

    const {video} =useContext(VideoDetails)
    console.log(video);


  if (video?.submission) {
    return (
        <>
        <WatchPage/>
        </>
      )
  }
  else{ 
    return (
        <>
        <Error></Error>
        </>
    )
  }
}

export default Watch