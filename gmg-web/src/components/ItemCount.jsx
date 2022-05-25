import { useState } from "react"
import { Link } from "react-router-dom"
const ItemCount = ({ initial, stock, onAdd, updStock}) => {
    const [count, setCount] = useState(initial)
    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1)
            
        }
        else if (count === stock) {
            console.log("No hay stock disponible")
        }
        updStock(count)
    }
    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1)
            
        }
        else if (count === 0) {
            console.log("No puede ser menor que 0")
        }
        updStock(count)
    }
    return (
        <div className="text-white grid justify-items-center">
            
            <div className="flex justify-center">
                <button onClick={handleDecrement} className="h-7 w-7 text-center text-xl font-bold bg-black hover:bg-red-600 rounded-l-lg">-</button>
                <div className=" inline-block h-7 w-7 text-center text-xl font-semibold bg-black"><span>{count}</span></div>
                <button onClick={handleIncrement} className="h-7 w-7 text-center text-xl font-bold bg-black hover:bg-green-600 rounded-r-lg">+</button>
            </div>
            <span className="hover:bg-blue-700 bg-slate-600 rounded-lg p-1 mt-1 cursor-pointer" onClick={() => onAdd(count)}>Agregar al Carrito</span>
            <Link to='/cart' className="hover:bg-green-700 bg-slate-600 rounded-lg p-1 mt-1">Finalizar compra</Link>
        </div>
    )
}

export default ItemCount