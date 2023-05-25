import React from 'react'
import SkeletonCard from '../shared/SkeltonCard'

const VideosGridskeleton = () => {
  return (
    <div className='grid mx-auto md:mx-10 h-full grid-cols-1   min-[500px]:grid-cols-2  md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-7   gap-10'>
        <SkeletonCard></SkeletonCard>
        <SkeletonCard></SkeletonCard>
        <SkeletonCard></SkeletonCard>
        <SkeletonCard></SkeletonCard>
        <SkeletonCard></SkeletonCard>
        <SkeletonCard></SkeletonCard>
        <SkeletonCard></SkeletonCard>
        <SkeletonCard></SkeletonCard>
        <SkeletonCard></SkeletonCard>
        <SkeletonCard></SkeletonCard>
        <SkeletonCard></SkeletonCard>
        <SkeletonCard></SkeletonCard>
        <SkeletonCard></SkeletonCard>
        <SkeletonCard></SkeletonCard>
        <SkeletonCard></SkeletonCard>
    </div>
  )
}

export default VideosGridskeleton