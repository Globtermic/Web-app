import NavbarComponent from "./Component/Navbar";
import MainPresentation from "./page/HomePage"
import ContactPage from "./page/ContactPage";
import ModelesPage from "./page/ModelesPage";
import { Escencia, Patio, Natura, Terrazza, Torres, Transparencia, Xcasa, Movida } from "./page/ModelesData";
import ModelComponent from "./Component/ModelComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./languages";
import EndPage from "./Component/EndPage";

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
            <Route element={<ModelComponent Data={Movida} title={'Movida'}/>} path="/Movida"/>
            <Route element={<ModelComponent Data={Escencia} title={'Escencia'}/>} path="/Escencia"/>
            <Route element={<ModelComponent Data={Natura} title={'Natura'}/>} path="/Natura"/>
            <Route element={<ModelComponent Data={Patio} title={'Patio'}/>} path="/Patio"/>
            <Route element={<ModelComponent Data={Terrazza} title={'Terrazza'}/>} path="/Terrazza"/>
            <Route element={<ModelComponent Data={Torres} title={'Torres'}/>} path="/Torres"/>
            <Route element={<ModelComponent Data={Transparencia} title={'Transparencia'}/>} path="/Transparencia"/>
            <Route element={<ModelComponent Data={Xcasa} title={'Xcasa'}/>} path="/Xcasa"/>
          </Routes>
        {/* </main> */}
        <EndPage/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
