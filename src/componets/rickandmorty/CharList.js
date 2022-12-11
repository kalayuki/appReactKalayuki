import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'
import { ChardCards } from './ChardCards'

const CharList = () => {
        //creamos el estado para poder verlo en el navegador como lista 
        const [personajes, setPersonajes]= useState([])
    
    useEffect(() => {
      //Establecemos la funcion  para quever lo que queremosal momento del mouting
       //getCharts()
         //sIMULAMOS PARA QUE SE RETRASE 5 MINUTOS 

         setTimeout (()=>{
            getCharts()
    
        },5000)
  
    }, [])

  /*
    const getCharts= () =>{
       


        //ponemos la api, a donde vamos hacre la peticion 

        const URL= 'https://rickandmortyapi.com/api/character'

        //Para realizarlo usamo fetch , le hacemos la peticion 
        //para que se resueva utilizaremos el metodo then
        //esperamos la respuestas y la caputramos en response 
        //nos devuelve un objeto de tipo reponse 
        //cuenta con un prototype json y text.


        fetch (URL)
        //Forma implicita 
        .then(response => response.json()
             //utiiamos console.log solo para ver 

             //console.log(response)

            //Utilizamos la conversion en json y texto , solo para observar este ultimo
            //lo retornamos ya que si le ponemos directamente tex , este nos devolvera una promesa 
            
            //Version json ****
            //Se puede utilizar return , pero mejor la implicita 
            //return response.json()

            //version text***
            //return response.text()

        )//volvemos a usar un then , para poder ver response en su conversion (json o text)
        .then(data=>{
            //Ahora si podemos verlo en consola 
            //Version Json 
            // en consola vemos que hay info y en result , se encuentra el array 
            //para poder verlo solo en consola solo el array sin toda la info  , pornemos Data.results
            //console.log(data.results)
            setPersonajes(data.results)

            //Version tex ******
            // le colcamos un toUpperCase para que lo podamos ver en mayuscula como ejemplo
                        //console.log(data.toUpperCase)
        })
    }*/

    //  **** ejemplos CON AWAIT ASYNC 

    // Await solo se utiliza en funciones asincronas 


    const getCharts= async () => {
      const URL ='https://rickandmortyapi.com/api/character'
      const response =await fetch (URL)
      const data= await response.json()
      setPersonajes(data.results)

    }
    
  return (
    <div className='cards'>
      <h1>Lista de personajes </h1> 

      {/* creamos un apparapoder ver la lista de los personasje del array  */}
      {/* Esta es una forma de hacerlos :

        {personajes.map(p => <li>{p.name}</li>)}

        Pero vamos a realizarlos con el compente que creamos ChardsCards, para que se creen tarjetas 
        de cada unos de los objetos que tenemos en nuestro array
      */}

      {/* Para crear card de cada uno de los personajes de nuetros array
        *Siempre tiene que tener una key en este caso como es unico utilizaremos el ID 
        * Llamamamos a todos los elementos del del array con el spreit oparetor  */}
              
      {personajes.map(p => <ChardCards  key={p.id} {...p}></ChardCards> )}
    </div>

  )
}

export default CharList
