import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { products } from './mock/products'

export const ItemDetailContainer = () => {
  const {id}= useParams()
  const[item, setItem]=useState({})
  

  const getProducts=()=> new Promise ((resolve,rejet)=>{
    setTimeout (()=>resolve (products.find(product =>product.id ===id )),2000)
  })
  useEffect(()=>{
    getProducts()
    .then(response => setItem(response))
  })
  return (
    <>
    {item.leght
    ?
    <ItemDetail item={item}></ItemDetail>
    :
    <h1>..cargand</h1>
    }
    
    </>
  )
}
export default ItemDetailContainer