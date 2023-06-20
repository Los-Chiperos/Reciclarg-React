import React from 'react';
import background1 from '../img/background-4.png';
import background2 from '../img/background-5.jpeg';

function Contenedores() {
    return (

        <section className="bg-no-repeat bg-cover "  style={{ backgroundImage: `url(${background1}) ` }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-12 bg-center text-center bg-contain bg-no-repeat bg-cover text-green-600" 
                style={{ backgroundImage: {background2}}}>
                <br />A CONTINACIÓN, <br />EXPLORAREMOS LOS CONTENEDORES <br />DE RECICLAJE SEGÚN SU COLOR.<br /><br />
            </h2>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8lg:py-20">
                <div className="grid max-w-2xl mx-auto">
                    {/* Bloque para Contenedor Amarillo */}
                    <div className="flex animate-cascade">
                        {/* Bloque para contenedor número 1 */}
                        <div className="flex flex-col items-center mr-6">
                            <div className="w-px h-10 opacity-0 sm:h-full"></div>
                            <div>
                               
                            </div>
                            <div className="w-px h-full bg-white border-line"></div>
                        </div>
                        <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                            <div className="sm:mr-5">
                                <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full sm:w-24 sm:h-24">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash-x" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fbbf24" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 7h16" />
  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
  <path d="M10 12l4 4m0 -4l-4 4" />
</svg>
                                </div>
                            </div>
                            <div>
                                <p className="text-xl font-semibold sm:text-2xl text-green-600">Contenedor Amarillo</p>
                                <p className="text-gray-700 text-1xl">
                                    El contenedor amarillo es para reciclar plásticos, latas y envases. Se deben depositar botellas de plástico, envases de alimentos, bolsas, briks de leche y latas de conserva y refrescos. Reciclar en el contenedor amarillo contribuye a reducir residuos y proteger el medio ambiente. <br /><br />
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex animate-cascade">
                        {/* Bloque para contenedor número 1 */}
                        <div className="flex flex-col items-center mr-6">
                            <div className="w-px h-10 opacity-0 sm:h-full"></div>
                            <div>
                               
                            </div>
                            <div className="w-px h-full bg-white border-line"></div>
                        </div>
                        <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                            <div className="sm:mr-5">
                                <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full sm:w-24 sm:h-24">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash-x" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1d4ed8" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 7h16" />
  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
  <path d="M10 12l4 4m0 -4l-4 4" />
</svg>
                                </div>
                            </div>
                            <div>
                                <p className="text-xl font-semibold sm:text-2xl text-green-600">Contenedor Azul</p>
                                <p className="text-gray-700 text-1xl">
                                El contenedor azul es utilizado para recoger papel y cartón. En este contenedor se deben depositar periódicos, revistas, cajas de cartón, cartulinas, folletos y todo tipo de papel. Sin embargo, no se deben introducir papel sucio o contaminado, como pañuelos usados o papel de cocina. <br /><br />
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex animate-cascade">
                        {/* Bloque para contenedor número 1 */}
                        <div className="flex flex-col items-center mr-6">
                            <div className="w-px h-10 opacity-0 sm:h-full"></div>
                            <div>
                               
                            </div>
                            <div className="w-px h-full bg-white border-line"></div>
                        </div>
                        <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                            <div className="sm:mr-5">
                                <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full sm:w-24 sm:h-24">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash-x" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#22c55e" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 7h16" />
  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
  <path d="M10 12l4 4m0 -4l-4 4" />
</svg>
                                </div>
                            </div>
                            <div>
                                <p className="text-xl font-semibold sm:text-2xl text-green-600">Contenedor Verde</p>
                                <p className="text-gray-700 text-1xl">
                                El contenedor verde, también llamado iglú verde, se utiliza específicamente para depositar vidrio. En este contenedor se deben reciclar botellas de vidrio, tarros, espejos y cristales rotos. Sin embargo, no se deben depositar objetos de cerámica, porcelana, metales ni plásticos. <br /><br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contenedores;