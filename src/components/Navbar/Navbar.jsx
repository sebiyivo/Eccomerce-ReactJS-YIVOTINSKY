import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <button className="navbar-brand">TiendaJS</button>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <button className="nav-link" aria-current="page">Celulares</button>
                <button className="nav-link">Televisores</button>
                <button className="nav-link">Notebooks</button>
              </div>
            </div>
            <CartWidget />
          </div>
        </nav>
    )
}

export default Navbar