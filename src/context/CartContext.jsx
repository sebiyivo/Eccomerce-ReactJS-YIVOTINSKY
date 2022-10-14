import { useState, useEffect, createContext } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)

    useEffect(() => {
      const totalQty = getQuantity()
      setTotalQuantity(totalQty)
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
    
    return (
        <CartContext.Provider value={{cart , addItem, removeItem, clearCart, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}