import ItemListContainer from '../ItemListContainer/ItemListContainer';
import NavBar from '../NavBar/NavBar';
function App() {
  return (
    <div className="App h-screen bg-slate-500">
      <header className=" h-12 bg-gray-700 ">
        <NavBar/>
      </header>
      <ItemListContainer saludo='Bienvenido a mi App, este es el ItemListContainer'/>
      <main className=" h-5/6 flex w-screen">Main</main>
    </div>
  );
}

export default App;
