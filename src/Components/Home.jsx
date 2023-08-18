import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Product from './Product'
import FeatureProduct from './FeatureProduct'

function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Banner />
      <FeatureProduct />
    </div>
  )
}

export default Home