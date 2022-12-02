import React, { useEffect } from 'react'

//Promesas Clase 6

const ProductsList_ej1y2 = () => {

   /*} Con fech hacemos una peticion a un servidor externo , seguramente querramos 
    hacerlo solo de una vez , nos convendria hacer esa peticion en el momento del mouting, 
    // si quiciera hacer el llamado en ese momento , le dare la orden en una funcion getProduct,
    y utilizo el useEffect con el array vacio para que se haga solo al inicio */ 


    //Para al momento del montaje del producto 
    useEffect (()=>{
        //Llamo a la funcion
        getProducts()
    },[])

    const getProducts =()=>{

        //Ponemos este console. log para ver que es lo que ocurre (La comentamos despues de verla)
       // console.log('Trayendo productos...')

       //Creamos la promesa 
       /*la promesas reciben un callback que serian (resuelto, rechazado), es decir 
       que suceda algo cuando se resuelva y otra cosa cuando se rechace*/
       const productPromise=new Promise((resolver, reject) => {
         
        
         /******** Ejemplo 1**********/
        //Establecemos un estado en el caso que sea resuelta (resolver)
         /*
        resolver('se resolvio satisfactoriamente ')
        reject('la promesa fue rehazada ')
        */

        /******** Ejemplo 2**********/

        //vemos un ejemplo con codicionales 
        
        //CReamos una constante rand , para poder obtener un numero aleatorio con Math.random

        const rand = Math.random()

        //ponemos el console solo para ver los numero y que sucede 
         console.log(rand)
        // CReamos las condionels 
       if(rand >0.5){
        resolver('se resolvio satisfactoriamente ')
       }
       reject('la promesa fue rehazada ')

       })

       //Para poder ver que es lo que ocurre  tenemos que llamar con el metodo then, cuando esta es resuelta 
       

       /*** la promesa queda igual para los dos ejemplos  */
       //Llmamos a la promes + then, respuesta puede ser cualquier nombre 
       productPromise.then((response) =>{
           
         /*debido a que es el then, es decir que es true , resuelto 
         este traera la estuctura indicada de cuando se realizo a el resolver , entra como parametro 
         respuesta cuando es true (resolver )*/
        console.log('RESPUESTA : ',response)
       }).catch((err)=>{
        //En el caso de que sea rechazada , se utulizara el metodo catch
        console.log('ERROR:',err)
       })
    }

  return (
    <div>ProductsList</div>
  )
}

export default ProductsList_ej1y2