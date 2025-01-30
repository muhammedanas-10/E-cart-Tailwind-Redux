import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import View from './Pages/View'
import Pnf from './Pages/Pnf'
import Footer from './Components/Footer'
import Header from './Components/Header'

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex-grow'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/wishlist' element={<Wishlist />}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/:id/view' element={<View/>}/>
          <Route path='/view' element={<View />} />
          <Route path='*' element={<Pnf />}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
