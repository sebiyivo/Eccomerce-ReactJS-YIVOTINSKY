import { useCart } from "../../context/CartContext"

const Form = ({ setName, setTel, setEmail, createOrder }) => {
    const { totalPrice } = useCart()


    return (
        <form className="formulario">
                <div className="form-floating mb-4">
                  <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="floatingNombre" placeholder="Nombre Y Apellido"/>
                  <label for="floatingNombre">Nombre Y Apellido</label>
                </div>
                <div className="form-floating mb-4">
                  <input onChange={(e) => setTel(e.target.value)} type="number" className="form-control" id="floatingTel" placeholder="Telefono"/>
                  <label for="floatingTel">Telefono</label>
                </div>
                <div className="form-floating mb-4">
                  <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingEmail" placeholder="Correo Electronico"/>
                  <label for="floatingEmail">Correo Electronico</label>
                </div>
                <img src="https://www.edstiendas.org.ar/wp-content/uploads/2021/01/formas-pago-3.png" alt="Metodos de pago" title="Metodos de pago"/>
                <label className="totalCheckout">TOTAL: ${totalPrice * 1.21}</label>
                <button className="btn botonFinalizarCompra" type="button" onClick={createOrder}>FINALIZAR COMPRA</button>
            </form>
    )
}

export default Form