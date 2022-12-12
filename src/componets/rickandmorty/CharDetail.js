import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



const CharDetail = () => {
    //C8 - 2 PASO 2
//UTILIZAMOS USEPARAMS, paarpoder extraer el id ,es decir este captura 


const {charId}= useParams()
        //C8 -2 PASO 6
        //useState(), establecemos nuestro estado 
        //De esta manera cuando se covierta la informacion a json , ahi la traremos en nuestro setChar

        const [char, setChar] = useState()

    //C8-2 PASO 4
    // useEffect, llamamos a la funcion getChardDetail()
    //[charId], se realizara en el mount , pero le ponemos charid por si ya esta motado el cambio 
    useEffect(() => {
      getChardDetail()
      
    }, [charId])
    
    // c8-2 PASO 5
    //getChardDetail(), establecemos la funcion que asincrona (async), que realizara la peticion al api de donde viene la informacion
    //const URL ='https://rickandmortyapi.com/api/character', llamamos a la url de la api
    //const response = await fetch (URL), usamos fech , donde informamos que respose , espara a la url por medio de fetch
    //(URL + charId), de esta forma la concatenamos , tambien podria ser templet 
    // const data = response.json(), de esta forma convertidmos en jso a los datos de nuestra api
    const getChardDetail=async()=>{
        const URL ='https://rickandmortyapi.com/api/character/'
        const response = await fetch (URL + charId)
        const data = await response.json()
        console.log(data)
        //C8 - 2 PASO 7
        //LLAMAMOS A NUESTRO SETCHAR , PARA GUARDAR NUESTRA DATA 

        setChar(data)
    }
    //C8 - 2 PASO 3
    //....VER EN CHARDCARD

  return (
    // C8 -2 PASO 7
    //MOSTRAMOS TODA LA DATA 
    //<pre>{JSON.stringify(data)}</pre> hacemos esto para mostrarlo de forma rapia solo se observara el objeto 
    //fin de C8-2 
    <div>
        <h1>CharDetai {charId}</h1>
        <pre>{JSON.stringify(data)}</pre>
        
        </div>
    
  )
}

export default CharDetail