import NavbarComponent from "./Component/Navbar";
import MainPresentation from "./page/HomePage"
import ContactPage from "./page/ContactPage";
import ModelesPage from "./page/ModelesPage";
import MovidaPage from "./page/Models/MovidaPage";
import EscenciaPage from "./page/Models/EscenciaPage";
import NaturaPage from "./page/Models/NaturaPage";
import PatioPage from "./page/Models/PatioPage";
import TerrazzaPage from "./page/Models/TerrazzaPage";
import TorresPage  from "./page/Models/TorresPage";
import TransparenciaPage from "./page/Models/TransparenciaPage";
import XcasaPage from "./page/Models/XcasaPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./languages";

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        {/* <header className="App-header"> */}
          <NavbarComponent/>
        {/* </header> */}
        {/* <main> */}
          <Routes>
            <Route element={<MainPresentation/>} path="/"/>
            <Route element={<ContactPage/>} path="/contact"/>
            <Route element={<ModelesPage/>} path= "/modeles"/>
            <Route element={<MovidaPage/>} path="/Movida"/>
            <Route element={<EscenciaPage/>} path="/Escencia"/>
            <Route element={<NaturaPage/>} path="/Natura"/>
            <Route element={<PatioPage/>} path="/Patio"/>
            <Route element={<TerrazzaPage/>} path="/Terrazza"/>
            <Route element={<TorresPage/>} path="/Torres"/>
            <Route element={<TransparenciaPage/>} path="/Transparencia"/>
            <Route element={<XcasaPage/>} path="/Xcasa"/>
          </Routes>
        {/* </main> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
