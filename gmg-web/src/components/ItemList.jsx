import Item from "./Item"


const ItemList = ({items, loading}) => {
    console.log(items)
    return (
        <div className={loading ? "flex justify-center" : "grid md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-stretch justify-center"}>
            {loading ? <div className="text-center text-2xl font-bold cursor-wait">Cargando...</div> : items.map(item => <Item key={item.id} name={item.name} price={item.price} img={item.img} stock={item.stock} descr={item.description}/>)}
        </div>
    )
}

export default ItemList