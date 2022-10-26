import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom"
import { db } from "../../services/firebase"
import { getDoc, doc } from "firebase/firestore"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const ItemDetailContainer = () => {
    const [product, setproduct] = useState({})
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()

    useEffect(() => {
      setLoading(true)

      const MySwal = withReactContent(Swal)

      const docRef = doc(db, "products", productId)

      getDoc(docRef).then(response => {
        const data = response.data()
        const productAdapted = { id: response.id, ...data }
        setproduct(productAdapted)
      }).catch(() => {
        MySwal.fire({
          background: '#ffffff',
          color: '#001fff',
          position: 'center',
          icon: 'error',
          iconColor: '#ff0000',
          title: 'No se puedo realizar la solicitud del detalle del producto',
          showConfirmButton: false,
          timer: 4000
        }) 
      }).finally(() => {
        setLoading(false)
      })
    }, [productId])
    

    if (loading) {
        return (
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden"></span>
        </div>
        )
    }

    return (
        <div className="itemDetailContainer">
          <h1>DETALLE DEL PRODUCTO</h1>
          <ItemDetail key={product.id} {...product}/>
        </div>
    )
}

export default ItemDetailContainer