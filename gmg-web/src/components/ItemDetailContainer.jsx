import ItemDetail from './ItemDetail'
import products from '../assets/items.json'
import { useState, useEffect } from "react"
const ItemDetailContainer = ({titulo}) => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const getFetch = new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.articles)
        }, 2000)
    })
    useEffect(() => {
        getFetch.then(data => setItems(data)).catch(err => console.log(err)).finally(() => setLoading(false))

    })
    return (
        <section className='grid'>
            <p className=' text-lg text-center font-bold mb-2'>{titulo}</p>
            <ItemDetail items={items[0]} loading={loading}/>
        </section>
    )
}

export default ItemDetailContainer

