import { useState } from 'react'
import ItemCount from './ItemCount'
import { useCartContext } from '../context/cartContext'
const ItemDetail = ({ item }) => {
    const [showCount, setShowCount] = useState(true)
    const [liveStock, setLiveStock] = useState(item.stock)
    function updStockLow () {
        setLiveStock(liveStock - 1)
    }
    function updStockHi () {
        setLiveStock(liveStock + 1)
    }
    const {addToCart, calcTotal} = useCartContext()
    function onAdd(cant) {
        addToCart([{...item, cantidad: cant}])
        setShowCount(!showCount)
        calcTotal()
    }
    return (
        <div className="text-slate-100 grid p-6 bg-gray-700 border-gray-800 border-2 rounded-lg ">
            <div className="flex justify-between text-center">
                <img src={item.img} alt="item img" className="lg:h-[48rem]  lg:w-[48rem] h-96 w-96 object-scale-down border-2 rounded-lg shadow-sm shadow-black border-gray-700 bg-white" />
                <div className="w-full flex-col font-semibold p-2 justify-item-start">
                    <p className=" text-2xl ">{item.name}</p>
                    <p>Precio: <span className=" font-normal">${item.price}</span></p>
                    <p>Stock: <span className="font-normal">{liveStock}</span></p>
                    {showCount ? <ItemCount initial={0} stock={item.stock} onAdd={onAdd} updStockLow={updStockLow} updStockHi={updStockHi}/> : null}
                </div>
            </div>
            <p>Descripcion: <span className=" font-normal">{item.description}</span></p>
        </div>
    )
}

export default ItemDetail