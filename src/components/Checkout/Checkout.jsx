import "./Checkout.css"
import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../../services/firebase/index'
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("")
    const [tel, setTel] = useState(0)
    const [email, setEmail] = useState("")

    const { cart, totalPrice, clearCart } = useContext(CartContext)

    const MySwal = withReactContent(Swal)

    const navigate = useNavigate()

    const createOrder = async () => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name: name,
                    phone: tel,
                    mail: email
                },
                items: cart.map(prod => ({ id: prod.id, title: prod.name, price: prod.price, quantity: prod.quantity })),
                subtotal: totalPrice,
                iva: totalPrice * 0.21,
                total: totalPrice * 1.21
            }
            
            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)
    
            const productsRef = collection(db, 'products')
    
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 1500)

                MySwal.fire({
                    background: '#ffffff',
                    color: '#001fff',
                    position: 'center',
                    icon: 'success',
                    iconColor: '#11cf00',
                    title: 'Compra realizada con exito!',
                    html: <h4>El id de su orden es: ${orderAdded.id}</h4>,
                    showConfirmButton: true,
                    confirmButtonColor: '#00b400',
                    confirmButtonText: 'OK'
                  })
            } else {
                MySwal.fire({
                    background: '#ffffff',
                    color: '#001fff',
                    position: 'center',
                    icon: 'error',
                    iconColor: '#ff0000',
                    title: 'Error al generar la compra!',
                    html: <h4>Hay productos fuera de stock</h4>,
                    showConfirmButton: false,
                    timer: 4000
                  })
            }

        } catch (error) {
            MySwal.fire({
                background: '#ffffff',
                color: '#001fff',
                position: 'center',
                icon: 'error',
                iconColor: '#ff0000',
                title: 'No se puedo realizar la solicitud',
                showConfirmButton: false,
                timer: 4000
              })
        } finally {
            setLoading(false)
        }
        
    }

    if(loading) {
        return <div className="text-center spinner-order">
                <button className="btn btn-primary" type="button" disabled="">
                  <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                  Se esta generando su orden...
                </button>
               </div>
    }

    return (
        <div className="divCheckout">
            <h2 className="checkout">CHECKOUT</h2>
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
        </div>
    )
}

export default Checkout