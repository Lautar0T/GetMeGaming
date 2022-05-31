import { Link } from 'react-router-dom'
import { ImCart } from 'react-icons/im'
import { useCartContext } from '../context/cartContext'
const CartWidget = () => {
    const { cartList, emptyCart} = useCartContext()
    const cart = cartList.reduce((a,item) =>  a = a + item.cantidad , 0)
    return (
        <li>
            <Link to={'/cart'}  className='flex cursor-pointer navItem'>
                <ImCart className='z-10 text-slate-500 hover:text-slate-300 ' />
                {emptyCart ? undefined : <div className=' rounded-lg h-4 w-4 bg-red-600 text-sm text-center font-extrabold -translate-y-2 '><p className='-translate-y-0.5'>{cart}</p></div>}
            </Link>
        </li>
    )
}

export default CartWidget