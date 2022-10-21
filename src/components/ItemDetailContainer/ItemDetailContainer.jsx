import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom"
import { db } from "../../services/firebase"
import { getDoc, doc } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [product, setproduct] = useState({})
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()

    useEffect(() => {
      setLoading(true)

      const docRef = doc(db, "products", productId)

      getDoc(docRef).then(response => {
        const data = response.data()
        const productAdapted = { id: response.id, ...data }
        setproduct(productAdapted)
      }).catch(error => {
        console.log(error)  
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