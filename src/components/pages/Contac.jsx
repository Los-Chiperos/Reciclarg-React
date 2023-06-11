function Contac (){
    return (
      <div className="flex h-screen w-full grid place-items-center bg-slate-100 w-9/10 mx-auto">
        <div className="bg-white rounded-md shadow-md flex flex-row">
          {/* Contact information form */}
          <div className="flex bg-green-700 p-10 hover:bg-green-800 rounded-md transition md:block" id="contact_info">
            <div className="flex justify-between">
              <h2 className="text-white text-xl">Contact Information</h2>
              <h2 className="text-white text-xs flex flex-row md:hidden block cursor-pointer" id="swtich_to_contact_us">
                Contact Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </h2>
            </div>
            <div className="mt-6 flex flex-row">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-200 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h2 className="text-slate-200 text-xs b">Name :</h2>
                <p className="text-white text-xs">David Warner</p>
              </div>
            </div>
            {/* More contact information */}
            {/* ... */}
          </div>
          {/* Get in touch form */}
          <div className="px-6 py-8" id="contact_us">
            <div className="flex justify-between">
              <h2 className="text-blue-800 text-xl">Get In Touch</h2>
              <h2 className="text-red-800 text-xs flex flex-row md:hidden block cursor-pointer" id="swtich_to_contact_info">
                Contact Info
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </h2>
            </div>
            <input type="text" placeholder="Ingrese su nombre" className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm bg-white" /><br />
            <input type="text" placeholder="Ingrese su apellido" className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm bg-white" /><br />
            <input type="text" placeholder="Ingrese su mail" className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm bg-white" /><br />
            <input type="text" placeholder="Subject" className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm bg-white" /><br />
            <textarea placeholder="Ingresa tu consulta" className="bg-white w-full text-xs px-3 py-2 h-20 my-2 outline-none rounded-md border focus:shadow-sm resize-none " /><br />
            <input type="submit" value="Send" className="text-center bg-green-700 px-4 py-2 rounded-md text-white text-xs cursor-pointer hover:shadow-md hover:bg-green-800" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Contac;