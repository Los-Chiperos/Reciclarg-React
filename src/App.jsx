import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pruebita from "./components/Home/Pruebita";
import Footer from "./components/layout/Footer";
import Eror from "./components/pages/Eror";
// import Contac from "./components/pages/Contac";
import Registrar from "./components/pages/Registrar";
import Login from "./components/pages/Login";
import Nosotros from "./components/pages/Nosotros";
import Huella from "./components/pages/Huella";
import Faq from "./components/pages/Faq";
import Heder2 from "./components/layout/heder2";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
console.log(isLoggedIn);
  return (
    <>
      <BrowserRouter>  
        <Heder2 isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Pruebita />} />
          <Route path="/Registrar" element={<Registrar />} />
          <Route
            path="/Login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/Eror" element={<Eror />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Huella" element={<Huella />} />
          <Route path="/Faq" element={<Faq />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
