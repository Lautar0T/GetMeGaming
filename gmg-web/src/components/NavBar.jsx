
import CartWidget from './CartWidget'
import NavItem from './NavItem'
import { HiOutlineMenu } from 'react-icons/hi'
const NavBar = () => {
    const categorias = ['Inicio', 'Productos', 'Comparar', 'Nosotros', 'Cuenta']
    return (
        <nav className="flex justify-between  items-center p-4 fixed top-0 left-0 right-0 z-30 bg-gray-900 border-2 border-gray-800">
            <div><a href="/" className="text-4xl font-bold flex items-end">
                <p className='bg-violet-600 hover:bg-violet-800 text-gray-900 rounded-lg rounded-r-none shadow-md shadow-violet-800 px-1'>Get</p>
                <p className='bg-slate-300  hover:bg-slate-500 text-gray-900 shadow-md shadow-slate-500 px-1'>Me</p>
                <p className='bg-violet-600 hover:bg-violet-800 text-gray-900 rounded-lg rounded-l-none  shadow-md shadow-violet-800 px-1'>Gaming</p>
                <p className=' text-lg text-slate-300  hover:text-slate-500'>.com</p>
            </a></div>
            <ul className="lg:flex text-xl justify-end w-2/5 items-center pr-10 hidden ">
                <NavItem cat={categorias[0]} />
                <NavItem cat={categorias[1]} />
                <NavItem cat={categorias[2]} />
                <NavItem cat={categorias[3]} />
                <NavItem cat={categorias[4]} />
                <CartWidget />
            </ul>
            <HiOutlineMenu className='w-11 h-11 lg:hidden' />
        </nav>
    )
}

export default NavBar