// UserProfile.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { username } = useParams();
  const [user, setUser] = useState({
    nombre: '',
    apellido: '',
    email: username,
    password: '',
    passwordConfirmation: '',
  });
  const [isEditMode, setIsEditMode] = useState(false);
console.log(username);
  useEffect(() => {
    axios.get(`https://api.reciclarg.cloud/users/${username}`)
      .then(response => {
        setUser(prevUser => ({
          ...prevUser,
          nombre: response.data.nombre,
          apellido: response.data.apellido,
        }));
      })
      .catch(error => {
        console.error('Error al obtener los datos del usuario:', error);
      });
  }, [username]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const toggleEditMode = () => {
    setIsEditMode(prevEditMode => !prevEditMode);
  };

  const saveChanges = () => {
    if (user.password !== user.passwordConfirmation) {
      alert('Las contraseñas no coinciden. Por favor, vuelva a intentarlo.');
      return;
    }

    axios.put(`https://api.reciclarg.cloud/users/${username}`, user)
      .then(response => {
        setUser(prevUser => ({
          ...prevUser,
          nombre: response.data.nombre,
          apellido: response.data.apellido,
        }));
        setIsEditMode(false);
        window.location.reload();
      })
      .catch(error => {
        console.error('Error al guardar los cambios:', error);
        alert('Ocurrió un error al guardar los cambios. Por favor, intenta nuevamente.');
      });
  };

  return (
    <div className="mx-auto w-full max-w-lg py-10 p-2n">
      <h2 className="text-center text-2xl font-bold mb-4 py-5">{isEditMode ? 'Modificar Datos' : 'Perfil de Usuario'}</h2>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Nombre:</label>
        {isEditMode ? (
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="nombre"
            value={user.nombre}
            onChange={handleInputChange}
          />
        ) : (
          <span className="block bg-gray-100 rounded py-2 px-3 text-gray-700">{user.nombre}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Apellido:</label>
        {isEditMode ? (
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="apellido"
            value={user.apellido}
            onChange={handleInputChange}
          />
        ) : (
          <span className="block bg-gray-100 rounded py-2 px-3 text-gray-700">{user.apellido}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Email:</label>
        {isEditMode ? (
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
        ) : (
          <span className="block bg-gray-100 rounded py-2 px-3 text-gray-700">{user.email}</span>
        )}
      </div>
      {isEditMode && (
        <>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Contraseña:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Confirmar contraseña:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              name="passwordConfirmation"
              value={user.passwordConfirmation}
              onChange={handleInputChange}
            />
          </div>
        </>
      )}
      <div className="flex justify-center">
        <button
          className="bg-green-600 text-amber-100 hover:bg-amber-100 hover:text-green-600 font-bold py-2 px-4 rounded mr-4 focus:outline-none focus:shadow-outline"
          onClick={toggleEditMode}
        >
          {isEditMode ? 'Cancelar' : 'Editar'}
        </button>
        {isEditMode && (
          <button
            className="bg-green-600 text-amber-100 hover:bg-amber-100 hover:text-green-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={saveChanges}
          >
            Guardar
          </button>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
