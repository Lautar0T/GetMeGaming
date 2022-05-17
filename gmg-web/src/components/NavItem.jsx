import React from 'react'

const NavItem = ({cat}) => {
    return (
        <li className='mr-10'><p onClick={() => {console.log(cat)}} className=' cursor-pointer hover:text-slate-500 font-semibold text-slate-300'>{cat}</p></li>
    )
}

export default NavItem