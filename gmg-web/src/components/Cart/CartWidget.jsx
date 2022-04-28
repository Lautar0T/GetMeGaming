import React from 'react'
import {ImCart} from 'react-icons/im'
const CartWidget = () => {
    return (
        <li>
            <ImCart className='cursor-pointer' onClick={() => {console.log("Carrito")}} />
        </li>
    )
}

export default CartWidget