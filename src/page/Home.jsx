import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import HomeContent from '../component/HomeContent'
import Carouse from '../component/Carouse'

function Home() {
  return (
    <>
      <Navbar/>
      <Carouse/>
      <HomeContent/>
      <Footer/>
    </>
  )
}

export default Home