import { Link } from "react-router-dom"

const Item = ({prodId, name, price, img, stock, descr }) => {
    return (
        <div className="text-black grid justify-items-center bg-gray-700 border-gray-800 border-2 rounded-lg w-80 lg:w-96 p-2 relative">
            <div className="">
                <span className="hover:absolute hidden hover:z-30 z-30 top-1/3 hover:top-1/3 ">Ver mas detalles</span>
                <Link to={`/item/${prodId}`}><img src={img} alt="item img" className="lg:h-80 lg:w-80 h-72 w-72 object-scale-down border-2 rounded-lg shadow-sm shadow-black border-gray-700 bg-white cursor-pointer " /></Link>
            </div>
            <div className="w-full grid font-semibold p-2">
                <p className=" text-lg text-center">{name}</p>
                <p>Precio: <span className=" font-normal">${price}</span></p>
                <p>Stock: <span className=" font-normal">{stock}</span></p>
                <p>Descripcion: <span className=" font-normal">{descr}</span></p>
                <Link to={`/item/${prodId}`} className="bg-violet-400 hover:bg-violet-300 m-1  p-1 rounded-lg shadow-md justify-self-center border-violet-500 border-2 shadow-black">Detalles</Link>
            </div>
        </div>
    )
}

export default Item