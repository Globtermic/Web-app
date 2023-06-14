import NavbarComponent from "./Component/Navbar";
import MainPresentation from "./page/HomePage"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarComponent/>
      </header>
      <main>
        <MainPresentation/>
      </main>
    </div>
  );
}

export default App;
