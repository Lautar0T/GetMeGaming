
import CartWidget from '../Cart/CartWidget'
import NavItem from '../NavItem/NavItem'
const NavBar = () => {
    const categorias = ['Inicio', 'Productos','Comparar', 'Nosotros', 'Cuenta']
    return (
        <nav className="flex justify-between px-2 items-center">
            <div><a href="/" className="text-3xl font-bold flex items-end"><p className=' text-red-600 hover:text-white'>Get</p><p className='text-black hover:text-white'>Me</p><p className='text-red-600 hover:text-white'>Gaming</p><p className=' text-base text-black hover:text-white'>.com</p></a></div>
            <ul className="flex text-xl justify-between w-2/5 items-center ">
                <NavItem cat={categorias[0]}/>
                <NavItem cat={categorias[1]}/>
                <NavItem cat={categorias[2]}/>
                <NavItem cat={categorias[3]}/>
                <NavItem cat={categorias[4]}/>
                <CartWidget/>
            </ul>
        </nav>
    )
}

export default NavBar