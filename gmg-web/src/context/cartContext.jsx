import { createContext, useState, useContext } from 'react'

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)
const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])
    const [cartTotal, setCartTotal] = useState(0)
    function addToCart(lista) {
        setCartList(cartList.concat(lista))
    }
    function addCant (cant, id) {
        let newCart = cartList.map(item => {
            if (item.id === id) {
                item.cantidad = item.cantidad + cant
            }
            return item
        })
        setCartList(newCart)
    }
    function isInCart(item, cant) {
        if (cartList.find(itemInCart => itemInCart.id === item.id)) {
            addCant(cant, item.id)
            console.log(cartList, 'cartlist')
        } else {
            addToCart(item)
            console.log(cartList, 'cartlist')
        }
    }
    function calcTotal(price, cant) {
        return setCartTotal(cartTotal + (price * cant))
    }
    function removeFromCart(item) {
        setCartList(cartList.filter(list => list.id !== item.id))
        setCartTotal(cartTotal - (item.price * item.cantidad))
    }
    function clearCart() {
        setCartList([])
        setCartTotal(0)
    }
    return (
        <CartContext.Provider value={{
            cartList, cartTotal,
            setCartList, setCartTotal, removeFromCart, calcTotal, isInCart, clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider


