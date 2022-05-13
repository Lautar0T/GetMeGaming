import React from 'react'
import {ImCart} from 'react-icons/im'
const CartWidget = () => {
    return (
        <li className='flex cursor-pointer' onClick={() => {console.log("Carrito")}}>
            <ImCart className=' z-10 '/>
            <div className=' rounded-lg h-4 w-4 bg-red-600 text-sm text-center font-extrabold -translate-y-2 '><p className='-translate-y-0.5'>!</p></div>
        </li>
    )
}

export default CartWidget