import Item from "./Item"
import CategoryButton from "./CategoryButton"

const ItemList = ({ items, loading }) => {
    console.log(items)
    return (
        <>
            <CategoryButton />
            <div className={loading ? "flex justify-center" : "grid md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-stretch justify-center pt-3"}>
                
                {items.map(item => <Item key={item.id} prodId={item.id} name={item.name} price={item.price} img={item.img} stock={item.stock} descr={item.description} />)}
            </div>
        </>
    )
}

export default ItemList