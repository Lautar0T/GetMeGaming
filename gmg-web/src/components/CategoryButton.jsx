
import { NavLink } from "react-router-dom"
import { uniqueCategories } from "../assets/fetch"
const CategoryButton = () => {
    return (
        <>
            <ul className='flex justify-end xl:min-w-[1184px] md:min-w-[784px] mt-3 '>
                <NavLink to={'/'} className={({ isActive }) => (isActive ? 'block rounded-lg px-4 py-2 hover:bg-slate-800 bg-slate-600 hover:text-white ml-2' : 'block rounded-lg px-4 py-2 bg-slate-800 hover:bg-slate-600 hover:text-white ml-2')}>Todas</NavLink>
                {uniqueCategories.map((uniCat, index) => <li  key={index}><NavLink to={`/category/${uniCat.toLowerCase()}`} className={({ isActive }) => (isActive ? 'block rounded-lg px-4 py-2 hover:bg-slate-800 bg-slate-600 hover:text-white ml-2' : 'block rounded-lg px-4 py-2 bg-slate-800 hover:bg-slate-600 hover:text-white ml-2')}>{uniCat}</NavLink></li>)}
            </ul>
        </>

    )
}

export default CategoryButton