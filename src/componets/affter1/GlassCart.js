import { useContext } from "react"
import { CartContext, useCart } from "../Context/cartContext"


const GlassCart = () => {

    const {items, clearCart} = useCart()


  return (
    <div>
    <div className="m-10 text-xl">GlassCart</div>
     <div>{items.map (i=> <li key = {i}>{i}</li>)}</div> 
    <button className="btn" onClick={clearCart}>Vaciar carrito</button>
    </div>
  )
}

export default GlassCart