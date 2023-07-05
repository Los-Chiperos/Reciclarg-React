// App.jsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Pruebita from "./components/Home/Pruebita";
import Footer from "./components/layout/Footer";
import Eror from "./components/pages/Eror";
import Registrar from "./components/pages/Registrar";
import Login from "./components/pages/Login";
import Nosotros from "./components/pages/Nosotros";
import Faq from "./components/pages/Faq";
import Heder2 from "./components/layout/heder2";
import UserProfile from "./components/pages/userProfile";
import Encuesta from "./components/pages/Encuesta";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    //borrar token
  };

  return (
    <BrowserRouter>
      <Heder2
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        username={username}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Pruebita
              isLoggedIn={isLoggedIn}
              onLogout={handleLogout}
              username={username}
            />
          }
        />
        <Route path="/Registrar" element={<Registrar />} />
        <Route path="/Login" element={<Login onLogin={handleLogin} />} />
        <Route path="/Eror" element={<Eror />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/Encuesta" element={<Encuesta />} />

        <Route
          path="/userProfile/:username"
          element={
            <UserProfile
              isLoggedIn={isLoggedIn}
              onLogout={handleLogout}
              username={username}
            />
          }
        />
      </Routes>
      <Footer
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        username={username}
      />
    </BrowserRouter>
  );
}

export default App;
