import { useCartContext } from "../context/cartContext"

const Cart = () => {
    const { cartList, cartTotal } = useCartContext()
    return (
        <div className="text-slate-100 flex p-6 gap-2 bg-gray-700 border-gray-800 border-2 rounded-lg">
            <section className="w-[800px]">
                <ul className="flex justify-between gap-12 bg-slate-500 border-b-2 border-slate-400 p-2 rounded-t-lg text-center font-semibold text-slate-2 00">
                    <li>Articulo</li>
                    <li>Cantidad</li>
                    <li>Precio</li>
                    <li>Eliminar</li>
                </ul>
                {cartList.map(item => (
                    <ul key={item.id} className="flex justify-between gap-12bg-slate-600 p-2 border-b-2 text-center">
                        <li className="w-22 inline-block">{item.name}</li>
                        <li>{item.cantidad}</li>
                        <li>{(item.price)}</li>
                        <button className="text-red-500">Eliminar</button>
                    </ul>))}
            </section>
            <section className="flex gap-2">
                <p>Total: ${cartTotal}</p><button className="bg-red-500 rounded-lg px-1">Vaciar Carrito</button>
            </section>
        </div>
    )
}

export default Cart