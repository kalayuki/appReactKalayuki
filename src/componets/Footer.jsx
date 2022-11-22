//El impot react from , no es necesario dejarlo , se lo puede sacar

//Sumamos los chilrens de lins creados app jsx, englobamos elementos dentro de un componente 

const Footer = ({children}) => {
  return (
    <div> 
    <div>footer</div>
    {children}
    </div>
  )
}

export default Footer