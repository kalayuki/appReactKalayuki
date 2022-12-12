import React from 'react'
import {Link} from 'react-router-dom'

//creamos nuestro nuevo componente 
//LE DAMOS ESTRUCTURA A NUESTRAS CARDS

//creamos llamamos a todos nuestros componentes por medio de parametros , como name, species statu etc

// ** lo que nos permitira en la estructura llamar a cada una por separado 


export const ChardCards = ({id, name, specie, status, image }) => {
  return (
    // C8-2 - PASO 3
    //LINK, ponemos toda la card dentro de un link 
    //to={`/rick/:charId/${id}`}, idicameos con backticks que traiga en el to el id 
    
    <Link to={`/rickandmorty/${id}`} >
     <div className="card w-96 bg-base-100 shadow-xl m-8"><font></font>
  <div className="card-body"><font></font>
    <h2 className="card-title">{name}</h2><font></font>
    <p>{specie} - {status} </p><font></font>
  </div><font></font>
  <figure><img src={image}  alt="Shoes" /></figure><font></font>
      </div>
      </Link>
  )
}
