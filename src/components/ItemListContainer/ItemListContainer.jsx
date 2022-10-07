import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const [products, setproducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
      setLoading(true)
      const productsFunction = categoryId ? getProductsByCategory : getProducts

      productsFunction(categoryId).then(response => {
        setproducts(response)
      }).finally(() => {
        setLoading(false)
      })
    }, [categoryId])
    
    if (loading) {
        return (
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        )
    }

    return (
        <div className="itemListContainer container">
            <h1>{categoryId ? "LISTA DE " + categoryId : "LISTA DE PRODUCTOS"}</h1> 
            <ItemList products ={products}/>
        </div>
    )
}

export default ItemListContainer