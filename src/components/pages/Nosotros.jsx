import React from "react";

import Nicolas from "../img/nicolas.jpeg";
import David from "../img/david.jpeg";
import Cristian from "../img/cristian.png";
import Gonzalo from "../img/gonzalo.jpeg";
import Juan from "../img/juan.jpeg";
import Agustin from "../img/agustin.jpeg";
import Angelo from "../img/angelo.jpeg";
import Leonardo from "../img/leonardo.jpeg";
import Service from '../../service/Service'



const teamMembers_ = [
  {
    name: "Cristian Alderete",
    role: "Técnico en Programción",
    description: "Backend Developer Api Rest  MySQL JAVA C# Angular",
    imgSrc: Cristian,
    twitterUrl: "https://twitter.com/cristian",
    linkedinUrl: "https://www.linkedin.com/in/calderete/",
    githubUrl: "https://github.com/catastones",
  },
  {
    name: "Gonzalo Araya",
    role: "Técnico en Programción",
    description: "Fullstack Developer React Nodejs MongoDB",
    imgSrc: Gonzalo,
    twitterUrl: "https://twitter.com/cristian",
    linkedinUrl: "https://www.linkedin.com/in/gonzalo-araya-416a6520b/",
    githubUrl: "https://github.com/gonzalo991",
  },
  {
    name: "Juan Schallmoser",
    role: "Técnico en Programción",
    description: "FullStack Developer UX-UI React HTML CSS",
    imgSrc: Juan,
    twitterUrl: "https://twitter.com/SchallmoserJuan",
    linkedinUrl: "https://www.linkedin.com/in/juanschallmoser/",
    githubUrl: "https://github.com/SchallmoserJuan",
  },
  {
    name: "Agustin Gomez Aranda",
    role: "Técnico en Programción",
    description: "Frontend Developer React Html CSS JavaScript",
    imgSrc: Agustin,
    twitterUrl: "https://twitter.com/cristian",
    linkedinUrl: "https://www.linkedin.com/in/agustin-gomez-aranda/",
    githubUrl: "https://github.com/Chelito2014",
  },
  {
    name: "Nicolas Zelarayan",
    role: "Técnico en Programción",
    description: "DevOps especializado en infraestructura cloud",
    imgSrc: Nicolas,
    twitterUrl: "https://twitter.com/zelarayanFN?t=oaYtXi2vCvVboZCf51hahQ&s=09",
    linkedinUrl: "https://www.linkedin.com/in/fernando-nicolas-zelarayan/",
    githubUrl: "https://github.com/NicolasZelarayan",
  },
  {
    name: "David Mercado",
    role: "Técnico en Programción",
    description: "Frontend Developer React Html JavaScript",
    imgSrc: David,
    twitterUrl: "https://twitter.com/DeividMercad2?t=D3KzeA3BNF1L29VZQFY8Kg&s=08",
    linkedinUrl: "https://www.linkedin.com/in/david-mercado-510721176/",
    githubUrl: "https://github.com/dav1dM3rcado",
  },
  {
    name: "Angelo Pertus",
    role: "Técnico en Programción",
    description: "WEB Developer React Nodejs MongoDB",
    imgSrc: Angelo,
    twitterUrl: "https://twitter.com/",
    linkedinUrl: "https://www.linkedin.com/in/angelo-pertus-234795201/",
    githubUrl: "https://github.com/Angelopertus",
  },
  {
    name: "Leonardo Valdez",
    role: "Técnico en Programción",
    description: "SysAdmin especializado en desarrollo web",
    imgSrc: Leonardo,
    twitterUrl: "https://twitter.com/",
    linkedinUrl: "https://www.linkedin.com/in/leonardo-javier-valdez-19106326a/",
    githubUrl: "https://github.com/Leonardo-Valdez",
  },
  // Agrega el resto de los miembros del equipo aquí
  // ...
];
const service =  new Service();
const teamMembers = await service.getNosotros("nosotros/listNosotros");

function ProfileCard({ member }) {

 //var myBlob = new Blob([member.fotoPerfil.photo], { type: "image/jpg" });
// Obtener el url


//const url = URL.createObjectURL(new Blob([member.fotoPerfil.photo]));


  return (
    
    <div className="card bg-amber-100  rounded-lg p-4 text-center w-64 h-85 mx-4" >
    <br />  
      
      <img
        id="myImage"
        src = {member.foto}
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
        <div className="container mx-auto py-8 bg-cover" 
      
        >
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




