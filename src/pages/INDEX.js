import React from 'react'
import NavBar from '../components/NavBar'
import Home from '../components/Home'
import Posts from '../components/Posts'
import Blogs from '../components/Blogs'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
function INDEX() {
  return (
    <>
        <NavBar />
        <Home />
        <Posts />
        <Blogs />
        <Newsletter />
        <Footer />
    </>
  )
}

export default INDEX