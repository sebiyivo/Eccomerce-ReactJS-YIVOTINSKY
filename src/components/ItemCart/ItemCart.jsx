import "./ItemCart.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const ItemCart = ({id, name, price, img , quantity}) => {

    const { removeItem } = useContext(CartContext)

    const MySwal = withReactContent(Swal)

    const eliminarProducto = () => {

        MySwal.fire({
            background: '#ffffff',
            color: '#001fff',
            title: '¿Esta seguro que desea eliminar el producto?',
            icon: 'warning',
            iconColor: '#ffa200',
            showCancelButton: true,
            confirmButtonColor: '#00b400',
            cancelButtonColor: '#ff0000af',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, eliminarlo'
          }).then((result) => {

            if (result.isConfirmed) {
              removeItem(id)
              
              MySwal.fire({
                background: '#ffffff',
                color: '#001fff',
                icon: 'success',
                iconColor: '#11cf00',
                title: 'Eliminado!',
                html: <h4>El producto {name} ha sido eliminado del carrito</h4>,
                confirmButtonColor: '#11cf00',
                },
                'success'
              )

            }
            }
        )}

    return (
        <tr className="productoEnCarrito">
            <th scope="row"><img src={img} alt={name} title={name}/></th>
            <td className="tituloCarrito">{name}</td>
            <td className="precioCarrito">$ {price}</td>
            <td className="cantidad">{quantity}</td>
            <td className="precioTotalCarrito">$ {price * quantity}</td>
            <td><input onClick={() => eliminarProducto()} className="btn botonEliminar" type="button" value="Eliminar"/></td>
        </tr>
    )
}

export default ItemCart