import React from 'react'
import ItemList from './ItemList'
const ItemListContainer = ({saludo}) => {
    
    return (
        <div className='grid justify-center'>
            <p className=' text-lg text-center font-bold mb-2'>{saludo}</p>
            <ItemList />
        </div>
    )
}

export default ItemListContainer