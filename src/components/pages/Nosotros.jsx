import React from "react";
import profileImg from "../img/profile.png";

const teamMembers = [
  {
    name: "Nicolas Zelarayan",
    role: "DevOps Engineer",
    description: "Cloud Architect Designing Scalable and Resilient Solutions.",
    imgSrc: profileImg,
  },
  {
    name: "Nicolas Zelarayan",
    role: "DevOps Engineer",
    description: "Cloud Architect Designing Scalable and Resilient Solutions.",
    imgSrc: profileImg,
  },
  {
    name: "Nicolas Zelarayan",
    role: "DevOps Engineer",
    description: "Cloud Architect Designing Scalable and Resilient Solutions.",
    imgSrc: profileImg,
  },
  {
    name: "Nicolas Zelarayan",
    role: "DevOps Engineer",
    description: "Cloud Architect Designing Scalable and Resilient Solutions.",
    imgSrc: profileImg,
  },
  {
    name: "Nicolas Zelarayan",
    role: "DevOps Engineer",
    description: "Cloud Architect Designing Scalable and Resilient Solutions.",
    imgSrc: profileImg,
  },
  {
    name: "Nicolas Zelarayan",
    role: "DevOps Engineer",
    description: "Cloud Architect Designing Scalable and Resilient Solutions.",
    imgSrc: profileImg,
  },
  {
    name: "Nicolas Zelarayan",
    role: "DevOps Engineer",
    description: "Cloud Architect Designing Scalable and Resilient Solutions.",
    imgSrc: profileImg,
  },
  {
    name: "Nicolas Zelarayan",
    role: "DevOps Engineer",
    description: "Cloud Architect Designing Scalable and Resilient Solutions.",
    imgSrc: profileImg,
  },
  // Agrega el resto de los miembros del equipo aquí
  // ...
];

function ProfileCard({ member }) {
  return (
    <div className="card bg-amber-100 rounded-lg p-4 text-center w-64 h-85">  
      <img
        src={member.imgSrc}
        className="w-24 h-24 rounded-full transition duration-200 hover:scale-110 mx-auto" // Eliminamos object-cover, añadimos centrado horizontal
      />
      <div className="text-gray-900 text-lg font-bold">{member.name}</div>
      <div className="text-green-600 font-semibold">{member.role}</div>
      <div className="text-gray-600">
        {member.description}
      </div>
      <div className="flex items-center justify-center gap-3 mt-2 w-auto h-5 text-gray-600">
        <i className="fa-brands fa-twitter fa-lg cursor-pointer transition duration-200 hover:text-green-600"></i>
        <i className="fa-brands fa-linkedin fa-lg cursor-pointer transition duration-200 hover:text-green-600"></i>
        <i className="fa-brands fa-github fa-lg cursor-pointer transition duration-200 hover:text-green-600"></i>
      </div>
    </div>
  );
}

function Nosotros() {
  return (
    <div className="flex flex-col min-h-screen">
     
      <main className="flex-grow">
        <div className="container mx-auto py-8 bg-cover" 
          style={{
            backgroundImage:
            "url('https://www.ecovidrio.es/sites/default/files/2019-10/background-home-1.png')",
          }}
        >
          ...
          <div className="flex items-center justify-center flex-wrap gap-2 px-12">
            {teamMembers.map((member) => (
              <ProfileCard key={member.id} member={member} />  // Renderizamos una tarjeta de perfil para cada miembro del equipo
            ))}
          </div>
        </div>
      </main>

     
    </div>
  );
}

export default Nosotros;