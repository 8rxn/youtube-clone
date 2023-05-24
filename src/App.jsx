import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@material-tailwind/react'
import Navbar from './components/shared/Navbar'
import { Route, Routes } from 'react-router-dom'
import VideosGrid from './components/shared/VideosGrid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav className='w-full'>
      <Navbar></Navbar>
    </nav>
      <Routes>
        <Route path='/' element={<VideosGrid/>}></Route>
      </Routes>
    </>
  )
}

export default App
