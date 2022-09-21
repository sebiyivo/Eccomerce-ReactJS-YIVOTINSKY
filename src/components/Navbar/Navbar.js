import "./Navbar.css"

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">TiendaJS</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">Celulares</a>
                <a className="nav-link" href="#">Televisores</a>
                <a className="nav-link" href="#">Carrito</a>
              </div>
            </div>
          </div>
        </nav>
    )
}

export default Navbar