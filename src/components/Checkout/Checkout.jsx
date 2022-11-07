import "./Checkout.css"
import { useState } from "react"
import { useCart } from "../../context/CartContext"
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../../services/firebase/index'
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Form from "../Form/Form"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("")
    const [tel, setTel] = useState(0)
    const [email, setEmail] = useState("")
    const [confEmail, setConfEmail] = useState("")

    const { cart, totalPrice, clearCart } = useCart()

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
                if (!name || !tel || !email || !confEmail) {

                    MySwal.fire({
                        background: '#ffffff',
                        color: '#001fff',
                        position: 'center',
                        icon: 'warning',
                        iconColor: '#ff0000',
                        title: 'Incompleto!',
                        html: <h4>Complete todos los campos del formulario antes de continuar</h4>,
                        showConfirmButton: false,
                        timer: 3000
                        })   

                } else if (email !== confEmail && email && confEmail) {

                    MySwal.fire({
                        background: '#ffffff',
                        color: '#001fff',
                        position: 'center',
                        icon: 'warning',
                        iconColor: '#ff0000',
                        title: 'Email incorrecto!',
                        html: <h4>Los correos electronicos no coinciden, por favor vuelva a completarlos</h4>,
                        showConfirmButton: false,
                        timer: 3000
                        })   

                } else {

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
                }
                
            } else {
                MySwal.fire({
                    background: '#ffffff',
                    color: '#001fff',
                    position: 'center',
                    icon: 'error',
                    iconColor: '#ff0000',
                    title: 'Error al generar la compra!',
                    html: <h4>Los siguientes productos no cuentan con el stock solicitado: {outOfStock.map(prod => prod.name)}</h4>,
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
            <Form setName={setName} setTel={setTel} setEmail={setEmail} setConfEmail={setConfEmail} createOrder={createOrder}/>
        </div>
    )
    
}



export default Checkout
