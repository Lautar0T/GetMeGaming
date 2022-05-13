
import CartWidget from './CartWidget'
import NavItem from './NavItem'
import {HiOutlineMenu} from 'react-icons/hi'
const NavBar = () => {
    const categorias = ['Inicio', 'Productos','Comparar', 'Nosotros', 'Cuenta']
    return (
        <nav className="flex justify-between px-2 items-center">
            <div><a href="/" className="text-3xl font-bold flex items-end"><p className=' text-red-600 hover:text-white'>Get</p><p className='text-black hover:text-white'>Me</p><p className='text-red-600 hover:text-white'>Gaming</p><p className=' text-base text-black hover:text-white'>.com</p></a></div>
            <ul className="lg:flex text-xl justify-end w-2/5 items-center pr-10 hidden">
                <NavItem cat={categorias[0]}/>
                <NavItem cat={categorias[1]}/>
                <NavItem cat={categorias[2]}/>
                <NavItem cat={categorias[3]}/>
                <NavItem cat={categorias[4]}/>
                <CartWidget/>
            </ul>
            <HiOutlineMenu className='w-11 h-11 lg:hidden' />
        </nav>
    )
}

export default NavBar