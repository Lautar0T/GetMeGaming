import { useState, useEffect } from "react"
import { useCartContext } from "../context/cartContext"
const Cart = () => {
    const { cartList, cartTotal, clearCart, removeFromCart } = useCartContext()
    const [emptyCart, setEmptyCart] = useState(false)
    // watch for changes in cartList
    useEffect(() => {
        if (cartList.length === 0) {
            setEmptyCart(true)
        } else {
            setEmptyCart(false)
        }
    }, [cartList])
    return (
        <div className="text-slate-100 grid p-6 gap-2 bg-gray-700 border-gray-800 border-2 rounded-lg">
            <table className="table-auto rounded-lg bg-slate-500 ">
                <thead>
                    <tr className=" border-b-2 font-bold text-xl ">
                        <th>Articulo</th>
                        <th>Cantidad</th>
                        <th >Precio</th>
                        <th >Subtotal</th>
                        <th >Eliminar</th>
                    </tr>
                </thead>
                <>
                    {emptyCart ? <tbody><tr className="text-center"><td /><td /><td>El Carrito esta Vacio...</td><td /><td /></tr></tbody> : <tbody>
                        {cartList.map(item => (
                            <tr key={item.id} className="bg-slate-600 p-2 border-b-2 text-center text-lg">
                                <td className="pl-2">{item.name}</td>
                                <td>{item.cantidad}</td>
                                <td>{(item.price)}</td>
                                <td>{(item.price * item.cantidad)}</td>
                                <td><button className="text-red-600 hover:text-red-700" onClick={() => removeFromCart(item)}>Eliminar</button></td>
                            </tr>
                        ))}
                    </tbody>}
                </>
            </table>
            <section className="flex justify-end gap-2">
                <p>Total: ${cartTotal}</p><button className="bg-red-600 rounded-lg px-1" onClick={() => clearCart()} >Vaciar Carrito</button>
            </section>
        </div>
    )
}

export default Cart