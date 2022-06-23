import { useEffect } from 'react'
import { createContext, useState, useContext } from 'react'

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)
const CartContextProvider = ({ children }) => {
    const localCart = JSON.parse(localStorage.getItem('cart'))
    const [cartList, setCartList] = useState(localCart ? localCart : [])
    const [cartTotal, setCartTotal] = useState(0)
    const [emptyCart, setEmptyCart] = useState(!localCart ? true : false)
    function addToStorage(item) {
        localStorage.setItem('cart', JSON.stringify(item))
    }
    function removeFromStorage() {
        localStorage.removeItem('cart')
    }
    function addToCart(lista) {
        setCartList(cartList.concat(lista))
    }
    useEffect(() => {
        if (cartList.length > 0) {
            addToStorage(cartList)
        }
    }, [cartList])

    function showCart() {
        if (cartList.length === 0) {
            setEmptyCart(true)
        } else if (cartList.length > 0) {
            setEmptyCart(false)
        }
    }
    function addCant(cant, id) {
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
        } else {
            addToCart(item)
        }
    }
    function calcTotal(price, cant) {
        setCartTotal(cartTotal + (price * cant))
        return cartTotal
    }
    function removeFromCart(item) {
        setCartList(cartList.filter(list => list.id !== item.id))
        setCartTotal(cartTotal - (item.price * item.cantidad))
    }
    function clearCart() {
        setCartList([])
        setCartTotal(0)
        removeFromStorage()
    }
    return (
        <CartContext.Provider value={{
            cartList, cartTotal, emptyCart,
            setCartList, setCartTotal, setEmptyCart, removeFromCart, calcTotal, isInCart, clearCart, showCart
        }}>
            {children}
        </CartContext.Provider>
    )

}
export default CartContextProvider


