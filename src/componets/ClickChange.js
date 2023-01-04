import React, { useEffect, useState } from 'react'

/* C9 E4 P1
-Demostramos cque se puede crear un componente dentro de otro componente
-nos permitara hacer que cambie cuando cambia el estado de true a false , pero desde un componente
- Le sacamos el export por que es de manera interma 
-llamamos a los stronge que creamos mas abajo*/

 const LoadingView = () => {
  return (
    <strong className='text-xl m-10'>Cargando...</strong>
  )
}



 const Ready = () => {
  return (
    <strong className='text-xl m-10'>Listo!!!!</strong>
  )
}



const ClickChange = () => {
    /*C9 E3 P4 
    - creamos un estado para poder cambiarlo de cragando a listo  pasando lso tres minutos del setTimeOut
    -el useState lo iniciamos en true
    */
     const [loading, setLoading] = useState(true)


    /* C9 E3 P2
    - Utilizamos un UseEffect para que tenga un retardo al cargar la pagina, por eso usamos []
    -Utilizamos SetTimeOut para para poder determinar el tiempo 
    */

    useEffect(() => {
      setTimeout(()=>{
        console.log('Cargado!')
        /*C9 E3 P5
        - A nuestro estado SetLoading, lo llammos en false
            -UseState inicia en true , pasado en los tres minutos cambia a false
        */
       setLoading(false)
      }, 3000)
       

      
    }, [])
    /*C9 E3 P6 
    - creamos un console de loading para poderverlo en consola */
    console.log(loading)
    
  return (
    <div>
        {/* C9 E3 P3 
            - Creamos un stroge , que diga cargando
            -CReamos otro stroge , que diga Listo , para que luego de los 3 minutos del setTimeout este diga Listo */}
        
         {/* C9 E3 P7
            -Para que cambie los stronge utilizamos perador ternario comenzamos con {}
            -llamamos a loading 
            -? preguntamos si este es false o true 
            -En el caso que sea true(Se hace referencia de como se inicialisa el estado) debera decir cargando
            -En el caso que sea False(se hace en referencia de como el estado cambia a false luego de
                    pasar los tres minutos registrados en el settimeout) 
                     debera decir Listo 
            -LLamamos a los estrong que creamos , segun lo que querramos que diga cuando este sea true o false   */}
        
        {loading?
        //Forma de hacerlo con el E3 P7 <strong className='text-xl m-10'>Cargando...</strong>
        /* C9 E4 P2
        -LLamamos a los componentes internos que creamo
        -Cuando el estado este true llamamos a LoadingView*/
        <LoadingView></LoadingView>
       
        :

        /*C9 E4 P3 
        -Cuando elestado este en false llaamosa Ready*/
        <Ready></Ready>
        //Forma de hacerlo con el E3 P7  <strong className='text-xl m-10'>Listo!!!!</strong>
        }

       
        
    </div>
  )
}

export default ClickChange