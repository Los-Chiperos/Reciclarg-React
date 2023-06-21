
function Contenedor() {
    return (
      <section className="mb-32 text-gray-800 text-center">
        <br></br><br />
        <h2 className="text-3xl font-bold mb-20 text-green-700 ">Busca el contenedor adecuado</h2>
  
        <div className="grid lg:gap-x-12 lg:grid-cols-3">
          <div className="mb-12 lg:mb-0">
            <div className="rounded-lg shadow-lg  h-full block hover:bg-amber-100 hover:text-teal-600 hover:font-semibold focus hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center">
                <div className="p-4 animate-bounce bg-green-500 rounded-full shadow-lg inline-block -mt-8">
                  <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    {/* Aquí va el contenido del SVG */}
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h5 className="text-lg font-semibold mb-4 hover:font-bold">Contenedor Verde</h5>
                <p>
                  El contenedor verde, también conocido como iglú verde, es el destinado para depositar vidrio.
                </p>
                <button className="relative btn4 mt-12 px-10 py-7 border border-white uppercase font-semibold tracking-wider leading-none overflow-hidden" type="button">
                  <span className="absolute inset-x-0 h-3 bottom-0 bg-green-600"></span>
                  <a
  id="saber-mas"
  href="#Contenedores1"
>
  Saber Más
</a>
       
                </button>
              </div>
            </div>
          </div>
  
          <div className="mb-12 lg:mb-0">
          <div className="rounded-lg shadow-lg  h-full block hover:bg-amber-100 hover:text-teal-600 hover:font-semibold focus hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center">
                <div className="p-4 bg-amber-400 rounded-full shadow-lg inline-block -mt-8 animate-bounce">
                  <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    {/* Aquí va el contenido del SVG */}
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h5 className="text-lg font-semibold mb-4">Contenedor Amarillo</h5>
                <p>
                  El contenedor amarillo es el adecuado para reciclar plásticos, latas y envases.
                </p>
                <button className="relative btn4 mt-12 px-10 py-7 border border-white uppercase font-semibold tracking-wider leading-none overflow-hidden" type="button">
                  <span className="absolute inset-x-0 h-3 bottom-0 bg-green-600"></span>
                  <a
  id="saber-mas"
  href="#Contenedores1"
>
  Saber Más
</a>
       
                </button>
              </div>
            </div>
          </div>
  
          <div className="mb-12 lg:mb-0">
          <div className="rounded-lg shadow-lg  h-full block hover:bg-amber-100 hover:text-teal-600 hover:font-semibold focus hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center">
                <div className="p-4 bg-blue-600 animate-bounce rounded-full shadow-lg inline-block -mt-8">
                  <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    {/* Aquí va el contenido del SVG */}
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h5 className="text-lg font-semibold mb-4">Contenedor Azul</h5>
                <p>
                  El contenedor azul es el correspondiente para depositar papel y cartón.
                </p>
                <button className="relative btn4 mt-12 px-10 py-7 border border-white uppercase font-semibold tracking-wider leading-none overflow-hidden" type="button">
                  <span className="absolute inset-x-0 h-3 bottom-0 bg-green-600"></span>
                  <a
  id="saber-mas"
  href="#Contenedores1"
>
  Saber Más
</a>
       
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Contenedor;