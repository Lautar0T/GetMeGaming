import { useCartContext } from "../context/cartContext"

const Cart = () => {
    const { cartList, cartTotal } = useCartContext()
    return (
        <div className="text-slate-100 grid p-6 bg-gray-700 border-gray-800 border-2 rounded-lg">
            <section>
                <ul className="flex justify-between bg-slate-500 p-2 rounded-t-lg">
                    <li>Articulo</li>
                    <li>Cantidad</li>
                    <li>Precio</li>
                    {cartList.map(item => (
                        <li key={item.id} className="flex">
                            <p>{item.name}</p>
                            <p>{item.cantidad}</p>
                            <button>Eliminar</button>
                        </li>))}
                </ul>
            </section>
            <section>
                <p>Total: ${cartTotal}</p>
            </section>
        </div>
    )
}

export default Cart