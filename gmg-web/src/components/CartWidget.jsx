import { Link } from 'react-router-dom'
import { ImCart } from 'react-icons/im'
const CartWidget = () => {
    return (
        <li>
            <Link to={'/cart'}  className='flex cursor-pointer'>
                <ImCart className=' z-10 text-slate-300 hover:text-slate-500 ' />
                <div className=' rounded-lg h-4 w-4 bg-red-600 text-sm text-center font-extrabold -translate-y-2 '><p className='-translate-y-0.5'>!</p></div>
            </Link>
        </li>
    )
}

export default CartWidget