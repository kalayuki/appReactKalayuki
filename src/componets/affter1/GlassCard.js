import React from 'react'
import {Link} from 'react-router-dom'


//PASO 5
//{title, description, price, stock}, pasamos como parametros todos los elementos de nuestro array 
//{title} Pasamos a nuestra cards todos los elemtos de nuestro array , dandole estilos a nuetsra estructura de cards

//C8 - PASO 6
// CAMBIAMOS LOS ESTILOS DE DIV QUE CONTIENE LA CARD
// LINK, creamos un lik qu le podremos estilo de boton (bnt), para que este se comporte como navegador, para ver el detalle
/*to={`/glass/${id}`}, decimos que nos lleve a glas , pero tambien le sumamos un ocmponente , que en este caso es el id
                       utilizamos backticks , tambien agregamos en el props el id , que en el after no estaba  */
export const GlassCard = ({id,title, description, price, stock}) => {
  return (
    <div className='m-5 bg-gray-400 p-5'>
    <div>{title}</div>
    <div>{description}</div>
    <div>{price}</div>
    <div>{stock}</div>
    <Link to={`/glass/${id}`} className='btn' >Ver detalle</Link>
   </div>
  )
}
//C8- PASO 7
// ... VER EN GLASSDETAILS


//PASO 5 
//GLASSDETAILS, creamos en nuestra carpeta affter1 el archivos GlassDetails, donde simularemos como crear detalles de nuestras cards, que lo veremos mejor en la clase 8, esto se pide en el TP de la clase 
// PASO 6 
//... VER EN EL ARCHIVOS GLASSDETAILS