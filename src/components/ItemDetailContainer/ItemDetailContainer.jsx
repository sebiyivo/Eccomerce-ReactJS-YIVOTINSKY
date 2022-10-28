import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { getProduct } from "../../services/firebase/firestore/products"
import { useAsync } from "../../hooks/useAsync"

const ItemDetailContainer = () => {
    const {productId} = useParams()

    const getProductsById = () => getProduct(productId)

    const { data: product, error, loading } = useAsync(getProductsById, [productId])

    const MySwal = withReactContent(Swal)

    if (loading) {
        return (
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden"></span>
        </div>
        )
    }

    if (error) {
      return  MySwal.fire({
        background: '#ffffff',
          color: '#001fff',
          position: 'center',
          icon: 'error',
          iconColor: '#ff0000',
          title: 'No se puedo realizar la solicitud del detalle del producto',
          showConfirmButton: false,
          timer: 4000
      }) 
  
    }

    return (
        <div className="itemDetailContainer">
          <h1>DETALLE DEL PRODUCTO</h1>
          <ItemDetail key={product.id} {...product}/>
        </div>
    )
}

export default ItemDetailContainer