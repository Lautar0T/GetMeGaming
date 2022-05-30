
import CartWidget from './CartWidget'
import NavItem from './NavItem'
import { HiOutlineMenu } from 'react-icons/hi'
import { Link } from 'react-router-dom'
const NavBar = () => {
    const categorias = [{ content: 'Inicio', link: '/', customClass: '' }, { content: 'Productos', link: '/products', customClass: '' }, { content: 'Comparar', link: '/compare', customClass: '' }, { content: 'Nosotros', link: '/us', customClass: '' }, { content: 'Cuenta', link: '/acount', customClass: '' }]
    return (
        <nav className="flex justify-between items-center p-4 fixed top-0 left-0 right-0 z-30 bg-gray-900 border-b-2 border-gray-800">
            <div><Link to='/' className="flex items-baseline">
                <div className='flex lg:text-5xl text-4xl font-bold rounded-lg border-slate-700 transition '>
                    <p className='letrasTitulo hover:text-violet-600 text-slate-500 shadow-lg  pb-1 px-1 '>Get</p>
                    <p className='letrasTitulo hover:text-slate-300  text-slate-500 shadow-lg pb-1 px-0.5'>Me</p>
                    <p className='letrasTitulo hover:text-violet-600 text-slate-500 shadow-lg pb-1 px-1'>Gaming</p>
                </div>
                <p className='dotCom text-lg hover:text-slate-300 text-slate-500 shadow-lg'>.com</p>
            </Link></div>
            <ul className="lg:flex text-xl justify-end w-2/5 items-center pr-10 hidden">
                {categorias.map(cat => <NavItem key={cat.link} content={cat.content} link={cat.link} customClass={cat.customClass} />)}
                <CartWidget />
            </ul>
            <HiOutlineMenu className='w-11 h-11 lg:hidden' />
        </nav>
    )
}

export default NavBar