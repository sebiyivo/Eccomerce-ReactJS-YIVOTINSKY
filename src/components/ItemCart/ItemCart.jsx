import "./ItemCart.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const ItemCart = ({id, name, price, img , quantity}) => {

    const { removeItem } = useContext(CartContext)

    return (
        <tr className="productoEnCarrito">
            <th scope="row"><img src={img} alt={name} title={name}/></th>
            <td className="tituloCarrito">{name}</td>
            <td className="precioCarrito">$ {price}</td>
            <td className="cantidad">{quantity}</td>
            <td className="precioTotalCarrito">$ {price * quantity}</td>
            <td><input onClick={() => removeItem(id, name)} className="btn botonEliminar" type="button" value="Eliminar"/></td>
        </tr>
    )
}

export default ItemCart