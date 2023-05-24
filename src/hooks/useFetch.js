import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (page) => {
  const [data, setData] = useState();

  useEffect(() => {
    let reqOptions = {
        url: `https://internship-service.onrender.com/videos?page=${page}`,
        method: "GET",
      }
      async function fetchData(){
          let response = await axios.request(reqOptions);
          setData(response.data)
        }

        fetchData();
    },[page]);    

  return [data];
};

export default useFetch;