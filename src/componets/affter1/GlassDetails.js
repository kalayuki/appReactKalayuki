import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCTS } from '../Data/Glasses'
import { GlassCout } from './GlassCout'


//PASO 6 
//AUN NO HAY FORMA DE LIGARLO LO VEREMOS EN LA CLASE 
// SOLO LO LLAMAREMOS EN NUETSRA APP.JSX
//ESTE ARCHIVO MOSTRA LOS DETALLES DE UN ELEMENTO EN ESPECIFICO 
// PASO 7 
//.. VER ARCHIVO APP.JSX

//PASO 11
//ITEM, establecemos una constante como ejemplo de el detalle de algunos de nuestros productos 
//{id:1 , title:"RayBan", descriptio: "Son un gran marco de lentes ", price:1500, stock:100}, utilizamos como ejemplos este lo copiamos de nuestros array 

//const ITEM = {id:1 , title:"RayBan", descriptio: "Son un gran marco de lentes ", price:1500, stock:4}

const GlassDetails = () => {

    //PASO 8
    //COMENZAMOS A DARLE ESTRUCTURA A NUETSR GLASSDETAILS 
    //USESTATE,  utilizaremos la logica similar de los puntos anteriores , establecemos el estado de estos detalles 
    //{}, colocamos un objeto vacio por el momento en nuetsro useState, se vera en clase 8 como debe ser 
    const [item, setItem] = useState({})

    //C8-PASO 7
    //TENEMOS QUE TOMAR EL ID , PARA QUE PODAMOS NAVEGAR CON EL LINK AL COMENTENTE CORRESPOENDIENTE DEL DETALLE SEGUN CADA CARD
    //useParams(), con esto podramos recuperar un segmento que es el id

    //C8- PASO 8
    //VAMOS A CREAR UN NUEVA CARPETA LLAMADA DATA 
    //GLASSES, es el nombre del nuevo archivo que vamos a utilizar 
    //C8- PASO 9
    //VER EN GLASSES
    const {id}= useParams()

    //PASO 9
    //USEEFECTS ,  se utilizara para establecer como se realizara en el momento del montaje 
    //getItemDetal(), llamamos a la funcion, quien nos va a traer los detalles que informaremos de nuetsros productos 


    useEffect(() => {
        //PASO 12
        //THEN, CATCH , esperamos a las resluciones 
        //setItem, resivira como respuesta res , que vendra de la prmesa resolve , quien recibe ITEM
      getItemDetal().then(res =>{
        setItem(res)
      }).catch(err =>{
         console.log('error')
      })
      //C8 - PASO 11
      //para que no haya errores le cambiamos a useEffect el array vacio por un array con el id , que viene del useParams()
      //C8- FIN DEL EJECICIO CONTINUAMOS CON OTRO EJEMPLO PER EN LA CARPETA RICKANDMORTY, COMIENZA
    }, [id])
    
    //PASO 10
    //getItemDetal, establecemos la funcion 
    //return new Promise, el ejer, solicita que esto se resuelva 2 segundos despues 
    //setTimeout , establecemos la demora anteriormente informada, siempre y cuando se resuleva (resolve)
    //RESOLVE(ITEM) , nos devolvera la constante ITEMS , creada en el paso 11 (arriba)
    const getItemDetal= ()=>{
        return new Promise((resolve, reject )=>{
          //C8- PASO 10
          //TENEMOS QUE TRAER EL ID PARA PODER UNIRLOS CON const {id}= useParams(), CREADO EN C8- PASO 7
          /*const item =PRODUCTS.find(P=>P.id == id), llamamos a nuestra base de datos PRODUCTS , QUE SE ENCUENTRA EN DATA
              - ahora item , contendra a products  utilizamos metodo find, extrae el id , y hace lacomparacion con el 
               id traido de {id}= useParams()*/
          //RESOLVE (item), ahora en vez del ITEM de mas arriba le ponemos item, el que realizamos en este mismo paso 
          const item =PRODUCTS.find(P=>P.id == id)
            setTimeout(()=>{
                resolve(item)
            },500)
        })

    }

  return (
    //PASO 13 
    //DETALLES DEL RODUCTOS , LE DAMOS ESTRUCTIRA Y ESTILO LO QUE SE VERA 
    //NO ES NECESARIO HACER UN MAP , YA QUE TENEMOS SOLO UN OBEJTO (ITEM)
    //{items.TITLE},llamamos a los elementos de el objeto ITEM, pero traido del estado item ( minuscula)
    <div>
        <h1>Detalles del producto</h1>
        <li>{item.title}</li>
        <li>{item.descriptio}</li>
        <li>{item.price}</li>

         {/* //+++PASO 14 (este es or fuera de lo que ya veniamos viendo pero lo usamos como ejemplo)
        // VEMOS OTRO EJEMPLO DE EJECICIO CONTANDOR , CREAMS  NUEVO cpmponene  GLASSCOUT
        //Lo agremoas a nuestra decsrpicion de productos 
        //{...item} llamamos a todos los elementosdel obejto */}
        
        <GlassCout {...item}></GlassCout>

        {/* PASO 15
         // ... VER COMPONENTE GLASSCOUT */}



    </div>
     
  )
}

export default GlassDetails