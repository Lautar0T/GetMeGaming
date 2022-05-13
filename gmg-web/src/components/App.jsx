import ItemListContainer from './ItemListContainer';
import NavBar from './NavBar';
function App() {
  return (
    <div className="App bg-slate-500 min-h-screen">
      <header className=" h-[7vh] bg-gray-700">
        <NavBar />
      </header>
      <main className="flex w-screen justify-center pt-4 pb-10">
        <ItemListContainer saludo='Bienvenido a mi App, este es el ItemListContainer' />
      </main>
    </div>
  );
}

export default App;
