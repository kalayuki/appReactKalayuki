import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./itemList"
import { products } from "./mock/products"


const ItemListContainer = () => {

  const{idCategory}=useParams()

  const [productList, setproductList] = useState([])

  const getProducts=()=>new Promise ((resolve,reject)=>{
  const{idCategory}=useParams()
    setTimeout(()=>resolve (products.find(products=>products.id === 1)),2000)
  })
  useEffect(() => {
    if(idCategory){
      getProducts()
    .then(products=>setproductList(products.filter(product=>productList.category ===idCategory)))
    .catch(error =>console.error(error))
    }else{
      getProducts()
    .then(products=>setproductList(products))
    .catch(error =>console.error(error))
    }
    return ()=> setproductList([])
  
    
  }, [idCategory])
  
  return (
    <>
    {
      productList.length?
      <ItemList productList={productList}/>
      :<h1>...cargando</h1>

      
    }
    </>
  )
}

export default ItemListContainer