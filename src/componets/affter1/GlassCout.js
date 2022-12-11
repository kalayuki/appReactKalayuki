import React, { useState } from 'react'
//PASO 15 
//GLASS COUT , nose serviraomo contador de lo compremos y tendra relacion con el stock
//stock, esntra como props 
export const GlassCout = ({stock}) => {

    //PASO 16 
    //useState(1), establecesmo el estado , en este caso en 1, puede ser 0
    //COUnT , nombre del estado 

    const [count, setCount] = useState(1)

    //PASO 18
    //ESTABLECEMOS LA FUNCIONES onAddHandler Y onSubHandler , PARA INDICAR QUE HARAN ESS BOTONES
    //en ambos casos lo que haran es setear el estao Count , atra vez de SertCount 
    // si por alguna razon algo esta modificando en forma asincrona utilizamos una aletnativa para que esi no ocurra hacemos lo siguiente 
    // setCount((value)=>{return}), lo que hara value es tomar el valor de setCout en el momento , y return lo devolevra a ese valor, de esta forma se modificar cout, sin tener problemas con asincronismos 
    //setCount(count =>count + 1), como no hay problemas de asincronismo lo hacemos asi 
    // setCount(count =>count - 1), para onSubHandler, ya que resta 
    //if(count >=1){, a onSubHandler, establecemos un condicional , en dice que solo puedo restar cuando sea mayoy o igual que 1, de esta forma solo llega hasta 0 , no puede restar cuando es menor a 1
    // if (count < stock) , a onAddHandler, se establece condicional , que el boton no pueda sumar mas de lo que establece el stock,es decir que cout no puede ser mayor al stock recordemos que el stock priviene como props
    const onAddHandler = ()=>{
        if (count < stock){
            setCount(count =>count + 1)
        }
        
    }

    const onSubHandler =()=>{
        if(count >=1){
            setCount(count =>count - 1)
        }
        
    }
    
  return (
    //PASO 17
    //LE DAMOS ESTILOS A NUESTRO COTANDOR 
    //{count} LLAMAMOS al estado 
    // onClick={}, le damos el evento , a cada uno de lo botones , tanto como el de restar como el suma
    //onSubHandler, dentro del onclick ingresamos onSubHandler, para que reste el boton de restar (-)
    //onAddHandler, dentrso del onclic ingresamos onAddHandler, para el boton de sumas (+)

    <div  >
        <button  onClick={onSubHandler} className='btn'>-</button>
        <span className='text-xl m-2' >{count}</span>
        <button onClick={onAddHandler} className='btn'>+</button>
    </div>
  )
}
