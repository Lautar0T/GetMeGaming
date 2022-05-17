import ItemList from './ItemList'
import  products  from "../assets/items.json"
import { useState, useEffect } from "react"
const ItemListContainer = ({saludo}) => {
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
        <section className='grid justify-center'>
            <p className=' text-lg text-center font-bold mb-2'>{saludo}</p>
            <ItemList items={items} loading={loading}/>
        </section>
    )
}

export default ItemListContainer