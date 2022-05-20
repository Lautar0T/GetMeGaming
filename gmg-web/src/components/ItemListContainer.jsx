import ItemList from './ItemList'
import  { getFetchByCat }  from "../assets/fetch.js"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
const ItemListContainer = ({saludo}) => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const {catId} = useParams()
    useEffect(() => {
        setLoading(true)
        if (catId) {
            getFetchByCat(catId).then(data => setItems(data)).catch(err => console.log(err)).finally(() => setLoading(false))
        } else{
            getFetchByCat().then(data => setItems(data)).catch(err => console.log(err)).finally(() => setLoading(false))
        }
    }, [catId])
    return (
        <section className='grid justify-center'>
            <p className='hidden text-lg text-center font-bold mb-2'>{saludo}</p>
            {loading ? <div className="text-center mt-96 text-2xl font-bold cursor-wait">Cargando...</div> : <ItemList items={items} loading={loading}/>}
        </section>
    )
}

export default ItemListContainer