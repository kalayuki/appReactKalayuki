import React, { useEffect, useState } from 'react'
import ProductsCards from './ProductsCards'
//Ejemplo de la practica de la clase 6 

//la promesa se resolvera 3 segundo despues 
//Es un mencanismo que sera utilizado , hay mucha librarias que utilizan los mismo  


//Establecemos nuestro array 

const PRODUCTS=[

{id:1, name:'iPhone', stock : 12},
{id:2, name:'Galaxi', stock : 10},
{id:3, name:'Xiaomi', stock : 9},


]


const ProductsList = () => {
 //Para poder llevar el array a nuestro jsx
 //Tendra un array vacio 
 //Se hara un primer render , en donde no aparecera nada 
 //luego pasados los 3 segundo , el estado cambiara y se hara un re render , en donde aparecera el array 

  const [products, setProducts] = useState([])

  //*** EJEMPLO CON UN ESTADO INICIAL */

  // Podemos ponerle unos productos como estado inicial , ese primer render aparecera , luego apareceran a 
  //los tres minutos apareceran el resto y desaparecera motorola y nokia 

  //const [prducts, setProducts] = useState(['motorola','nokia'])


  useEffect(() => {
    
    
    //Ponemos la funcion que vamos a llamar que contendra la promesa 
    //le puedo poner un then ami , ya que no estamos esperando la pormes , que trae
    //complegidades y lo hacemos de una mejor forma asincrona 
        getProducts1().then(response=>{
          //veremos en el consola, el array harcodeado que vimos mas abajo 
         


          //Debido que en el userState tiene un array vacio, ahora le indicaremos que, 
          //queremos que el array sealo que traiga de response (e decir el array),llamando a setProducts

          setProducts(response)


        })
   
  }, []) //contiene un array vacion ya que esto sucedera solo cuando es realice el mouting 
  
  const getProducts1= ()=>{
    return new Promise((resolve, reject) => {
      //para que esta prmesa se resuelva 3 minutos depues  usamos setTimeout
      //es unapromesa que recibe un callback y despues un parametro que podemos poder cuantos minutos despues se realizara
      // Lo que contenga , sera lo que ocurrira tres minutos depues , segun este ejemplo

         setTimeout(()=>{
       
          resolve(PRODUCTS)
      }, 500//etos son los minutos 
      );
    })
  }


  return (
    <div>ProductsList
    {/* // Para que se pueda ver traeromos a products que es el estado que esta en useState, utilizando un map */}
    {/* Debe tener un inidice unico"KEY" , como es un array simple , no tiene el id , que seria el indice unico 
    debido a eso vamos a utilizar un parametro mas i , para que esa su KEY  */}

    {/* Debido a que vamos a poner unas card y etso tendra mas logica , la mejor forma es que 
    separemos esta logica  en un nuevo componente ProductCards, por lo tanto dejara de ser de 
    esta forma (comentamos para que quede registrado )
    
    {products.map ( ( p , i ) => <li key={i}> { p.name } </li>)} */}

    {/****  FORMA QUE UTILIZAREMOS CON EL COMPONENTE ProductCards**** */}

    {/* Sacamos i por que no es necesario establecerlo ya que utilizaremos el ID , para la key */}
    {/* Llamos al nuevo componente , asi podremos plasmar como se vera el array en el navegador "ProductsCards" */}
    
    {/* Necesitamos pasarle a ProductsCards , los compnenete del array y los  pasaremos como parametrso
    ejemplo de la forma manual name={p.name}
    la forma mas rapida de pasar todo los componente es con ...p  */}
    {products.map  ( p   => <ProductsCards key={p.id} {...p} /> )}
    </div>
  )
  
}

export default ProductsList