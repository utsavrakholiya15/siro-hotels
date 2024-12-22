import React from 'react'
import Header from './header'
import { Outlet } from 'react-router-dom'
import Footer from './footer'

export default function Components() {
  const handleOnScroll = (ev) => {
    console.log(window.scrollY);
  };
  return (
    <div onScroll={handleOnScroll}>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
