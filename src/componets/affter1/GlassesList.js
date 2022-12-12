import React, { useEffect, useState } from 'react'
import { PRODUCTS } from '../Data/Glasses'
import { GlassCard } from './GlassCard'

/* BORRAMOS EL ARRAY YA QUE NO LO LLEVAMOS A DATA- GLASSES , PARA QUE SEA MEJOR 
const PRODUCTS= [
    {id:1 , title:"RayBan", descriptio: "Son un gran marco de lentes ", price:1500, stock:100},
    {id:2 , title:"Vogue", descriptio: "Son un gran marco de lentes ", price:3500, stock:100},
    {id:3 , title:"Rusty", descriptio: "Son un gran marco de lentes ", price:1000, stock:100},
    {id:4 , title:"Vulk", descriptio: "Son un gran marco de lentes ", price:1900, stock:100},
]
*/


//Paso 1 

  // * NO ES COMVENIENTE USAR UN ASYNC YA QUE TPODEMOS TENER ERRORES 
     // deferiamos definir una funcion dentro , dara error per en el afrte1 se podra ver la solucion 
                        // CON ASYNC 
                        // DENTRO DE USEEFFECT = (async ()=> 
                        // const res = await getProduct()
                        // console.log (res))
     // en este caso es mejor usar THEM 

     //ARMAMOS ESTRUCTURA DE GLASSELSLIST RAFCE (PASO 1),
     //  THEN (capura la respuesta de la promesa)
     // CACHT (Captura el error de la promesa)

const GlassesList = () => {
   //PASO 3 
        // USESTATE , primes rende array vacio, segundo render lo que esta guardado en nuestr estado (entra por)
        //NOMBRES , establcemos los nombres de nuestro estado , objeto estatido ITEMS , el que cambia SETITMES 
        //[] USESTATE,  debe tener un array vacion 
        const [items, setItems] = useState([])
        
    useEffect(()=>{

        //RES CAPUTA LA RESPUESTA , NOS DEJA VER EL ARRAY 
        getProducts ().then(res =>{
        
            // PASO 4 
            //SETITEMS , ya los items que se resulven 2 s (res , nombre que establecimos en el then ) despues esta guardado en nuestro estado 
            setItems(res)
        })
        .catch (err => { console.log (err)})

    }, [])

// PASO 2 
//DEFINIMOS FUNCION GETPRODUCTS 
    //DEFINIMOS  LA PROMESA (resolve reject)
    // SETTIMEOUT, definimos el restraso que tendra en resolverse (resolve ) , ejemplo 2 minutos 

    const getProducts = () => {



        return new Promise (( resolve, reject)=>{
            setTimeout(()=>{
                resolve(PRODUCTS)
            }, 2000)

            
        })

    }

 

  return (
    //PASO 3 
    //ITEMSA.MAP ,  traemos el array y creamos uno nuevo con MAP 
    //I, nombre del nuevo array creado con MAP ,que nos permitira acceder a todas las propiedades del arrayy
    //KEY ,  debe tener SIEMPRE  una key y debe ser unica  , le adjudicamos el id 

    //PASO 4
    //GLASSCARDS, creamos el archivo glasscard en la carpeta affetr1 , en donde definiremos el modelo de card que utilizaremos para ver los productos
    //IMPORT, colocamos el nuevo componente para llamarlo y lo importamos
    //{...i} por medio de spride operator , llamamos a todos los componentes de nuestros array 

    <div>
    {items.map(i=> <GlassCard key={i.id} {...i} /> )}
    </div>
  )

  //PASO 5 
  //... VER ARCHIVO DE GLASSCARDS
}

export default GlassesList