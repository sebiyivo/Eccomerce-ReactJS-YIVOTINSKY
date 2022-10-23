import { useState, useEffect, createContext } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const MySwal = withReactContent(Swal)

    useEffect(() => {
      const totalQty = getQuantity()
      const totalPriceFinal = getTotalPrice()
      setTotalQuantity(totalQty)
      setTotalPrice(totalPriceFinal) // eslint-disable-next-line
    }, [cart]) 
    
    const addItem = (productToAdd) => {

        if (!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
            MySwal.fire({
                background: '#ffffff',
                color: '#001fff',
                position: 'center',
                icon: 'success',
                iconColor: '#11cf00',
                title: 'Agregado!',
                html: <h4>Se agregaron "{productToAdd.quantity}" {productToAdd.name} al carrito</h4>,
                showConfirmButton: false,
                timer: 2500
              })
        } else {
            MySwal.fire({
                background: '#ffffff',
                color: '#001fff',
                position: 'center',
                icon: 'error',
                iconColor: '#ff0000',
                title: 'Repetido!',
                html: <h4>El producto {productToAdd.name} ya se encuetra en el carrito</h4>,
                showConfirmButton: false,
                timer: 2500
              })
        }
    }

    const removeItem = (id, name) => {

        MySwal.fire({
            background: '#ffffff',
            color: '#001fff',
            title: '¿Esta seguro que desea eliminar el producto?',
            icon: 'warning',
            iconColor: '#ffa200',
            showCancelButton: true,
            confirmButtonColor: '#00b400',
            cancelButtonColor: '#ff0000af',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, eliminarlo'
          }).then((result) => {

            if (result.isConfirmed) {
              const cartWithoutProduct = cart.filter(prod => prod.id !== id)
              setCart(cartWithoutProduct)
              
              MySwal.fire({
                background: '#ffffff',
                color: '#001fff',
                icon: 'success',
                iconColor: '#11cf00',
                title: 'Eliminado!',
                html: <h4>El producto {name} ha sido eliminado del carrito</h4>,
                confirmButtonColor: '#11cf00',
                },
                'success'
              )
            }
            }
        )    
    }

    const clearCart = () => {
        
        MySwal.fire({
            background: '#ffffff',
            color: '#001fff',
            title: '¿Esta seguro que desea vaciar el carrito?',
            icon: 'warning',
            iconColor: '#ffa200',
            showCancelButton: true,
            confirmButtonColor: '#00b400',
            cancelButtonColor: '#ff0000af',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Confirmar'
          }).then((result) => {
    
            if (result.isConfirmed) {
              MySwal.fire({
                background: '#ffffff',
                color: '#001fff',
                icon: 'success',
                iconColor: '#11cf00',
                title: 'Vaciado!',
                html: <h4>El carrito ha sido limpiado</h4>,
                confirmButtonColor: '#11cf00',
                },
                'success'
              )  
    
              setCart([])
            }
          }) 
    }


    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const getQuantity = () => {
        let acum = 0

        cart.forEach(prod => {acum += prod.quantity} )
        return acum
    }

    const getTotalPrice = () => {
        let total = 0

        cart.forEach(prod => {total += (prod.quantity * prod.price)})
        return total
    }
    
    return (
        <CartContext.Provider value={{cart , addItem, removeItem, clearCart, totalQuantity, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}