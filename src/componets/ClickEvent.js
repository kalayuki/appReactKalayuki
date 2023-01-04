import React from 'react'


      

const ClickEvent = () => {

    const onClickHandler=(e)=>{
        console.log('click --->')
        // Para ver el eventi sitetico
        //LO podemos ver en consola , e puede ser cualquier nombre
        //podremos ver informacion , como el evento real e infomacion cocreta lo podemos encontrar asi 
        //Si queremos ver el eventi tal cual , n el sintetico , es e.nativeEvent
        console.log(e.nativeEvent)
     
    }
       
        /* C9-E2 P3
            -Declaramos la funcion onChangeInput
            -event, puede ser cualquier nombre,este traera el cambio que se produce en el input
            -a Event , cuando lo llamamos para ver en la consola , debido a que estamos usando 
                el evento onKeyDown, podemos usar key (event.key),que nos traera la letra del teclado que se esta tocando
                tambien podemos usar keyCode, que nos permite ver el codigo de la tecla
            */
            const onKeyDownInput = (event)=>{
                console.log('Tecla:', event.key)
                /* C9-E2 P4 
                 - CReamos un codicional para poder evitar que se inglesen vocales
                 -llamamos al event.key , que es lo que nos trarea la info que necesitamos
                 -preventDefault() es para evtar que tal letra  sea ingresada
                 -Para determinar todas la vocales creamos un arra vocales
                 -toLowerCase, es para que todo lo que entre desde el input cambie a minuscula 
                    lo utilizamos de la siguiente manera event.key.toLowerCase()
                 -includes, lo utilizamos para determinar que si vocales aincluyen en el evento se produzca
                    un preventDefault    */

                 const vocales=['a','e','i','o','u']

                 if (vocales.includes(event.key.toLowerCase() )) {
                    event.preventDefault()
                    
                 }

        
            }


  return (
    <div className='m-10'>
       

        {/*C9-E1 P2  Creamo un Boto 
        -CReamos un evento para poder verlo en Consola =onClick={onClickHandler}
        -onClickHandler es la funcion creada mas arriba
        */}
        <button onClick={onClickHandler} className='btn'>Da Click aqui</button>
        {/* C9-E2 P1 , creamos un input que no deja ingresrae vocales*/}
        <h1 className='text-xl my-5'>Input que no permite ingresar Vocales</h1>
        {/*C9-E2 P2
            -Utilizamos el evento onKeyDown , para poder capturar el input, escucha cambios en este caso en el input
            -le ponemos como funcion onChangeInput
        */}
        <input onKeyDown={onKeyDownInput} type='text' className=' p-2 text-xl drop-shadow-lg border-2 border-sky-500 '/>
    </div>
  )
}

export default ClickEvent