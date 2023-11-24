import React from 'react'
import Header from '../components/Header'
import Categoriesbanner from '../components/Categoriesbanner'
import Todaysection from '../components/Todaysection'
import Footer from '../components/Footer'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <div>
    <Header/>
    <Categoriesbanner/>
    <Todaysection/>
    <Categories/>
    <Footer/>
    </div>
  )
}

export default Home