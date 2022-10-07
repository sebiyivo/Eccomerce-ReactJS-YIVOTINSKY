import "./Cart.css"
import { Link } from "react-router-dom"

const Cart = () => {
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
                    <tr className="productoEnCarrito">
                      <th scope="row"><img src="https://www.macstation.com.ar/img/productos/2567-1.jpg" alt="Iphone 13" title="Iphone 13"/></th>
                      <td className="tituloCarrito">IPHONE 13</td>
                      <td className="precioCarrito">$ 120000</td>
                      <td className="cantidad">1</td>
                      <td className="precioTotalCarrito">$ 120000</td>
                      <td><input className="btn botonEliminar" type="button" value="Eliminar"/></td>
                    </tr>
                  </tbody>
                </table>
                </div>
        
                <div className="calculo">
                  <ul>
                    <li id="subtotal">$ 0</li>
                    <li>Subtotal</li>
                  </ul>
                  <ul>
                    <li id="iva">$ 0</li>
                    <li>IVA %21</li>
                  </ul>
                  <ul>
                    <li id="total">$ 0</li>
                    <li>TOTAL</li>
                  </ul>
                </div>

                <div className="botonesCarrito">
                  <Link to={"/"} className="btn botonVolverALaTienda">Volver a la tienda</Link>
                  <div className="botonesCarritoPrincipales">
                    <input id="vaciarCarrito" className="btn botonVaciarCarrito" type="button" value="VACIAR CARRITO"/>
                    <input id="comprar" className="btn botonComprar" type="button" value="COMPRAR" data-bs-toggle="modal" data-bs-target="#exampleModal"/>  
                  </div>
                </div>
            </div>
        </div>  
    )

}

export default Cart