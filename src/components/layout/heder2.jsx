import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Login from "../pages/Login";
import Registrar from "../pages/Registrar";
import Pruebita from "../Home/Pruebita";
import Nosotros from "../pages/Nosotros";

function Heder2({ isLoggedIn }) {
  const [showMenu, setShowMenu] = useState(false);
  const handleLogout = () => {
    // Llamar a la función onLogout para cerrar sesión
    onLogout();}

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      {/* Navbar goes here */}
      <nav className="bg-white shadow-lg px-1">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                {/* Website Logo */}
                <Link to="/" className="flex items-center py-4 px-2">
                  <img
                    src="https://w7.pngwing.com/pngs/963/751/png-transparent-test-case-logo-software-testing-engineering-use-case-business-blue-people-innovation.png"
                    alt="Logo"
                    className="h-8 w-8 mr-2"
                  />
                </Link>
              </div>
              {/* Primary Navbar items */}
              <div className="hidden md:flex items-center space-x-1">
                <Link
                  to="/"
                  className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold"
                >
                  Inicio
                </Link>
                <Link
                  to="/Nosotros"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >
                  Nosotros
                </Link>
                <a
                  href="./huellacarbono.html"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >
                  Calcula tu huella de carbono
                </a>
                <a
                  href=""
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >
                  Encuestas
                </a>
              </div>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                className="outline-none mobile-menu-button"
                onClick={toggleMenu}
              >
                <svg
                  className={`w-6 h-6 text-gray-500 hover:text-green-500 ${
                    showMenu ? "hidden" : ""
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
            {/* End of Mobile menu button */}
            {/* Secondary Navbar items */}
            <div className="hidden md:flex items-center space-x-3">
              {isLoggedIn ? (
                <>
                  <span className="text-gray-500">Bienvenido, {isLoggedIn}</span>
                  <Link
                    to="/"  onClick={handleLogout}
                    className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300" 
                  >
                    Cerrar sesión
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
                  >
                    Loguearse
                  </Link>
                  <Link
                    to="/registrar"
                    className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300 none"
                  >
                    Registrarse
                  </Link>
                </>
              )}
            </div>
          </div>
          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div className={`mobile-menu ${showMenu ? "block" : "hidden"}`}>
            <ul className="pt-4 pb-3">
              {!isLoggedIn ? (
                <>
                  <li>
                    <Link
                      to="/registrar"
                      className="text-center block pl-4 text-sm font-semibold text-gray-900 hover:bg-green-500 hover:text-white transition duration-300 py-2"
                    >
                      Registrarse
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/login"
                      className="text-center block pl-4 text-sm font-semibold text-gray-900 hover:bg-green-500 hover:text-white transition duration-300 py-2"
                    >
                      Logearse
                    </Link>
                  </li>
                </>
              ) : null}
              <li>
                <Link
                  to="/"
                  className="block pl-4 text-sm font-semibold text-gray-900 hover:bg-green-500 transition hover:text-white duration-300 py-2"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <a
                  href="/recompensa.html"
                  className="block pl-4 text-sm font-semibold text-gray-900 hover:bg-green-500 transition hover:text-white duration-300 py-2"
                >
                  recompensas
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="block pl-4 text-sm font-semibold text-gray-900 hover:bg-green-500 transition hover:text-white duration-300 py-2"
                >
                  Encuestas
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Heder2;

