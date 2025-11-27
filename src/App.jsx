import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './Pages/Home'
import Header from './Pages/header'
import Contact from './Pages/contact'
import Heads from './Pages/Heads'



function App() {
  return (
    <>
    <Toaster />
    <BrowserRouter>
    <Routes>
  <Route path=''element={<Home/>}/>
  <Route path='/about'element={<Header/>}/>
  <Route path='/contact'element={<Contact/>}/>
  <Route path='/head'element={<Heads/>}/>

    </Routes>
    </BrowserRouter>
    </>

  )
}

export default App
