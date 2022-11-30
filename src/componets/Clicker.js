import React, { useEffect, useState } from 'react'

//Este import se realiza automaticamente poniendo al lado de useState ctrl + espacio

const Clicker = () => {
    //let count=0

      // Para que funcione utiliza,os Ustate

      const [count, setCount] = useState(0)
    const clickHandler = (second) => { 

        // Intentamos sumar de esta manera , pero todo lo que ocurra , siempre se 
        // producira un render cada vez que toquemos el boton , por esta razon , no funcionaria
        // count=Count +1 


        // Cremos un console log para poder ver como capturamos el boton 
        console.log('se hizo click')
        // Quien se modificara es setcount, por esa razon debemos informale , que lo que ocurra en cout le sume 1, y este sera su nuevo valor

        setCount(count +1)
        
     }


     //LOS HOOKS NO PUEDEN ESTAR DENTRO DE UNA FUNCION , SOLO EN EL COMPONENTE (en el montaje y cada vez que se haga render)
    //  Csds vez que se haga render , vamos usar Useeffect 
    /*quiero ejecuar una funcion cada vez que se haga render, Para eso necesito la funcion 
    que quiero ejectar  e indificar el momento ; ESTE SUCEDE CADA VEZ QUE SE PRODUCE UN RENDER*/ 
          useEffect(()=>{
            console.log('se hizo un render')


          })
      //SOLO AL INICIO , EN EL MONTAJE MOUTING
  /*Solo quiero que suceda en el momento del montaje , esto se podria 
  utilizar cuando necesito que un servidor me brinde informacion, para evitar que lo haga 
  cada vez que se produzca un render , si no que lo haga en el momento del montaje 
  con toda la informacion, para que esto suceda le agrego un array vacio, sirve por ejemplo a un catalogo , 
  que lo haga de una vez, */
 

          

  useEffect(()=> {
    console.log('Esto solo en el momento del montaje')
  }, [])


//3ER EJEMPLO CUANDO LE PASAMOS DOS PARAMETROS 
/*Tendra el mismo efecto cada vez que se produzca un render , el 1ero y tambien cada vez 
que cambien Cout */
useEffect(()=> {
    console.log('En montaje y cuando cambia Cout')
  }, [count])

  
  return (
    
    <div className='p-20 flex flex-col mx-5'>

        {/* creamos un boton pque realice conteo */}
        <strong>Clicker</strong>
        {/* le agregamos un evento como onClicklo que suceda al tocar el boton , estara dictado 
        por la funcion creada clickHandler */}

        <button onClick={clickHandler} className='btn'>Aumentar</button>
        <strong>{count}</strong>
        
        
        </div>
  )
}

export default Clicker