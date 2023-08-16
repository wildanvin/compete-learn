//import Link from "next/link";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5 flex flex-col justify-center items-center">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Módulo 1: Búsqueda y gestión de infonrmación de datos</span>
          </h1>
          <p className="text-center text-lg w-1/2">
            Como docentes, nos relacionamos constantemente con una gran cantidad de información y datos, de allí la
            importancia de interactuar correctamente con estos mediante una búsqueda correcta y el necesario filtrado o
            curación del contenido, a fin de acceder a fuentes confiables tanto para nosotros como para nuestros
            estudiantes.
          </p>
          <p className="text-center text-lg w-1/2">
            De acuerdo con el Marco de Competencia Digital para la Ciudadanía 2.0 (DigComp 2.0), la{" "}
            <b>Búsqueda y Gestión de Información y Datos</b>, como área de competencia digital, contempla las siguientes
            competencias:
          </p>

          <div className="p-4 text-center text-lg w-1/2">
            <ul className="pl-6">
              <li className="mb-2">1.1 Navegar, buscar y filtrar datosinformación y contenidos digitales.</li>
              <li className="mb-2">1.2 Evaluar datos, información y contenidos digitales.</li>
              <li className="mb-2">1.3 Gestión de datos, información y contenidos digitales.</li>
            </ul>
          </div>

          <p className="text-center text-lg w-1/2">
            En el siguiente video te explicamos, detalladamente, de qué trata cada una. Después de visualizarlo, podrás
            cumplir con tu primer desafío. ¡Éxitos!
          </p>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/KciQsOHLA8U"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <br />
          <br />
          <p>
            Si participas en las actividades y tu profesor lo aprueba, puedes reclamar tokens y el NFT de este módulo
          </p>

          <button className="m-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring focus:ring-blue-300">
            Reclamar SKT
          </button>
          <button className="m-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring focus:ring-blue-300">
            Reclamar NFT del Módulo 1
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
