import { Link, useNavigate } from "react-router-dom"
import { useCartContext } from "../context/cartContext"
import { MdDeleteForever, MdDeleteOutline } from "react-icons/md"
import { IoReturnUpBack } from "react-icons/io5"
const Cart = () => {
    const { cartList, cartTotal, clearCart, removeFromCart, emptyCart, showCart } = useCartContext()
    const navigate = useNavigate()
    showCart()
    function orderGenerator(){
        let order = {}
        order.buyer = {name: "John",lastname: "Doe", email: "john_doe@gmail.com", phone: "1144235622"}
        order.total = cartTotal
        order.items = cartList.map(item => {
            return {
                id: item.id,
                product: item.name,
                price: item.cantidad * item.price,
                quantity: item.cantidad
            }
        })
        console.log( 'order', order)
    }
    orderGenerator()
    return (
        <>
            <IoReturnUpBack className=' justify-self-start px-2 text-white w-12 h-12 rounded-lg ' onClick={() => navigate(-1)} />
            <div className="text-slate-100 grid p-3 lg:p-6 gap-2 bg-gray-700 border-gray-800 border-2 rounded-lg">
                <table className={emptyCart ? "table-auto rounded-t-lg bg-slate-500 max-w-[90%]" : "table-auto rounded-lg bg-slate-500 "}>
                    <thead>
                        <tr className=" border-b-2 border-slate-400 font-semibold lg:text-xl content-between">
                            <th  className="pl-2 p-1 lg:pr-24">Articulo</th>
                            <th className="p-1 lg:pr-24">Cantidad</th>
                            <th className="p-1 lg:pr-24">Precio</th>
                            <th className="p-1 lg:pr-24">Subtotal</th>
                            <th className="p-1 lg:pr-12">Eliminar</th>
                        </tr>
                    </thead>
                    <>
                        {emptyCart ? undefined : <tbody>
                            {cartList.map(item => (
                                <tr key={item.id} className="bg-slate-600 border-slate-400 p-2 border-b-2 text-center text-lg">
                                    <td className="pl-2 p-1 lg:pr-24 font-medium">{item.name}</td>
                                    <td className="p-1 lg:pr-24">{item.cantidad}</td>
                                    <td className="p-1 lg:pr-24">${(item.price)}</td>
                                    <td className="p-1 lg:pr-24">${(item.price * item.cantidad)}</td>
                                    <td className="justify-center flex items-baseline p-1 lg:pr-12"><MdDeleteOutline className="text-red-600 hover:text-red-700 w-full h-7 " onClick={() => removeFromCart(item)} /></td>
                                </tr>
                            ))}
                        </tbody>}
                    </>
                </table>
                {emptyCart ? <div className="text-center grid "><span className=" rounded-b-lg py-1 text-lg font-medium bg-slate-500 ">El Carrito esta Vacio...</span><Link to={'/'} className='bg-violet-800 justify-self-center p-1 mt-2 rounded-lg' >Ver Productos</Link></div> : <section className="flex justify-end gap-2">
                    <p className="text-lg">Total: ${cartTotal}</p>
                    <Link to={"/"} className="rounded-lg bg-slate-400 p-1 font-medium" >Seguir Comprando</Link>
                    <button className="bg-red-600 rounded-lg px-1 flex items-center font-medium" onClick={() => clearCart()} >
                        <p>Vaciar</p> <MdDeleteForever className="w-5 h-5" />
                    </button>
                </section>}
            </div>
        </>
    )
}

export default Cart