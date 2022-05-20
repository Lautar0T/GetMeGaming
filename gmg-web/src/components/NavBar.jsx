
import CartWidget from './CartWidget'
import NavItem from './NavItem'
import { HiOutlineMenu } from 'react-icons/hi'
import { Link } from 'react-router-dom'
const NavBar = () => { // sacar hidden para ver los navItems
    const categorias = [{content:'Inicio', link:'/', customClass:''},{content:'Productos', link:'/products', customClass:''},{content:'Comparar', link:'/compare', customClass:'hidden'},{content:'Nosotros', link:'/us', customClass:'hidden'},{content:'Cuenta', link:'/acount', customClass:'hidden'}]
    return (
        <nav className="flex justify-between items-center p-4 fixed top-0 left-0 right-0 z-30 bg-gray-900 border-2 border-gray-800">
            <div><Link to='/'className="lg:text-4xl text-2xl font-bold flex items-baseline">
                <p className='letrasTitulo bg-violet-600 hover:bg-violet-800 text-gray-900 border-y-2 border-l-2  border-slate-300 rounded-lg rounded-r-none shadow-lg shadow-violet-800 pb-1 px-1 '>Get</p>
                <p className='letrasTitulo bg-slate-300  hover:bg-slate-500 text-gray-900 border-y-2 shadow-lg border-slate-300 shadow-slate-500 pb-1 px-0.5'>Me</p>
                <p className='letrasTitulo bg-violet-600 hover:bg-violet-800 text-gray-900 border-y-2 border-r-2 border-slate-300 rounded-lg rounded-l-none  shadow-lg shadow-violet-800 pb-1 px-1'>Gaming</p>
                <p className=' text-lg text-slate-300  hover:text-slate-500'>.com</p>
            </Link></div>
            <ul className="lg:flex text-xl justify-end w-2/5 items-center pr-10 hidden">
                {categorias.map(cat => <NavItem key={cat.link} content={cat.content} link={cat.link} customClass={cat.customClass}/>)}
                <CartWidget />
            </ul>
            <HiOutlineMenu className='w-11 h-11 lg:hidden' />
        </nav>
    )
}

export default NavBar