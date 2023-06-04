import React, { useState } from 'react';
import axios from 'axios';
import {redirect} from 'react-router-dom';




const Login = ({ setIsLoggedIn }) => {
  const handleLogin = async () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    try {
      const response = await axios.post('https://api.reciclarg.cloud/auth', {
        username: username,
        password: password
      });

      if (response.status === 200) {
        alert('Autenticación exitosa');
        // Redirige a otra página o realiza alguna acción adicional
        setIsLoggedIn(true);
        return <redirect to="/" />;
      } else if (response.status === 401) {
        alert('Error de autenticación');
      } else if (response.status === 402) {
        alert('Ingrese Usuario y Contraseña');
      }
    } catch (error) {
      alert('Error de autenticación');
    }
  };

  return (
    <div className="py-6">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')"
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-4xl font-bold text-green-600 text-center">Ingresar</h2>
          <p className="text-x1 font-bold sm: text-green-700 text-center"></p>
          <div className="mt-4 flex items-center justify-between"></div>
          <a
            href="#"
            className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
          >
            <div className="px-4 py-3">
              <svg className="h-6 w-6" viewBox="0 0 40 40">
                {/* SVG paths */}
              </svg>
            </div>
            <h1 className="text-amber-100 px-4 py-3 w-5/6 bg-green-600 text-center hover:text-green-600 hover:bg-amber-100 font-bold hover:transition-duration: 75ms">
              Ingresa con Google
            </h1>
          </a>
          <div className="mt-4">
            <label className="block text-green-600 text-sm font-bold mb-2">Email</label>
            <input
              className="bg-amber-100 text-green-600 focus:outline-none focus:shadow-outline border border-green-600 rounded py-2 px-4 block w-full appearance-none"
              type="email"
              id="username"
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block text-green-600 text-sm font-bold mb-2">Contraseña</label>
              <a href="#" className="text-xs text-text-green-600"></a>
            </div>
            <input
              className="bg-amber-100 text-gray-700 focus:outline-none focus:shadow-outline border border-green-600 rounded py-2 px-4 block w-full appearance-none"
              type="password"
              id="password"
            />
            <br />
          </div>
          <label className="block text-green-600 font-medium" htmlFor="remember">
            <input
              className="ml-2 leading-tight text-green-600 focus:outline-none"
              type="checkbox"
              id="remember"
              name="remember"
            />
            <span className="text-sm">Recordarme</span>
          </label>
          <div className="mt-8">
            <button
              className="bg-green-600 text-amber-100 font-bold py-2 px-4 w-full rounded hover:bg-amber-100 hover:text-green-600"
              id="login"
              onClick={handleLogin}
            >
              Ingresar
            </button>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/4 md:w-1/4"></span>
            <a href="/Registrar" className="text-xs hover:font-semibold text-green-600 uppercase">
              Sin cuenta? Registrate!
            </a>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
