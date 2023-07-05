import React from "react";
import pies from "../img/pies.png"
function Ambiente() {
  return (
    <>
      <div className="bg-white overflow-hidden relative rounded-lg shadow-md p-3">
        <div className="lg:grid lg:grid-cols-2">
          <div className="p-8 lg:p-12">
            <h2 className="text-3xl font-extrabold text-teal-600 sm:text-4xl">
              <span className="block text-teal-600 text-xmx">
                Descubre tu impacto ambiental y toma acciones para reducirlo
              </span>
            </h2>
            <p className="text-xl mt-4 text-gray-500">
              Calcula tu Huella de Carbono y contribuye a un futuro sostenible.
              Nuestra calculadora te permite evaluar tu impacto ambiental,
              identificando las actividades que más contribuyen a tu huella
              personal.
            </p>
            <div className="mt-6 lg:mt-10">
              <button
                onClick={() => (window.location.href = "https://calculadora-carbono.climatehero.me/?source=GoogleKeywords&gclid=CjwKCAjw-b-kBhB-EiwA4fvKrN-Gr1GWM_7VlgviYnITcwsa2dzOReACE9ug-yIUaVz3TjmBzNZe0hoCVDAQAvD_BwE")}
                type="button"
                className="py-4 px-6 bg-amber-100 hover:bg-teal-600 focus:ring-indigo-500 hover:text-amber-100 focus:ring-offset-indigo-200 text-teal-600  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              >
                Calcula tu Huella de Carbono
              </button>
            </div>
          </div>
          <div className="hidden lg:block lg:relative lg:flex lg:items-center">
            <img
              src={pies}
              className="p-8 max-w-full h-auto"
              alt="Huella de Carbono"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Ambiente;
