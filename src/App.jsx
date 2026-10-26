import React from 'react'
import Footer from './Page/Footer'
import ProductDetail from './component/Productdetail'
import Nabar1 from './component/Navbar/Nabar1'
import Menproductdetail from './component/Menproductdetail'
import { Route, Routes } from 'react-router-dom'
import Mencart from './component/Mencart'

function App() {
  return (
    <div>



      <div className="sticky-top">
        <Nabar1 />;
        <ProductDetail />
        <Footer />

      </div>

    </div>
  )
}

export default App