import React from 'react'

import shoe1 from '../assets/images/shoes1.jpg'
import CardProducts from '../Fragments/CardProducts'

const products = [
  {
    id: 1,
    title: 'Nike Air Force',
    price: '$99',
    images: shoe1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper, dui sed bibendum dapibus, sem erat auctor ligula, et eleifend ligula eros eget mi.'
  }
]
const ProductsPage = () => {
  return (
    <div className='flex justify-center py-5'>
      <CardProducts>
        <CardProducts.Header images={shoe1}/>
        <CardProducts.Body title ="Nike Air Force">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper, 
          dui sed bibendum dapibus, sem erat auctor ligula, et eleifend ligula eros eget mi.
        </CardProducts.Body>
        <CardProducts.Footer price="$99"/>
      </CardProducts>
      <CardProducts>
        <CardProducts.Header images={shoe1}/>
        <CardProducts.Body title ="Nike Air Force">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper, 
          dui sed bibendum dapibus, sem erat auctor ligula, et eleifend ligula eros eget mi.
        </CardProducts.Body>
        <CardProducts.Footer price="$99"/>
      </CardProducts>
      <CardProducts>
        <CardProducts.Header images={shoe1}/>
        <CardProducts.Body title ="Nike Air Force">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper, 
          dui sed bibendum dapibus, sem erat auctor ligula, et eleifend ligula eros eget mi.
        </CardProducts.Body>
        <CardProducts.Footer price="$99"/>
      </CardProducts>
      <CardProducts>
        <CardProducts.Header images={shoe1}/>
        <CardProducts.Body title ="Nike Air Force">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper, 
          dui sed bibendum dapibus, sem erat auctor ligula, et eleifend ligula eros eget mi.
        </CardProducts.Body>
        <CardProducts.Footer price="$99"/>
      </CardProducts>
    </div>
  )
}

export default ProductsPage