import ItemDetailContainer  from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer';
import NavBar from './NavBar';
function App() {
  return (
    <div className="App bg-gray-900 min-h-screen text-white grid justify-center">
      <header className=" h-[5.5vh]">
        <NavBar />
      </header>
      <main className="grid justify-center pt-4 pb-10">
        <ItemListContainer saludo='Bienvenido a mi App, este es el ItemListContainer' />
        <ItemDetailContainer titulo='Este es el ItemDetailContainer'/>
      </main>
    </div>
  );
}

export default App;
