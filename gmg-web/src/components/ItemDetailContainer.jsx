import ItemDetail from './ItemDetail'
import {getFetch} from '../assets/fetch.js'
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()
    useEffect(() => {
        getFetch(itemId).then(data => setItem(data)).catch(err => console.log(err)).finally(() => setLoading(false))

    })
    return (
        <section className='grid'>
            {loading ? <div className="text-center mt-96 text-2xl font-bold cursor-wait">Cargando...</div> : <ItemDetail item={item}/>}
        </section>
    )
}

export default ItemDetailContainer

