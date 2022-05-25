import { useState } from 'react'
import ItemCount from './ItemCount'
const ItemDetail = ({ item }) => {
    const [count, setCount] = useState(true)
    const [stock, setStock] = useState(parseInt(item.stock))
    console.log(count)
    function updStock(coun) {
        setStock(parseInt(item.stock) - coun)
    }
    function onAdd(cuenta) {
        console.log(cuenta)
        setCount(!count)
    }
    return (
        <div className="text-slate-100 grid p-6 bg-gray-700 border-gray-800 border-2 rounded-lg ">
            <div className="flex justify-between text-center">
                <img src={item.img} alt="item img" className="lg:h-[48rem]  lg:w-[48rem] h-96 w-96 object-scale-down border-2 rounded-lg shadow-sm shadow-black border-gray-700 bg-white" />
                <div className="w-full flex-col font-semibold p-2 justify-item-start">
                    <p className=" text-2xl ">{item.name}</p>
                    <p>Precio: <span className=" font-normal">${item.price}</span></p>
                    <div className="font-normal">Stock Disponible: {stock}</div>
                    {count ? <ItemCount initial={0} stock={item.stock} onAdd={onAdd} updStock={updStock}/> : null}
                </div>
            </div>
            <p>Descripcion: <span className=" font-normal">{item.description}</span></p>
        </div>
    )
}

export default ItemDetail