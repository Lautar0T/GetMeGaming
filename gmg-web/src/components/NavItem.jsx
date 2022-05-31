import React from 'react'
import {  NavLink } from 'react-router-dom'

const NavItem = ({content, link, customClass}) => {
    return (
        <li className='mr-10'><NavLink to={`${link}`} className= {({ isActive }) => (isActive ? `${customClass} navItem-active cursor-pointer hover:text-slate-500 font-semibold text-slate-300` : `${customClass} navItem cursor-pointer hover:text-slate-300 font-semibold text-slate-500`)} >{content}</NavLink></li>
    )
}

export default NavItem