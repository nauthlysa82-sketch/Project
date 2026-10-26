import React from 'react'
import Kidcart from '../component/Kidcart'
import { Link } from 'react-router-dom'


function Kids() {
  return (
    <div>
      <Link to={`/products/kids/${pr.id}`}></Link>
      <Kidcart />
    </div>
  )
}

export default Kids