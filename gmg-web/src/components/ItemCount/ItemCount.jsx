import { useState } from "react"
import logo from "../../assets/img/logo512.png"
const ItemCount = ({ initial, stock }) => {
    const [count, setCount] = useState(initial)
    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1)
        }
        else if (count === stock) {
            console.log("No hay stock disponible")
        }
    }
    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
        else if (count === 0) {
            console.log("No puede ser menor que 0")
        }
    }
    return (
        <div className="text-white grid justify-items-center">
            <img src={logo} alt="logo" className="w-20" />
            <div className="">Stock: {stock}</div>
            <div className="flex justify-center">
                <button onClick={handleDecrement} className="h-7 w-7 text-center text-xl font-bold bg-red-600 rounded-l-lg">-</button>
                <div className=" inline-block h-7 w-7 text-center text-xl font-semibold bg-black "><span>{count}</span></div>
                <button onClick={handleIncrement} className="h-7 w-7 text-center text-xl font-bold bg-green-600 rounded-r-lg">+</button>
            </div>
        </div>
    )
}

export default ItemCount