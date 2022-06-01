import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer';
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CartContextProvider from '../context/cartContext';
import Cart from './Cart';
function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App bg-gray-900 min-h-screen text-white flex-col   justify-center">
          <header className=" h-[5.5vh]">
            <NavBar />
          </header>
          <main className="grid justify-center pt-12 pb-10 ">
            <Routes>
              <Route path='/' element={<ItemListContainer/>} />
              <Route path='/category/:catId' element={<ItemListContainer/>} />
              <Route path='/item/:itemId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/*' element={<Navigate to='/' replace />} />
            </Routes>
          </main>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
