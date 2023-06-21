import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Heder2({ isLoggedIn, onLogout, username }) {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogout = () => {
    onLogout();
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <nav className=" gbg-white shadow-lg px-1">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <Link to="/" className="flex items-center ">
                  <img
                    src="http://imgfz.com/i/XecCbuo.png"
                    alt="Logo"
                    className="h-1/5 w-1/5 "
                  />
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <Link
                  to="/"
                  className={`py-4 px-2 font-semibold ${location.pathname === '/' ? 'text-green-500 border-b-4 border-green-500' : 'text-gray-500 hover:text-green-500 transition duration-300'}`}
                >
                  Inicio
                </Link>
                <Link
                  to="/Nosotros"
                  className={`py-4 px-2 font-semibold ${location.pathname === '/Nosotros' ? 'text-green-500 border-b-4 border-green-500' : 'text-gray-500 hover:text-green-500 transition duration-300'}`}
                >
                  Nosotros
                </Link>
                <Link
                  to="/Encuesta"
                  className={`py-4 px-2 font-semibold ${location.pathname === '/Encuesta' ? 'text-green-500 border-b-4 border-green-500' : 'text-gray-500 hover:text-green-500 transition duration-300'}`}
                >
                  Encuesta
                </Link>
                <Link
                  to="/Faq"
                  className={`py-4 px-2 font-semibold ${location.pathname === '/Faq' ? 'text-green-500 border-b-4 border-green-500' : 'text-gray-500 hover:text-green-500 transition duration-300'}`}
                >
                  FAQ
                </Link>
              </div>
            </div>
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
                <svg
                  className={`w-6 h-6 text-gray-500 hover:text-green-500 ${
                    showMenu ? "" : "hidden"
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="hidden md:flex items-center space-x-3">
              {isLoggedIn ? (
                <>
                  <Link to={`/userProfile/${username}`}
 className="text-gray-500">
                    Bienvenido, {username}
                  </Link>
                  <Link
                    to="/"
                    onClick={handleLogout}
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
          <div className={`mobile-menu ${showMenu ? "block" : "hidden"}`}>
            <ul className="pt-4 pb-3">
              {isLoggedIn ? (
                <>
                  <li>
                    <Link to={`/userProfile/${username}`}
                      className="block pl-4 text-sm font-semibold text-gray-900 hover:bg-green-500 hover:text-white transition duration-300 py-2"
                    >
                      Bienvenido, {username}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      onClick={handleLogout}
                      className="block pl-4 text-sm font-semibold text-gray-900 hover:bg-green-500 hover:text-white transition duration-300 py-2"
                    >
                      Cerrar sesión
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/login"
                      className="block pl-4 text-sm font-semibold text-gray-900 hover:bg-green-500 hover:text-white transition duration-300 py-2"
                    >
                      Loguearse
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/registrar"
                      className="block pl-4 text-sm font-semibold text-gray-900 hover:bg-green-500 hover:text-white transition duration-300 py-2"
                    >
                      Registrarse
                    </Link>
                  </li>
                </>
              )}
              <li>
                <Link
                  to="/"
                  className={`block pl-4 text-sm font-semibold ${location.pathname === '/' ? 'text-green-500' : 'text-gray-900 hover:bg-green-500 hover:text-white transition duration-300'} py-2`}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/Nosotros"
                  className={`block pl-4 text-sm font-semibold ${location.pathname === '/Nosotros' ? 'text-green-500' : 'text-gray-900 hover:bg-green-500 hover:text-white transition duration-300'} py-2`}
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/Encuesta"
                  className={`block pl-4 text-sm font-semibold ${location.pathname === '/Encuesta' ? 'text-green-500' : 'text-gray-900 hover:bg-green-500 hover:text-white transition duration-300'} py-2`}
                >
                  Encuesta
                </Link>
              </li>
              <li>
                <Link
                  to="/Faq"
                  className={`block pl-4 text-sm font-semibold ${location.pathname === '/Faq' ? 'text-green-500' : 'text-gray-900 hover:bg-green-500 hover:text-white transition duration-300'} py-2`}
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Heder2;
