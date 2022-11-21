//rafce , para que me  de la estructura automaticamente 
/*
const Saludo = (props) => {
  return (
    <>
    <div>saludo {props.name}</div>
    <div>Tienes {props.age} años</div>
    </>
  )
}

// form desestructurada
const Saludo = (props) => {
    const {name,age}=props
  return (
    <>
    <div>saludo {name}</div>
    <div>Tienes {age} años</div>
    </>
  )
}

*/
// Se puede poner tambine como parametros a los props

const Saludo = ({name, age, lastName,action}) => {
    const title={
        border: 'solid red 2px',
        margin:'20px',
    padding :'20px'    }
    
  return (
    <>
    <div style={title}>
    <div >saludo {name} {lastName}</div>
    <div>Tienes {age} años</div>
    <button onClick={action}>Click</button>
    </div>
    </>
  )
}




export default Saludo