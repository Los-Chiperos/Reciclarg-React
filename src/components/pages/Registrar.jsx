
import React   from 'react';
import Service from '../../service/Service'
import { useNavigate } from 'react-router-dom';

  const service =  new Service();
  let zonas = {};
  zonas =  await service.getZonas('zona/listarzonas');
  function Registrar() {

  
   
   const [zonaId, setZona ] = React.useState();
   const [selectedFile, setSelectedFile] = React.useState();
   const navigate = useNavigate();

   const handleChange = (event) => {
    setZona(event.target.value);
  }
     const handleFile = (event) => {
    setSelectedFile(event.target.files[0]);
  }
  React.useEffect(() => {
    console.log("File has been set.")
  },[selectedFile]);




  return (
    
   
   <div className="py-6">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div className="hidden lg:block lg:w-1/2 bg-cover" 
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')"}}>

        </div>
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-4xl font-bold text-green-600 text-center">Registrarse</h2>
          <p className="text-x1 font-bold sm:text-green-700 text-center"></p>

          <div className="mt-4">
            <label className="block text-green-600 text-sm font-bold mb-2">Nombre</label>
            <input className="bg-amber-100 text-green-600 focus:outline-none focus:shadow-outline border border-green-600 rounded py-2 px-4 block w-full appearance-none" type="text" id='nombre'/>
          </div>
          <div className="mt-4">
            <label className="block text-green-600 text-sm font-bold mb-2">Apellido</label>
            <input className="bg-amber-100 text-green-600 focus:outline-none focus:shadow-outline border border-green-600 rounded py-2 px-4 block w-full appearance-none" 
            type="text" id='apellido'/>
          </div>
          <div className="mt-4">
            <label className="block text-green-600 text-sm font-bold mb-2">Nombre de Usuario</label>
            <input className="bg-amber-100 text-green-600 focus:outline-none focus:shadow-outline border border-green-600 rounded py-2 px-4 block w-full appearance-none" 
            type="text" id='username'/>
          </div>
          <div className="mt-4">

            
              <label className="block text-green-600 text-sm font-bold mb-2">Contraseña</label>
              <input className="bg-amber-100 text-green-600 focus:outline-none focus:shadow-outline border border-green-600 rounded py-2 px-4 block w-full appearance-none" 
            type="password" id='password'/>
              {/* <a href="#" className="text-xs text-text-green-600"></a> */}
           
            
            <br />

          </div>
          <div className="mt-4">
            <label className="block text-green-600 text-sm font-bold mb-2">Repetir contraseña</label>
            <input className="bg-amber-100 text-green-600 focus:outline-none focus:shadow-outline border border-green-600 rounded py-2 px-4 block w-full appearance-none" 
          type="password" id='repetirpassword'/>
            {/* <a href="#" className="text-xs text-green-600"></a> */}
          </div>
          
             <br />
          {/* agregar foto*/}
          <div className="mt-4">
            <label className="block text-green-600 text-sm font-bold mb-2">Seleccionar Foto de Perfil</label>
            {/* <a href="#" className="text-xs text-green-600"></a> */}
              <input className="bg-amber-100 text-green-600 focus:outline-none focus:shadow-outline border border-green-600 rounded py-2 px-4 block w-full appearance-none" 
            type="file" 
            id='foto'
            //  value={selectedFile}
            onChange={handleFile}
            accept="image/*"
            />
          </div>
        
            <br />
          {/* agregar zona */}
          <div className="mt-4">
            <label className="block text-green-600 text-sm font-bold mb-2">Seleccionar Zona</label>
            {/* <a href="#" className="text-xs text-green-600"></a> */}
              <select 
               className="bg-amber-100 text-green-600 focus:outline-none focus:shadow-outline border border-green-600 rounded py-2 px-4 block w-full appearance-none"
                value={zonaId} 
                id='zona'
                onChange={handleChange}>
                {zonas.map((zona) => (
                  // eslint-disable-next-line react/jsx-key
                  <option value={zona.id}>{zona.nombre}</option>
                ))}
              </select>
          </div>           
      
     
          
          <br />
           
          <div className="mt-4">
            <button className="bg-green-600 text-amber-100 font-bold py-2 transition-duration px-4 w-full rounded hover:bg-amber-100 hover:text-green-600"onClick={handleRegister}>Registrarse</button>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <a href="/Login" className="text-xs hover:font-semibold text-green-600 uppercase">¿Tienes cuenta? Logeate</a>
            <span className="border-b w-1/5 md:w-1/4"></span>

          </div>

        </div>
      </div>
    </div>
     
  );



  async function  handleRegister() {
  
  const nombre_1 = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const repetirpassword = document.getElementById('repetirpassword').value;
  const zonaId = document.getElementById('zona').value;
  
  if (password !== repetirpassword) {
    alert('Las contraseñas no coinciden');
    return;
  }
  let zona = zonas.find((zona) => zona.id == zonaId);
    let params = JSON.stringify({
      "id" : null,
      "nombre": nombre_1,
      "apellido": apellido,
      "username": username,
      "password": password,
      "baja": null,
      "alta": null,
      "enable": null,
      "token": null,
      "zona":zona,
      "fotoPerfi" : null
      
    });
  
    
    
    let response = await service.newUser('user/newuser',params, selectedFile);
    console.log(response);
    if(response.status == 200 && response.data =="Registro ok"){
      alert(response.data);
      navigate('/Login');
    }else{
      alert(response.data);
    }

  }
}

export default Registrar;
