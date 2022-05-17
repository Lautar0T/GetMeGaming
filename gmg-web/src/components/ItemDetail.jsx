import ItemCount from './ItemCount'
const ItemDetail = ({ items, loading }) => {
    return (
        <div className="text-slate-100 grid p-6 bg-gray-700 border-gray-800 border-2 rounded-lg ">
            {loading ? <div className="text-center text-2xl font-bold cursor-wait">Cargando...</div> :
                <>
                    
                    <div className="flex justify-between text-center">
                        <img src={items.img} alt="item img" className="lg:h-[48rem]  lg:w-[48rem] h-96 w-96 object-scale-down border-2 rounded-lg shadow-sm shadow-black border-gray-700 bg-white" />
                        <div className="w-full flex-col font-semibold p-2 justify-items-start">
                            <p className=" text-2xl ">{items.name}</p>
                            <p>Precio: <span className=" font-normal">${items.price}</span></p>
                            <ItemCount initial={0} stock={items.stock}/>
                        </div>
                    </div>
                            <p>Descripcion: <span className=" font-normal">{items.description}</span></p>
                </>
            }
        </div>
    )
}

export default ItemDetail