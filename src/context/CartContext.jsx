import { useState, useEffect, createContext } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
      const totalQty = getQuantity()
      const totalPriceFinal = getTotalPrice()
      setTotalQuantity(totalQty)
      setTotalPrice(totalPriceFinal)
    }, [cart])
    
    const addItem = (productToAdd) => {

        if (!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            console.log("YA ESTA EN EL CARRITO");
        }
    }

    const removeItem = (id) => {
        const cartWithoutProduct = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutProduct)
    }

    const clearCart = () => setCart([])



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