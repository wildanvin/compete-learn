//import Link from "next/link";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5 flex flex-col justify-center items-center">
          <h1 className="text-left mb-8">
            <span className="block text-2xl mb-2 font-bold">Módulo 2: Comunicación y Colaboración </span>
          </h1>
          <p className="text-left text-lg w-1/2">
            ¡Felicidades! Has avanzado al segundo módulo del programa. En este punto ya has aprendido a buscar, evaluar
            y gestionar eficientemente la información y los datos que manejas a diario en tu práctica educativa.
          </p>
          <p className="text-left text-lg w-1/2">
            Ahora, ¿Cómo comunicas y compartes esta información y datos? ¿De qué manera participas y colaboras con otras
            personas a través de distintos medios digitales y en diferentes entornos virtuales? Veamos las competencias
            asociadas a esta área que nos propone <b>DigComp 2.0</b>:
          </p>

          <div className="p-4 text-left text-lg w-1/2">
            <ul className="pl-6">
              <li className="mb-2">2.1 Interactuar a través de tecnologías digitales.</li>
              <li className="mb-2">2.2 Compartir a través de tecnologías digitales.</li>
              <li className="mb-2">2.3 Participación ciudadana a través de las tecnologías digitales.</li>
              <li className="mb-2">2.4 Colaboración a través de las tecnologías digitales.</li>
            </ul>
          </div>
          <p className="text-left text-lg w-1/2">
            Visualiza el siguiente video donde se explica cada área de competencia y procede cumplir los desafíos de
            este módulo. ¡Sigue adelante!
          </p>
          <br />
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ch_tO1ddjn4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <br />
          <br />
          <p>
            Si participas en las actividades y tu profesor lo aprueba, puedes reclamar tokens y el NFT de este módulo
          </p>
          <button className="m-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring focus:ring-blue-300">
            Reclamar LEARN
          </button>
          <button className="m-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring focus:ring-blue-300">
            Reclamar NFT del Módulo 2
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
