import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Newsarea from './components/Newsarea'

function Homepage() {
  return (
    <div className='all-initial'>
        <Header />
        <Newsarea />
        <Footer />
    </div>
  )
}

export default Homepage