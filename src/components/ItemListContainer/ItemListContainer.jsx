import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom"
import { db } from "../../services/firebase"
import { getDocs, collection, query, where } from "firebase/firestore"

const ItemListContainer = () => {
    const [products, setproducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
      setLoading(true)
  
      const collectionRef = categoryId 
        ? query(collection(db, "products"), where("category", "==", categoryId))
        : collection(db, "products")

      getDocs(collectionRef).then(response => {
        const productsAdapted = response.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setproducts(productsAdapted)
      }).catch(error => {
        console.log(error)  
      }).finally(() => {
        setLoading(false)
      })} , [categoryId])
      

    if (loading) {
        return (
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden"></span>
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