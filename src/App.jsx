import Heder from "./components/layout/Heder";
import Pruebita from "./components/Home/Pruebita";
import Footer from "./components/layout/Footer";
import Eror from "./components/pages/Eror";
//import Contac from "./components/pages/Contac";
import Registrar from "./components/pages/Registrar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/pages/Login";
import Nosotros from "./components/pages/Nosotros";
import Huella from "./components/pages/Huella";

function App() {
  return (
    <>
      <BrowserRouter>
        <Heder />
        <Routes>
          <Route path="/" element={<Pruebita />} />
          <Route path="/Registrar" element={<Registrar/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Eror" element={<Eror/>}/>
          <Route path="/Nosotros" element={<Nosotros/>}/>
          <Route path="/Huella" element={<Huella/>}/>
          
        </Routes>

        <Footer />
      </BrowserRouter>
      
      
    </>
  );
}

export default App;



