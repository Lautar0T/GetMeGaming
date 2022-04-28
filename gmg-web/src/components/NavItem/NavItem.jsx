import React from 'react'

const NavItem = ({cat}) => {
    return (
        <li><p onClick={() => {console.log(cat)}} className=' cursor-pointer hover:text-white'>{cat}</p></li>
    )
}

export default NavItem