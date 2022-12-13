import React from 'react'
import card from './card'

export const ItemList = ({productList}) => {

  return (
    <div style={{display:'flex',gap:'2rem'}}>
      {
        productList.map(item=><card key ={item.id} img={item.id} title={item.title} stock={item.stock} precio={item.precio} id={item.id}/>)
      }
    </div>
  )
}
export default ItemList