import { IoLogoInstagram, IoLogoTwitch, IoLogoTwitter, IoLogoWhatsapp } from "react-icons/io5"
import NavItem from "./NavItem"

const Footer = () => {
    const categorias = [{ content: 'Inicio', link: '/', customClass: 'hidden' }, { content: 'Productos', link: '/products', customClass: '' }, { content: 'Publicar', link: '/post', customClass: '' }, { content: 'Perfil', link: '/profile', customClass: '' }]
    return (
        <div className="max-h-14 absolute bottom-0 w-full flex gap-40 px-8 justify-center">
            <div className='flex lg:text-2xl text-4xl font-bold rounded-lg border-slate-700 transition items-baseline '>
                <p className='letrasTitulo hover:text-violet-600 text-slate-500 hover:shadow-lg  pb-1 px-1 '>Get</p>
                <p className='letrasTitulo hover:text-slate-300  text-slate-500 hover:shadow-lg pb-1 px-0.5'>Me</p>
                <p className='letrasTitulo hover:text-violet-600 text-slate-500 hover:shadow-lg pb-1 px-1'>Gaming</p>
                <p className='dotCom text-sm hover:text-slate-300 text-slate-500 shadow-lg'>.com</p>
            </div>
            <div>
                <ul className="lg:flex text-md items-center hidden">
                    {categorias.map(cat => <NavItem key={cat.link} content={cat.content} link={cat.link} customClass={cat.customClass} />)}
                </ul>
            </div>
            <div>
                <span className="text-slate-400">Contacto: <span className="text-slate-500">atencion@getmegaming.com</span> 
                </span>
            </div>
            <div>
                <span className="text-slate-400">Telefono: <span className="text-slate-500">atencion@getmegaming.com</span> 
                </span>
            </div>
            <div className="flex gap-4 cursor-pointer">
            <IoLogoInstagram className=" w-7 h-7"/>
            <IoLogoTwitter className=" w-7 h-7"/>
            <IoLogoWhatsapp className=" w-7 h-7"/>
            <IoLogoTwitch className=" w-7 h-7"/>
            </div>
        </div>
    )
}

export default Footer