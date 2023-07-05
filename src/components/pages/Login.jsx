import React, { useState } from 'react';
// import axios from 'axios';
import Service from '../../service/Service'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
 
  const service =  new Service();

  const handleLogin = async () => {

   
     
     let params = JSON.stringify({
      "username": username,
      "password": password
    });
   
    let response = await service.login('login',params);
    console.log("status " + response);
    if (response.status == 200){
      
      onLogin(response.data.nombre);
      navigate('/');
    } else {
      setError("Error de autenticación");

    }
  };

  return (
    <div className="py-6">
      <ToastContainer position="top-center" />
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
          <div className="mt-4 flex items-center justify-between"></div>
          <div className="mt-4">
            <label className="block text-green-600 text-sm font-bold mb-2">Username</label>
            <input
              className="bg-amber-100 text-green-600 focus:outline-none focus:shadow-outline border border-green-600 rounded py-2 px-4 block w-full appearance-none"
              type="text"
              id="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block text-green-600 text-sm font-bold mb-2">Contraseña</label>
            </div>
            <input
              className="bg-amber-100 text-gray-700 focus:outline-none focus:shadow-outline border border-green-600 rounded py-2 px-4 block w-full appearance-none"
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
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
