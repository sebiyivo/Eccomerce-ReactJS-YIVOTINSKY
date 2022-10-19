import "./CartWidget.css"
import carrito from "./assests/carrito.png"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to={"/cart"} className = "carrito">
            <button>
                <img className = "imagenCarrito" src={carrito} alt="carrito"/>
                {totalQuantity === 0 ? " " : totalQuantity}
            </button>  
        </Link>
    )
}

export default CartWidget