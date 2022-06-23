import { useState } from 'react'
import ItemCount from './ItemCount'
import { useCartContext } from '../context/cartContext'
import { useNavigate } from 'react-router-dom'
import { IoReturnUpBack } from 'react-icons/io5'
import { useEffect } from 'react'
const ItemDetail = ({ item }) => {
    const [liveStock, setLiveStock] = useState(item.stock - 1)
    const { isInCart, calcTotal, setEmptyCart } = useCartContext()
    const [notStock, setNotStock] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        if (item.stock === 0) {
            setNotStock(true)
            setLiveStock(0)
        }
        }, [item.stock])
    function updStockLow() {
        setLiveStock(liveStock - 1)
    }
    function updStockHi() {
        setLiveStock(liveStock + 1)
    }
    function onAdd(cant) {
        isInCart({ ...item, cantidad: cant }, cant)
        calcTotal(item.price, cant)
        setEmptyCart(false)
    }
    return (
        <>
            <IoReturnUpBack className=' justify-self-start px-2 text-white w-12 h-12 rounded-lg ' onClick={() => navigate(-1)} />
            <div className="text-slate-100 grid p-6 bg-gray-700 border-gray-800 border-2 rounded-lg">
                <div className="flex gap-2 justify-between text-center">
                    <img src={item.img} alt="item img" className="lg:h-[48rem]  lg:w-[48rem] h-[14rem] w-[14rem] object-scale-down border-2 rounded-lg shadow-sm shadow-black border-gray-700 bg-white" />
                    <div className="w-full flex-col font-semibold p-2 justify-item-start">
                        <p className=" text-2xl ">{item.name}</p>
                        <p>Precio: <span className=" font-normal">${item.price}</span></p>
                        <p>Stock: <span className="font-normal">{liveStock}</span></p>
                        {notStock ? <p>Este Producto se encuentra agotado...</p> : <ItemCount initial={1} stock={item.stock} onAdd={onAdd} updStockLow={updStockLow} updStockHi={updStockHi} />}
                    </div>
                </div>
                <p className='font-semibold'>Descripcion: <span className=" font-normal">{item.description}</span></p>
            </div>
        </>
    )
}

export default ItemDetail