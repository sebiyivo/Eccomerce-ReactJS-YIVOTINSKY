import { useState, useEffect } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"

const ItemListContainer = ({greeting}) => {
    const [products, setproducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      getProducts().then(response => {
        setproducts(response)
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
        <div className="itemListContainer">
            <h1>{greeting}</h1> 
            <ItemList products ={products}/>
        </div>
    )
}

export default ItemListContainer