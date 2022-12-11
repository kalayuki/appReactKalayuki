import React from 'react'

//PASO 5
//{title, description, price, stock}, pasamos como parametros todos los elementos de nuestro array 
//{title} Pasamos a nuestra cards todos los elemtos de nuestro array , dandole estilos a nuetsra estructura de cards


export const GlassCard = ({title, description, price, stock}) => {
  return (
    <div className='m-10'>
    <div>{title}</div>
    <div>{description}</div>
    <div>{price}</div>
    <div>{stock}</div>
   </div>
  )
}

//PASO 5 
//GLASSDETAILS, creamos en nuestra carpeta affter1 el archivos GlassDetails, donde simularemos como crear detalles de nuestras cards, que lo veremos mejor en la clase 8, esto se pide en el TP de la clase 
// PASO 6 
//... VER EN EL ARCHIVOS GLASSDETAILS