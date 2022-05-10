import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
const ItemListContainer = ({saludo}) => {
    
    return (
        <div>
            <p className=' text-lg text-center font-bold'>{saludo}</p>
            <ItemCount initial={0} stock={7} />
        </div>
    )
}

export default ItemListContainer