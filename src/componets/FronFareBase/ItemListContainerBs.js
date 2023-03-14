import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



const ItemListContainerBs = ({greeting}) => {


    const [productList, setProductList] = useState([])

    
       const {id}=useParams()

       const [loading, setLoading] = useState(false)

       const getProducts = async ()=>{

        const db = getFirestore()

        const collectionRef = id ? query (collection(db, "items "), where("category","==",id)) : collection(db,"items")

        const snapshot= await getDocs(collectionRef)

        setTimeout (()=>{

            setProductList (snapshot.docs.map(d=>({id: d.id, ...d.data})))

            setLoading(false)




        }, 1000)




       }

       useEffect(() => {
         setLoading(true)
         getProducts()
         .then((res)=> setProductList(res))
       }, [id])
       




  return (
    <>
    <div>
        <h2>{greeting}</h2>

        {loading? <div>Nombre </div>:<div>Hola</div>}

    </div>
    </>
  )
}

export default ItemListContainerBs