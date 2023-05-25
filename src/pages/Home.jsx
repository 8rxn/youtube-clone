import React from 'react'
import VideosGrid from '../components/VideosGrid/VideosGrid'
import Loader from '../components/Loader/Loader'

const Home = () => {
  return (
    <>
        <VideosGrid></VideosGrid>
        <Loader></Loader>
    </>
  )
}

export default Home