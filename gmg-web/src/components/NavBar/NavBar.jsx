import {ImCart} from 'react-icons/im'
const NavBar = () => {
    return (
        <nav className="flex justify-between px-2 items-center">
            <div><a href="/" className="text-3xl font-bold flex items-end"><p className=' text-red-600 hover:text-white'>Get</p><p className='text-black hover:text-white'>Me</p><p className='text-red-600 hover:text-white'>Gaming</p><p className=' text-base text-black hover:text-white'>.com</p></a></div>
            <ul className="flex text-xl justify-between w-1/3 items-center ">
                <li><p onClick={() => {console.log('Inicio')}} className=' cursor-pointer hover:text-white'>Inicio</p></li>
                <li><p onClick={() => {console.log('Productos')}} className=' cursor-pointer hover:text-white'>Productos</p></li>
                <li><p onClick={() => {console.log('Comparar')}} className=' cursor-pointer hover:text-white'>Comparar</p></li>
                <li><p onClick={() => {console.log('Nosotros')}} className=' cursor-pointer hover:text-white'>Nosotros</p></li>
                <li><p onClick={() => {console.log('Cuenta')}} className=' cursor-pointer hover:text-white'>Cuenta</p></li>
                <li><ImCart className='cursor-pointer' onClick={() => {console.log("Carrito")}} /></li>
            </ul>
        </nav>
    )
}

export default NavBar