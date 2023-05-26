import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import VideoCard from "../shared/VideoCard";
import VideosGridskeleton from "./VideosGrid.skeleton";
import Loader from "../Loader/Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import { VideoDetails } from "../../context/VideoContext";

const VideosGrid = () => {
  const {page, setPage}= useContext(VideoDetails)
  const [data, setData] = useState([])


  useEffect(() => {
    let reqOptions = {
        url: `https://internship-service.onrender.com/videos?page=${page}`,
        method: "GET",
      }
      async function fetchPosts(){
          let response = await axios.request(reqOptions);
          const values=  response.data.data.posts;
          if(page!=1){
            setData(data => [...data,...values]);
          }
          else{
            setData(values);
          }
        }
        fetchPosts();
    },[page]);    


  if (data?.length > 0) {

    return (
      <InfiniteScroll dataLength={data.length} next={()=>{setPage(page+1)}} hasMore={true} loader={<Loader/>}>
        <div className="grid mx-auto md:mx-10 h-full grid-cols-1   min-[500px]:grid-cols-2  md:grid-cols-3 xl:grid-cols-5    gap-10">
        {data?.map((item, i) => (
          <VideoCard key={i} item={item}></VideoCard>
        ))}
      </div>
      </InfiniteScroll>
    );
  } else {
    return <VideosGridskeleton />;
  }
};

export default VideosGrid;
