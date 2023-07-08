import React, { useState, useEffect } from "react";

import Nicolas from "../img/nicolas.jpeg";
import David from "../img/david.jpeg";
import Cristian from "../img/cristian.png";
import Gonzalo from "../img/gonzalo.jpeg";
import Juan from "../img/juan.jpeg";
import Agustin from "../img/agustin.jpeg";
import Angelo from "../img/angelo.jpeg";
import Leonardo from "../img/leonardo.jpeg";
import Service from '../../service/Service'

const service =  new Service();

function ProfileCard({ member }) {
  const url = URL.createObjectURL(new Blob([member.fotoPerfil.photo]));

  return (
    <div className="card bg-amber-100  rounded-lg p-4 text-center w-64 h-85 mx-4" >
      <br />  
      <img
        id="myImage"
        src = {url}
        className="w-24 h-24 rounded-full transition duration-200 hover:scale-110 mx-auto"
      />

      <div className="text-gray-900 text-lg font-bold">{member.nombre} {member.apellido}</div>
      <div className="text-green-600 font-semibold">{member.role}</div>
      <div className="text-gray-600">
        {member.description}
      </div>
      <div className="flex items-center justify-center gap-3 mt-2 w-auto h-5 text-gray-600">
        <a href={member.twitter} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter fa-lg cursor-pointer transition duration-200 hover:text-green-600"></i>
        </a>
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin fa-lg cursor-pointer transition duration-200 hover:text-green-600"></i>
        </a>
        <a href={member.github} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-lg cursor-pointer transition duration-200 hover:text-green-600"></i>
        </a>
      </div>
    </div>
  );
}

function Nosotros() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const loadTeamMembers = async () => {
      const members = await service.getNosotros("nosotros/listNosotros");
      setTeamMembers(members);
    };

    loadTeamMembers();
  }, []);

  const halfLength = Math.ceil(teamMembers.length / 2); 

  const firstHalf = teamMembers.slice(0, halfLength);
  const secondHalf = teamMembers.slice(halfLength, teamMembers.length);

  return (
    <div className="flex flex-col min-h-screen"
      style={{
        backgroundImage:
        "url('https://www.ecovidrio.es/sites/default/files/2019-10/background-home-1.png')",
      }}>
      <main className="flex-grow">
        <div className="container mx-auto py-8 bg-cover">
          <div className="container flex justify-center mx-auto pt-16">
            <div>
              <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">¿Quienes Somos?</h1>
              <p className="text-gray-500 text-lg text-center font-normal pb-3">
                Somos un grupo de estudiantes de programación de la Facultad Tecnologica de San Rafael, el cual somos 8 integrantes de diferentes provincias. Actualmente estamos presentando este proyecto para proponer un cambio en la sociedad el cual deberia generar un impacto significativo en el medioambiente. Procuramos con esto realizar un cambio que impacte en la comunidad de la localidad de San Rafael y a su vez que también sea escalable para todo el país.
              </p>
              <br />
              <br></br>
              <br />
            </div>
          </div>
          <div className="flex items-center justify-center flex-wrap gap-2 px-12 mb-4">
            {firstHalf.map((member, index) => (
              <ProfileCard key={index} member={member} />
            ))}
          </div>
          <div className="flex items-center justify-center flex-wrap gap-2 px-12">
            {secondHalf.map((member, index) => (
              <ProfileCard key={index} member={member} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Nosotros;
