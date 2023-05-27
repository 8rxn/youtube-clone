import { useState } from 'react'
import './App.css'
import Navbar from './components/shared/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Watch from './pages/Watch'
import { VideoDetails } from './context/VideoContext'

function App() {
  const [video,setVideo]=useState({});
  const [page, setPage] = useState(1);
  const [data, setData] = useState([])
  const [searchText, setSearchText] = useState("");

  return (
    <VideoDetails.Provider value={{video,setVideo,page,setPage,data,setData,searchText,setSearchText}}>
    <nav className='w-full h-20
     fixed top-0 bg-[#0f0f0f]'>
      <Navbar></Navbar>
    </nav>
      <div className='mt-20'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/watch' element={<Watch/>}></Route>
      </Routes>
      </div>
    </VideoDetails.Provider>
  )
}

export default App
