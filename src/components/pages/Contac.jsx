import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import contact from "../img/contact.jpg";

function Contact() {
  const [email, setEmail] = useState("");
//
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateEmail(email)) {
      toast.success('La consulta fue enviada!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setEmail("");
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    } else {
      toast.error('Por favor, introduzca un correo electrónico válido.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center h-screen p-5">
      <div className="w-full sm:w-2/5 text-flex justify-center items-center sm:block hidden">
        <img src={contact} alt="imagen" className="object-cover" />
      </div>
      <div className="w-full sm:w-3/5 bg-white rounded-lg shadow-md p-5 mt-5 sm:mt-0 sm:ml-5">
        <h1 className="text-4xl font-bold text-green-600">
          Contactanos
          <br />
          <br />
        </h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Ingrese su nombre" className="bg-amber-100 text-green-600 font-semibold w-full text-xm px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm " />

          <input type="text" placeholder="Ingrese su apellido" className="w-full text-xm px-3 h-8 my-2 outline-none rounded-md border bg-amber-100 text-green-600 font-semibold " />

          <input 
            type="text" 
            placeholder="Ingrese su mail" 
            className="w-full text-xm px-3 h-8 my-2 outline-none rounded-md border bg-amber-100 text-green-600 font-semibold"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />

          <textarea placeholder="Ingresa tu consulta" className="w-full text-x px-3 py-2 h-20 my-2 outline-none rounded-md border focus:shadow-sm resize-none bg-amber-100 text-green-600 font-semibold" />
          
          <input type="submit" value="Enviar" className="  w-3/12 text-center bg-green-600 px-4 py-2 rounded-md text-amber-100  cursor-pointer hover:shadow-md hover:bg-amber-100 hover:text-green-600 " />
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
