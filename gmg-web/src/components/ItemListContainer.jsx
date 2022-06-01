import ItemList from './ItemList'
import CategoryButton from './CategoryButton'
import { getFirestore, where, query, getDocs, collection } from 'firebase/firestore'
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
const ItemListContainer = () => {
    const [categories, setCategories] = useState([])
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { catId } = useParams()
    useEffect(() => {
        setLoading(true)
        const db = getFirestore()
        const itemsCollection = collection(db, 'items')
        const itemsCollectionByCat = query(collection(db, 'items'), where('category', '==', `${catId}`))
        if (catId) {
            getDocs(itemsCollectionByCat)
                .then(snapShot => {
                    if (snapShot.empty) {
                        console.log('No hay items por categoria')
                    } else {
                        setItems(snapShot.docs.map(item => ({ id: item.id, ...item.data() })))
                    }
                })
                .catch(err => console.log(err))
                .finally(() => {
                    setLoading(false)
                })
        }
        else {
            getDocs(itemsCollection)
                .then(snapShot => {
                    if (snapShot.empty) {
                        console.log('No hay items')
                    } else {
                        setItems(snapShot.docs.map(item => ({ id: item.id, ...item.data() })))
                        setCategories(snapShot.docs.map(item => ({ id: item.id, ...item.data() })))
                    }})
                .catch(err => console.log(err))
                .finally(() => {
                    setLoading(false)
                })
        }
    }, [catId])
    return (
        <section className={'grid justify-center'}>
            {loading ? <div className="text-center mt-96 text-2xl font-bold cursor-wait">Cargando...</div> : <section><CategoryButton items={categories} /><ItemList items={items} loading={loading} /></section>}
        </section>
    )
}

export default ItemListContainer