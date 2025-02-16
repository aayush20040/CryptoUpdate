import React from 'react'
import './App.css'
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom'
import Cryptodetails from './Pages/Cryptodetails'
import Home from './Pages/Home'
import Navbar from './components/Navbar'
import Trending from './components/Trending'
function App() {
  

  return (
    <BrowserRouter>
    <Navbar/>
    <Home/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Cryptodetails" element={<Cryptodetails/>} />
    </Routes>

    </BrowserRouter>
   
  )
}

export default App
