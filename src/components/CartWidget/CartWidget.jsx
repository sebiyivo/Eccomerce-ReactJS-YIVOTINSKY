import "./CartWidget.css"
import carrito from "./assests/carrito.png"

const CartWidget = () => {

    return (
        <div className = "carrito">
            <button>
                <img className = "imagenCarrito" src={carrito} alt="carrito"/>
                0
            </button>  
        </div>
    )
}

export default CartWidget