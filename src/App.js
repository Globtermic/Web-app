import NavbarComponent from "./Component/Navbar";
import MainPresentation from "./page/HomePage"
import ContactPage from "./page/ContactPage";
import ModelesPage from "./page/ModelesPage";
import { Escencia, Natura, Terrazza, Torres, Transparencia, Xcasa, Movida, Unidad, Sombra,
Aberta, Cala, Dolcevita, Emporda, Malou, Marina } from "./page/ModelesData";
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
            <Route element={<ModelComponent Data={Terrazza} title={'Terrazza'}/>} path="/Terrazza"/>
            <Route element={<ModelComponent Data={Torres} title={'Torres'}/>} path="/Torres"/>
            <Route element={<ModelComponent Data={Transparencia} title={'Transparencia'}/>} path="/Transparencia"/>
            <Route element={<ModelComponent Data={Xcasa} title={'Xcasa'}/>} path="/Xcasa"/>
            <Route element={<ModelComponent Data={Unidad} title={'Unidad'}/>} path='/Unidad' />
            <Route element={<ModelComponent Data={Sombra} title={'Sombra'}/>} path='/Sombra' />
            <Route element={<ModelComponent Data={Aberta} title={'Aberta'}/>} path='/Aberta' />
            <Route element={<ModelComponent Data={Cala} title={'Cala'}/>} path='/Cala' />
            <Route element={<ModelComponent Data={Dolcevita} title={'Dolcevita'}/>} path='/Dolcevita' />
            <Route element={<ModelComponent Data={Emporda} title={'Emporda'}/>} path='/Emporda' />
            <Route element={<ModelComponent Data={Malou} title={'Malou'}/>} path='/Malou'/>
            <Route element={<ModelComponent Data={Marina} title={'Marina'}/>} path='/Marina' />
          </Routes>
        {/* </main> */}
        <EndPage/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
