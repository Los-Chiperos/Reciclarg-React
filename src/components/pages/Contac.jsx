import contact from "../img/contact.jpg";

function Contact() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center h-screen p-5">
    <div className="w-full sm:w-2/5 flex justify-center items-center sm:block hidden">
      <img src={contact} alt="imagen" className="object-cover" />
    </div>
    <h1 className="text-4xl font-bold text-green-600">
      Contactanos
    </h1>
    <form className="w-full sm:w-3/5 bg-white rounded-lg shadow-md p-5 mt-5 sm:mt-0 sm:ml-5">
      <input type="text" placeholder="Ingrese su nombre" className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm bg-white" />
      <input type="text" placeholder="Ingrese su apellido" className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm bg-white" />
      <input type="text" placeholder="Ingrese su mail" className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm bg-white" />

      <textarea placeholder="Ingresa tu consulta" className="bg-white w-full text-xs px-3 py-2 h-20 my-2 outline-none rounded-md border focus:shadow-sm resize-none " />
      <input type="submit" value="Enviar" className="text-center bg-green-700 px-4 py-2 rounded-md text-white text-xs cursor-pointer hover:shadow-md hover:bg-green-800" />
    </form>
  </div>
);
};

export default Contact;

