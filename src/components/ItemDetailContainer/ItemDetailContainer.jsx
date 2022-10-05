import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
    const [product, setproduct] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      getProductById("1").then(response => {
        setproduct(response)
      }).finally(() => {
        setLoading(false)
      })
    }, [])
    
    if (loading) {
        return (
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        )
    }

    return (
        <div className="itemDetailContainer">
            <ItemDetail key={product.id} {...product}/>
        </div>
    )
}

export default ItemDetailContainer