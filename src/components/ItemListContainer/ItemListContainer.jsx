import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { getProducts } from "../../services/firebase/firestore/products"
import { useAsync } from "../../hooks/useAsync"

const ItemListContainer = () => {
    const {categoryId} = useParams()

    const getProductsWithCategory = () => getProducts(categoryId)

    const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryId])

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
        title: 'No se puedo realizar la solicitud de los productos',
        showConfirmButton: false,
        timer: 4000
      }) 
  
    }

    return (
        <div className="itemListContainer container">
            <h1>{categoryId ? "LISTA DE " + categoryId : "LISTA DE PRODUCTOS"}</h1> 
            <ItemList products ={products}/>
        </div>
    )

}

export default ItemListContainer