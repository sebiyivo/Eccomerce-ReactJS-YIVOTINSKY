import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import { NavLink } from "react-router-dom"
import { getDocs, collection, query, orderBy } from "firebase/firestore"
import { db } from "../../services/firebase"
import { useState, useEffect } from "react"

const Navbar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
      const collectionRef = query(collection(db, "categories"), orderBy("order"))
      
      getDocs(collectionRef).then(response => {
        const categoriesAdapted = response.docs.map(doc => {
          const data = doc.data()
          const id = doc.id

          return { id, ...data }
        })
        setCategories(categoriesAdapted)
      })
    }, [])
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <NavLink to={"/"} className="navbar-brand">TiendaJS</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                {categories.map(category => (
                  <NavLink key={category.id} to={`/category/${category.slug}`} className="nav-link" aria-current="page">{category.label}</NavLink>
                  ))
                }
              </div>
            </div>
            <CartWidget />
          </div>
        </nav>
    )
}

export default Navbar