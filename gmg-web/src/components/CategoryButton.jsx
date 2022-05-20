import { NavLink } from "react-router-dom"
import { uniqueCategories } from "../assets/fetch"
const CategoryButton = () => {
    return (
        <>
            <ul className='flex justify-center'>
                {uniqueCategories.map(uniCat => <li><NavLink to={`/category/${uniCat.toLowerCase()}`} key={uniCat} className="block px-4 py-2 hover:bg-gray-600 hover:text-white">{uniCat}</NavLink></li>)}
            </ul>
        </>

    )
}

export default CategoryButton