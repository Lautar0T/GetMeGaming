
import CartWidget from './CartWidget'
import NavItem from './NavItem'
import { HiOutlineMenu } from 'react-icons/hi'
const NavBar = () => {
    const categorias = ['Inicio', 'Productos', 'Comparar', 'Nosotros', 'Cuenta']
    return (
        <nav className="flex justify-between  items-center p-4 fixed top-0 left-0 right-0 z-30 bg-gray-900 border-2 border-gray-800">
            <div><a href="/" className="text-4xl font-bold flex items-end">
                <p className='text-violet-600 hover:text-violet-800'>Get</p>
                <p className='text-slate-300  hover:text-slate-500'>Me</p>
                <p className='text-violet-600 hover:text-violet-800'>Gaming</p>
                <p className=' text-lg text-slate-300  hover:text-slate-500'>.com</p>
            </a></div>
            <ul className="lg:flex text-xl justify-end w-2/5 items-center pr-10 hidden">
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