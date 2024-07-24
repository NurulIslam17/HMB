import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import HomeContent from '../component/HomeContent'
import Carouse from '../component/Carouse'
import Paginate from '../component/Paginate'

function Home() {
  return (
    <>
      <Navbar/>
      <Carouse/>
      <HomeContent/>
      <Paginate/>
      <Footer/>
    </>
  )
}

export default Home