import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <NavLink to={"/"} className="navbar-brand">TiendaJS</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink to={"/category/Celulares"} className="nav-link" aria-current="page">Celulares</NavLink>
                <NavLink to={"/category/Televisores"} className="nav-link">Televisores</NavLink>
                <NavLink to={"/category/Notebooks"} className="nav-link">Notebooks</NavLink>
              </div>
            </div>
            <CartWidget />
          </div>
        </nav>
    )
}

export default Navbar