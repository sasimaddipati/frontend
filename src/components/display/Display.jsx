
import React from 'react'
import Header from '../header/Header'
import Home from '../home/Home'
import Menu from '../menu/Menu'
import Footer from '../footer/Footer'
import Menuitems from '../menuitems/Menuitems'
import Cart from '../cart/Cart'
import { Outlet ,Link} from 'react-router-dom'
import './Display.css'
const Display = () => {
  return (
      <div className='display'>
      <Header />
      <Home />
      <Menu />
      <hr className='hr'/>
      <Menuitems />
      <Footer />
      </div>
  )
}

export default Display