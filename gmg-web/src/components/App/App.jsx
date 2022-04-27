
import NavBar from '../NavBar/NavBar';
function App() {
  return (
    <div className="App h-screen bg-slate-500">
      <header className=" h-12 bg-gray-700 ">
        <NavBar/>
      </header>
      <main className="  h-5/6 flex">Main</main>
    </div>
  );
}

export default App;
