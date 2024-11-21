import React from 'react'
import Banner from './components/Banner'
import Newarrivals from './components/Newarrivals'
import Categories from './components/Categories'

const Home = () => {
  return (
    <main>
      <Banner />
      <Newarrivals />
      <Categories />
    </main>
  )
}

export default Home