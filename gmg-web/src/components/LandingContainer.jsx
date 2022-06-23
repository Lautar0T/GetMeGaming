import { Link } from "react-router-dom"
import { IoArrowRedoCircleSharp } from 'react-icons/io5'
const LandingContainer = () => {
    return (
        <div>
            <div className='flex lg:text-9xl text-7xl font-bold rounded-lg border-slate-700 transition items-baseline pt-24'>
                <p className='letrasTitulo hover:text-violet-600 text-slate-500 hover:shadow-sm  pb-1 px-1 '>Get</p>
                <p className='letrasTitulo hover:text-slate-300  text-slate-500 hover:shadow-sm pb-1 px-0.5'>Me</p>
                <p className='letrasTitulo hover:text-violet-600 text-slate-500 hover:shadow-sm  pb-1 px-1'>Gaming</p>
                <p className='dotCom text-lg hover:text-slate-300 text-slate-500 shadow-lg'>.com</p>
            </div>
            <section className="text-center pt-8 text-xl">
                <p>El Sitio para Gamers, creado por gamers.</p>
                <Link to={'/products'} className='flex items-end justify-center '> <button className="mt-8 bg-violet-600 px-2 rounded-lg">Ver Productos</button> <IoArrowRedoCircleSharp className="w-8 h-8 text-violet-300" /> </Link>
            </section>
        </div>
    )
}

export default LandingContainer