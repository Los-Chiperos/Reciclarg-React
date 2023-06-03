import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import Login from "../pages/Login";
import Registrar from "../pages/Registrar";
import Pruebita from "../Home/Pruebita";
import Nosotros from "../pages/Nosotros";

function Heder() {
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para determinar si el usuario ha iniciado sesión

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Función para manejar el inicio de sesión
  const handleLogin = () => {
    // Lógica para iniciar sesión
    setIsLoggedIn(true);
  };

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    // Lógica para cerrar sesión
    setIsLoggedIn(false);
  };

  return (
    <header>
      {/* Navbar goes here */}
      <nav className="bg-white shadow-lg px-1">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            {/* Resto del código... */}

            {/* Secondary Navbar items */}
            <div className="hidden md:flex items-center space-x-3">
              {isLoggedIn ? (
                // Si el usuario ha iniciado sesión, mostrar el nombre de usuario en lugar de los enlaces de login y registro
                <p>{nombreUsuario}</p>
              ) : (
                // Si el usuario no ha iniciado sesión, mostrar los enlaces de login y registro
                <>
                  <a
                    href="/login"
                    className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
                    onClick={handleLogin}
                  >
                    Loguearse
                  </a>

                  <a
                    href="/Registrar"
                    className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300 none"
                    onClick={Registrar}
                  >
                    Registrarse
                  </a>
                </>
              )}
            </div>
          </div>
          {/* Resto del código... */}
        </div>
      </nav>
    </header>
  );
}

export default Heder;
