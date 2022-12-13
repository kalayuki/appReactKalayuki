import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ( {
    title= 'producto de testeo',
    img= 'https://i.postimg.cc/jd40QGhj/quinoa-pop.jpg',
    precio=600,
    stock=10,
    id=1
}) => {
  return (
 <div className='card-container'>
    <h4>{title}</h4>
    <div>
        <img className='img' src={img} alt={`Imagen del producto ${title}`}/>

    </div>
    <p className='price'>{precio}</p>
    <Link to={`/item/${id}`}>
    <button>Ver mas detalles </button>
    </Link>
 </div>
  )
}

export default card