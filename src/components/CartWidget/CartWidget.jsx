import "./CartWidget.css"
import carrito from "./assests/carrito.png"
import { Link } from "react-router-dom"

const CartWidget = () => {

    return (
        <Link to={"/cart"} className = "carrito">
            <button>
                <img className = "imagenCarrito" src={carrito} alt="carrito"/>
                0
            </button>  
        </Link>
    )
}

export default CartWidget