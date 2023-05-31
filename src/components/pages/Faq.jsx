import React, { useState } from "react";

const Faq = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };

  const faqs = [
    {
      question: "¿Qué tipo de vidrio puedo reciclar?",
      answer: "Puedes reciclar botellas, frascos, envases y cualquier tipo de vidrio no laminado. El vidrio reciclado se utiliza para fabricar nuevos envases de vidrio, aislantes, materiales de construcción y más.",
    },
    {
      question: "¿Cómo debo preparar el cartón para reciclarlo?",
      answer: "Para reciclar cartón, debes quitar cualquier cinta adhesiva o etiqueta. Además, asegúrate de que el cartón esté limpio y seco. Puedes descomponer las cajas de cartón grandes y aplastarlas para ahorrar espacio en los contenedores de reciclaje.",
    },
    {
      question: "¿Qué tipo de plástico se puede reciclar?",
      answer: "Se pueden reciclar botellas de plástico, envases de alimentos, envoltorios de plástico y otros productos de plástico marcados con el símbolo de reciclaje. Sin embargo, evita reciclar plásticos laminados o contaminados con sustancias químicas.",
    },
    {
      question: "¿Qué hacer con los objetos de vidrio rotos?",
      answer: "Los objetos de vidrio rotos deben manejarse con cuidado. Colócalos en contenedor de Vidrio. No los mezcles con otros materiales reciclables. Siempre utiliza guantes o herramientas adecuadas al manipular vidrio roto.",
    },
    {
      question: "¿Cómo puedo encontrar contenedores de reciclaje cercanos?",
      answer: "Dentro de nuestra página, tienes un apartado en el cual encontrarás los contenedores más cercanos. Lo único que tienes que hacer es proporcionar tu ubicación actual y te mostrará el contenedor más cercano. También puedes consultar con tu municipio o autoridades locales para obtener información sobre los centros de reciclaje cercanos.",
    },
  ];

  return (
    <div className="w-full bg-gray-50 bg-cover" >
      {/* :TITLE & IMAGE */}
      <div className="my-8 mx-auto max-w-4xl flex flex-col items-center">
        <img src="/img/faq.png" alt="Frequently Asked Questions" className="w-full h-full" />
        <h2 className="text-center text-2xl sm:text-4xl text-teal-600 tracking-widest">Preguntas frecuentes</h2>
      </div>

      {/* :FAQ */}
      <dl className="mx-auto mb-10 p-2 max-w-4xl flex flex-col items-center">
        {/* ::Accordion Panel */}
        {faqs.map((faq, index) => (
          <div key={index}>
            {/* Question */}
            <div
              className={`w-full border-b-2 border-sky-600 text-teal-600 hover:bg-amber-100 hover:text-teal-600 ${
                openAccordion === index ? "bg-teal-600 text-amber-100" : ""
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="py-5 px-3 w-full flex justify-between items-center"
              >
                <span className="text-lg md:text-xl text-left font-semibold">{faq.question}</span>
                <svg
                  className={`flex-shrink-0 ml-2 w-7 h-7 text-sky-600 group-hover:text-white ${
                    openAccordion === index ? "transform rotate-180 text-white" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
            {/* Answer */}
            {openAccordion === index && (
              <div className="w-full text-base text-gray-500 px-4 pt-4 pb-2">{faq.answer}</div>
            )}
          </div>
        ))}
      </dl>
    </div>
  );
};

export default Faq;
