import { createContext, useState, useContext } from 'react'

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)
const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])
    const [cartTotal, setCartTotal] = useState(0)
    function addToCart(lista) {
        setCartList(lista)
    }
    function isInCart (item) {
        return cartList.some(itemCart => itemCart.id === item.id)
    }
    function calcTotal() {
        let total = 0
        total = cartList.reduce((item) => item.cantidad * item.price, 0)
        setCartTotal(total)
        console.log(cartList)
        console.log(cartTotal)
    }
    function removeFromCart() {
        setCartList([])
    }
    return (
        <CartContext.Provider value={{
            cartList, cartTotal,
            setCartList, setCartTotal, addToCart, removeFromCart, calcTotal, isInCart }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider


