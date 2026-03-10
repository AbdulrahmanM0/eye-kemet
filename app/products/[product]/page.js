import Exclusive from '@/_ui/home/deals/Exclusive'
import Details from '@/_ui/productdetails/details/Details'
import React from 'react'

function Product() {
    const productsSlides = {
    title: "You May also like",
    slogan: "Explore our best accessories products ",
  }
  return (
    <div>
        <Details />
        <Exclusive {...productsSlides}/>
    </div>
  )
}

export default Product
