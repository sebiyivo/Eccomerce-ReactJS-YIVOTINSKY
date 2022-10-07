import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setproduct] = useState({})
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()

    useEffect(() => {
      setLoading(true)
      getProductById(productId).then(response => {
        setproduct(response)
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