import React from 'react'
import Footer from './Page/Footer'
import ProductDetail from './component/Productdetail'
import Nabar1 from './component/Navbar/Nabar1'

function App() {
  return (
    <div>



      <div className="sticky-top">
        <Nabar1 />;
        <ProductDetail/>
        <Footer />

      </div>

    </div>
  )
}

export default App