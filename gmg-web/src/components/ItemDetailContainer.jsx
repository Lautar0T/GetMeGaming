import ItemDetail from './ItemDetail'
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()
    useEffect(() => {
        setLoading(true)
        const db = getFirestore()
        const itemDoc = doc(db, 'items', `${itemId}`)
        getDoc(itemDoc)
            .then(snapShot => {
                if (snapShot.empty) {
                    console.log('No hay items')
                } else {
                    setItem({ id: snapShot.id, ...snapShot.data() })
                }
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])
    return (
        <section className='grid'>
            {loading ? <div className="text-center mt-96 text-2xl font-bold cursor-wait">Cargando...</div> : <ItemDetail item={item} />}
        </section>
    )
}

export default ItemDetailContainer

