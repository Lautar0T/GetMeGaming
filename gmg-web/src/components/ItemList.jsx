import Item from "./Item"

const ItemList = ({ items, loading }) => {
    function langForm(x) {
        return x.toLocaleString('es-AR');
    }
    return (
        <>
            <div className={loading ? "flex justify-center" : "grid md:grid-cols-2 xl:grid-cols-3 gap-4 place-content-stretch justify-center pt-3"}>
                
                {items.map(item => <Item key={item.id} prodId={item.id} name={item.name} price={langForm(item.price)} img={item.img} stock={langForm(item.stock)} descr={item.description} />)}
            </div>
        </>
    )
}

export default ItemList