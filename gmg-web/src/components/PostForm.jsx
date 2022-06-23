import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import { IoReturnUpBack } from "react-icons/io5"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
const PostForm = () => {
    const navigate = useNavigate()
    const [product, setProduct] = useState({
        name: '',
        price: '',
        stock: '',
        category: '',
        description: '',
        img: ''
    })
    const [seller, setSeller] = useState({
        name: '',
        email: '',
        lastName: ''
    })
    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }
    const handleSeller = (e) => {
        setSeller({ ...seller, [e.target.name]: e.target.value })
    }
    let postId
    const submitPost = (e) => {
        e.preventDefault()
        if (product.name === '' || product.price === '' || product.stock === '' || product.description === '' || product.img === '') {
            Swal.fire({
                title: 'Error',
                text: 'Todos los campos son obligatorios',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        } else {
            let post = {}
            post.seller = seller
            post.name = product.name
            post.price = product.price
            post.stock = product.stock
            post.category = product.category
            post.description = product.description
            post.img = product.img
            let currentDate = new Date()
            post.date = currentDate
            const db = getFirestore()
            const itemCollection = collection(db,'items')
            addDoc(itemCollection, post)
                .then(snapshot => postId = snapshot.id)
                .catch(err => console.log(err))
                .finally(() => {
                    Swal.fire({
                        title: 'Listo! Su producto ha sido publicado',
                        text: `Post Id: ${postId}`,
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                })
            }
    }
    // function postGenerator() {
    //     let post = {}
    //     post.seller = ''
    //     let currentDate = new Date()
    //     order.date = currentDate.getDate() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getFullYear() + "-" + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds()
    //     post.product = cartList.map(product => {
    //         return {
    //             id: item.id,
    //             product: item.name,
    //             price: item.cantidad * item.price,
    //             quantity: item.cantidad
    //         }
    //     })
    //     const db = getFirestore()
    //     const orderCollection = collection(db, 'orders')
    //     addDoc(orderCollection, order)
    //         .then(snapShot => orderId = snapShot.id)
    //         .catch(err => console.log(err))
    //         .finally(() => {
    //             clearCart() 
    //             Swal.fire('Gracias por su Compra!', `Orden Id: ${orderId}`, 'success')
    //         })
    // }
    return (
        <>
            <IoReturnUpBack className=' justify-self-start px-2 text-white w-12 h-12 rounded-lg ' onClick={() => navigate(-1)} />
            <div className="text-slate-100 grid p-6 bg-gray-700 border-gray-800 border-2 rounded-lg w-[300px] lg:w-[700px] ">
                <form onSubmit={submitPost}>
                    <div className="mb-3">
                        <span className="font-semibold text-2xl">Producto</span>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="productName" className="block mb-2 text-md font-medium">Nombre del Producto</label>
                        <input onChange={handleChange} name="name" type="text" id="productName" className="shadow-sm bg-gray-500 border border-gray-300  text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required="t" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="productCat" className="block mb-2 text-md font-medium ">Categoria</label>
                        <input onChange={handleChange} name="category" type="text" id="productCat" className="shadow-sm bg-gray-500 border border-gray-300  text-sm rounded-lg focus:ring--500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required="t" />
                    </div>
                    <div className="grid xl:grid-cols-2 xl:gap-6">
                        <div className="mb-6">
                            <label htmlFor="productPrice" className="block mb-2 text-md font-medium ">Precio</label>
                            <input onChange={handleChange} name="price" type="number" id="productPrice" className="shadow-sm bg-gray-500 border border-gray-300  text-sm rounded-lg focus:ring--500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required="t" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="productStock" className="block mb-2 text-md font-medium ">Stock</label>
                            <input onChange={handleChange} name="stock" type="number" id="productStock" className="shadow-sm bg-gray-500 border border-gray-300  text-sm rounded-lg focus:ring--500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required="t" />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="productImage" className="block mb-2 text-md font-medium ">Imagen del Producto</label>
                        <input onChange={handleChange} name="img" type="url" id="productImage" placeholder="URL (imageupload.com/image1)" className="shadow-sm bg-gray-500 placeholder:text-slate-200 border border-gray-300  text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required="t" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="productDescription" className="block mb-2 text-md font-medium">Your message</label>
                        <textarea onChange={handleChange} name="description" id="productDescription" rows="4" className="block p-2.5 w-full text-sm placeholder:text-slate-200 bg-gray-500 rounded-lg border border-gray-300 focus:ring-violet-500 focus:border-violet-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escriba una descripcion para su producto..."></textarea>
                    </div>
                    <div className="mb-3">
                        <span className="font-semibold text-2xl">Vendedor</span>
                    </div>
                    <div className="grid xl:grid-cols-2 xl:gap-6">
                        <div className="mb-6">
                            <label htmlFor="sellerName" className="block mb-2 text-md font-medium ">Nombre</label>
                            <input onChange={handleSeller} name="name" type="text" id="sellerName" className="shadow-sm bg-gray-500 border border-gray-300  text-sm rounded-lg focus:ring--500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required="t" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="sellerLastName" className="block mb-2 text-md font-medium ">Apelllido</label>
                            <input onChange={handleSeller} name="lastName" type="text" id="sellerLastName" className="shadow-sm bg-gray-500 border border-gray-300  text-sm rounded-lg focus:ring--500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required="t" />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="sellerEmail" className="block mb-2 text-md font-medium">Email</label>
                        <input onChange={handleSeller} name="email" type="email" id="sellerEmail" placeholder="example@email.com" className="shadow-sm placeholder:text-slate-200 bg-gray-500 border border-gray-300  text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required="t" />
                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-violet-300 rounded bg-violet-200 focus:ring-3 focus:ring-violet-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-violet-600 dark:ring-offset-gray-800" required="t" />
                        </div>
                        <label htmlFor="terms" className="ml-2 text-sm font-medium">Acepto los <span className="text-violet-400">Terminos y condiciones</span></label>
                    </div>
                    <button type="submit" className="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">Publicar Producto</button>
                </form>
            </div>
        </>
    )
}

export default PostForm