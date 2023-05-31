import React, { useState } from "react";
import eco from "../img/ecovidrio-bg-inv.jpg";

const Huella = () => {
  const [glass, setGlass] = useState("");
  const [plastic, setPlastic] = useState("");
  const [cardboard, setCardboard] = useState("");
  const [electricity, setElectricity] = useState("");
  const [water, setWater] = useState("");
  const [resultText, setResultText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const calculateCarbonFootprint = () => {
    if (glass === "" || plastic === "" || cardboard === "" || electricity === "" || water === "") {
      setResultText("Por favor, complete todos los campos antes de calcular.");
      return;
    }

    const carbonFootprint =
      parseFloat(glass) * 0.5 +
      parseFloat(plastic) * 1.2 +
      parseFloat(cardboard) * 0.8 +
      parseFloat(electricity) * 0.3 +
      parseFloat(water) * 0.2;

    let resultDescription = "";
    if (carbonFootprint <= 10) {
      resultDescription =
        "Tu huella de carbono es baja. Esto se debe a tus hábitos sostenibles de reciclaje y consumo responsable.";
    } else if (carbonFootprint <= 20) {
      resultDescription =
        "Tu huella de carbono es moderada. Puedes reducir aún más tu impacto adoptando prácticas de consumo más sostenibles.";
    } else {
      resultDescription =
        "Tu huella de carbono es alta. Esto se debe a un consumo excesivo y prácticas insostenibles. Es importante tomar medidas para reducir tu impacto ambiental.";
    }

    setResultText(resultDescription);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="content" style={{ backgroundImage: `url(${eco})` }}>
      <header className="text-teal-py-4 bg-teal-600 px-2">
        <div className="container mx-auto px-4 py-4 px-6 bg-green">
          <h1 className="text-amber-100 text-3xl font-bold text-center items-center items-center">
            Calculadora de Carbono
          </h1>
        </div>
      </header>
      <section>
        <div
          id="popupContainer"
          className={`fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 ${
            modalVisible ? "" : "false hidden"
          }`}
        >
          <div className="relative z-20 flex items-center overflow-hidden bg-white">
            <div className="container relative flex px-6 py-16 mx-auto">
              <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
                <span className="w-20 h-2 mb-12 bg-teal-600"></span>
                <h1 className="flex flex-col text-6xl font-black leading-none text-green-500 py-1 uppercase font-bebas-neue sm:text-8xl">
                  TU
                  <span className="text-5xl sm:text-7xl py-2 text-teal-600">TURNO</span>
                </h1>
                <p className="text-sm text-gray-700 sm:text-base">
                  Es hora de que puedas calcular tu huella de carbono y comprender cómo tus acciones
                  afectan al medio ambiente. Complete los siguientes campos para obtener su resultado.
                </p>
                <div className="relative flex flex-col mt-8">
                  <input
                    type="number"
                    placeholder="Vidrio (kg)"
                    className="mb-4 py-3 pl-4 border-b-2 border-teal-500 focus:border-teal-500"
                    value={glass}
                    onChange={(e) => setGlass(e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="Plástico (kg)"
                    className="mb-4 py-3 pl-4 border-b-2 border-teal-500 focus:border-teal-500"
                    value={plastic}
                    onChange={(e) => setPlastic(e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="Cartón (kg)"
                    className="mb-4 py-3 pl-4 border-b-2 border-teal-500 focus:border-teal-500"
                    value={cardboard}
                    onChange={(e) => setCardboard(e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="Electricidad (kWh)"
                    className="mb-4 py-3 pl-4 border-b-2 border-teal-500 focus:border-teal-500"
                    value={electricity}
                    onChange={(e) => setElectricity(e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="Agua (L)"
                    className="mb-4 py-3 pl-4 border-b-2 border-teal-500 focus:border-teal-500"
                    value={water}
                    onChange={(e) => setWater(e.target.value)}
                  />
                  <button
                    className="py-4 px-6 mb-4 bg-teal-500 text-white rounded-lg font-bold uppercase hover:bg-teal-600"
                    onClick={calculateCarbonFootprint}
                  >
                    Calcular
                  </button>
                  {resultText && (
                    <div className="text-center text-lg font-bold">
                      <p>{resultText}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="text-white bg-green px-2 py-2">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-amber-100 text-sm">
            &copy; 2023 Todos los derechos reservados. Tu Turno
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Huella;
