

const Item = ({name, price, img, stock, descr}) => {
    return (
        <div className="text-black flex justify-items-center border-2 bg-white cursor-pointer " onClick={() => console.log("Click en el articulo:",{name})}> {/* No me acuerdo como pasarlo a string*/}
            <div className="w-[40%] h-[40%]"><img src={img} alt="item img" className="h-auto w-auto" /></div>
            <div className="w-36 lg:w-40  ">
                <p className=" font-semibold text-lg">{name}</p>
                <p>Precio: ${price}</p>
                <p>Stock: {stock}</p>
                <p>Descripcion: {descr}</p>
            </div>
        </div>
    )
}

export default Item