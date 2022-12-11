import React from 'react'

const ProductsCards = ({id, name, stock}) => {
  return (
    <li>{id}. {name} - {stock}</li>
    
  )
}

export default ProductsCards