import "./Cart.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import ItemCart from "../ItemCart/ItemCart"

const Cart = () => {

    const { cart, totalPrice, clearCart } = useContext(CartContext)

    if (cart.length === 0) {
      return (
        <div className="sinProductos">
          <h2 className="noProductos">NO HAY PRODUCTOS EN EL CARRITO</h2>
          <Link to={"/"} className="btn botonIrALaTienda">IR A LA TIENDA</Link>
        </div>
      )
    }

    return (
        <div className="container">
          <h2 className="miCarrito" name="carrito">MI CARRITO</h2>

          <div className="row">
                <div className="table-responsive">
                <table className="table caption-top">
                  <thead className="table-primary">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">PRODUCTO</th>
                      <th scope="col">PRECIO</th>
                      <th scope="col">CANTIDAD</th>
                      <th scope="col">TOTAL</th>
                      <th scope="col">-</th>
                    </tr>
                  </thead>
                  <tbody id="carrito">
                    {cart.map(product => <ItemCart key={product.id} {...product}/>)}
                  </tbody>
                </table>
                </div>
        
                <div className="calculo">
                  <ul>
                    <li id="subtotal">$ {totalPrice}</li>
                    <li>Subtotal</li>
                  </ul>
                  <ul>
                    <li id="iva">$ {totalPrice * 0.21}</li>
                    <li>IVA %21</li>
                  </ul>
                  <ul>
                    <li id="total">$ {totalPrice * 1.21}</li>
                    <li>TOTAL</li>
                  </ul>
                </div>

                <div className="botonesCarrito">
                  <Link to={"/"} className="btn botonVolverALaTienda">Volver a la tienda</Link>
                  <div className="botonesCarritoPrincipales">
                    <input onClick={() => clearCart()} id="vaciarCarrito" className="btn botonVaciarCarrito" type="button" value="VACIAR CARRITO"/>
                    <input id="comprar" className="btn botonComprar" type="button" value="COMPRAR" data-bs-toggle="modal" data-bs-target="#exampleModal"/>  
                  </div>
                </div>
            </div>
        </div>  
    )

}

export default Cart