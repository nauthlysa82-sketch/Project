import React from 'react'
import Womencart from '../component/Womencart'
import { Link } from 'react-router-dom'

function Women() {
  return (
    <div>
      {/* <Link to={`/products/women/${pr.id}`}></Link> */}
      <Womencart/>
    </div>
  )
}

export default Women