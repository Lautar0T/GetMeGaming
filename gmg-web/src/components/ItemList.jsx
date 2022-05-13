import Item from "./Item"
import  products  from "../assets/items.json"
import { useEffect, useState } from "react"

const getFetch = new Promise((resolve) => {
    setTimeout(() => {
        resolve(products.articles)
    }, 2000)
})
const ItemList = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getFetch.then(data => setItems(data)).catch(err => console.log(err)).finally(() => setLoading(false))

    }, [])
    console.log(items)
    return (
        <div className={loading ? "flex justify-center" : "grid md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-stretch justify-center"}>
            {loading ? <div className="text-center text-2xl font-bold cursor-wait">Cargando...</div> : items.map(item => <Item key={item.id} name={item.name} price={item.price} img={item.img} stock={item.stock} descr={item.description}/>)}
        </div>
    )
}

export default ItemList