import Footer from "../layout/Footer";
import Heder from "../layout/Heder";

function Nosotros() {
  return (
<>
      <div>
      <div
        className="container mx-auto py-8 h-screen background-image bg-cover"
        style={{
          backgroundImage:
            "url('https://www.ecovidrio.es/sites/default/files/2019-10/background-home-1.png')",
        }}
      >
        <div className="flex flex-col text-center gap-4 mb-8 p-4 ">
          <div className="text-green-600  text-3xl md:text-4xl font-bold">
            Somos alumnos de la cohorte 2022 de la tecnicatura en programcion
          </div>
          <div className="text-gray-600 md:text-lg">
            de distintas partes del pais unidos por la pasion hacia la
            tecnologia
          </div>
        </div>

        <div className="flex items-center justify-center sm:grid-cols-4 md:grid-cols-2 flex-wrap gap-2 px-12">
          <div className="card bg-amber-100">
            <img
              src="./pofile.jpeg"
              className="w-24 h-24  rounded-full object-cover transition duration-200 hover:scale-110"
            />
            <div className="text-gray-900 text-lg font-bold">
              Nicolas Zelarayan
            </div>
            <div className="text-green-600 font-semibold">DevOps Engineer</div>
            <div className="text-gray-600" style={{ textAlign: "center" }}>
              Cloud Architect Designing Scalable and Resilient Solutions.
            </div>
            <div className="flex items-center justify-center gap-3 mt-2 w-auto h-5 text-gray-600">
              <i className="fa-brands fa-twitter fa-lg cursor-pointer transition duration-200 hover:text-green-600"></i>
              <i className="fa-brands fa-linkedin fa-lg cursor-pointer transition duration-200 hover:text-green-600"></i>
              <i className="fa-brands fa-github fa-lg cursor-pointer transition duration-200 hover:text-green-600"></i>
            </div>
          </div>

          {/* Repite el código anterior para cada miembro del equipo */}
          
        </div>
      </div>
    </div>
        </>
  );
}

export default Nosotros;
