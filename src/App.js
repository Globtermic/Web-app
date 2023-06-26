import NavbarComponent from "./Component/Navbar";
import MainPresentation from "./page/HomePage"
import ContactPage from "./page/ContactPage";
import ModelesPage from "./page/ModelesPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          </Routes>
        {/* </main> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
