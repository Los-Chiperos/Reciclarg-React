import React, { useEffect, useState } from 'react';
import Service from '../../service/Service'
import { useNavigate } from 'react-router-dom';

function Registrar() {

  const service =  new Service();
  const [zonas, setZonas] = useState([]);
  const [zonaId, setZona ] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchZonas();
  },[]);

  const fetchZonas = async () => {
    const response = await service.getZonas('zona/listarzonas');
    setZonas(response);
  }

  const handleChange = (event) => {
    setZona(event.target.value);
  }

  const handleFile = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  useEffect(() => {
    console.log("File has been set.")
  },[selectedFile]);

  async function handleRegister() {
    let zona = zonas.find((zona) => zona.id == zonaId);
    let params = JSON.stringify({
      "id" : null,
      "nombre": nombre,
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

  return (
    <div>
      <input type="text" onChange={e => setNombre(e.target.value)} placeholder="Nombre" />
      <input type="text" onChange={e => setApellido(e.target.value)} placeholder="Apellido" />
      <input type="text" onChange={e => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <select value={zonaId} onChange={handleChange}>
        {zonas.map((zona) => (
          <option key={zona.id} value={zona.id}>
            {zona.nombre}
          </option>
        ))}
      </select>
      <input type="file" onChange={handleFile} />
      <button onClick={handleRegister}>Registrar</button>
    </div>
  );
}

export default Registrar;
