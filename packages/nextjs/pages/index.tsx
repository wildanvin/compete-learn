//import Link from "next/link";
import type { NextPage } from "next";
//import { BugAntIcon, MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5 flex flex-col justify-center items-center">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Bienvenido a </span>
            <span className="block text-4xl font-bold">Compete Learn</span>
            <span className="block text-2xl mb-2">Desarrollo de competencias digitales</span>
          </h1>
          <div className="text-left text-lg w-full sm:w-1/2">
            <p>
              Te damos la bienvenida a CompeteLearn, nuestro programa educativo para la formación docente en el
              desarrollo de competencias digitales en cinco áreas fundamentales:{" "}
              <b>
                búsqueda y gestión de información y datos, comunicación y colaboración, creación de contenidos
                digitales, seguridad y resolución de problemas
              </b>
              .
            </p>
            <p>
              Este programa está especialmente diseñado para profesionales de la Educación o que se dediquen a la
              enseñanza en diferentes niveles y modalidades, a fin de que puedan integrar la tecnología en su práctica
              educativa y ofrecer a sus estudiantes interesantes experiencias de aprendizaje significativo.
            </p>
            <p>
              Para que tu recorrido por el programa sea más ameno y motivante, hemos creado un sistema de recompensas y
              premiaciones con insignias, tokens y NFT’s que podrás reclamar a medida que vayas avanzando en tu
              formación, cumpliendo los desafíos de cada módulo y, sobre todo, participando en las actividades síncronas
              (on line) que tendremos cada semana.
            </p>
            <p>
              Hemos distribuido el contenido en cinco (05) módulos, siendo la duración del programa de 10 semanas en las
              que deberás dedicar al menos 5 horas semanales para la revisión del material y el desarrollo de los
              desafíos de cada módulo. En total, dedicarás alrededor de 50 horas de formación.
            </p>
            <p>
              Al culminar los módulos, obtendrás insignias canjeables (Tokens) por premios especiales . Además, tu
              asistencia a las actividades síncronas será recompensada con un NFT y, al final de este emocionante
              recorrido, si realizas todas las actividades evaluadas de los cinco (5) módulos, recibirás un certificado
              respaldado con una de las tecnologías blockchain más novedosas y confiables, el Soulbound Token,
              garantizando la credibilidad del mismo y ofreciéndote una certificación digital de gran valor en el mundo
              laboral actual.
            </p>
            <p>
              Te invitamos a comenzar el programa de formación revisando la sección Información General, donde
              encontrarás los materiales del programa: objetivos de aprendizaje, criterios de evaluación, estructura del
              curso, conceptos clave, sistema de recompensa y tutoriales para puedas acceder a los premios.
            </p>
            <p>
              Nuestro deseo es que tengas una experiencia de aprendizaje dinámica, motivante y divertida. Porque, ¿Quién
              dijo que no podemos divertirnos mientras aprendemos?
            </p>
            <p className="text-center">¡Comencemos!</p>
          </div>
        </div>

        <br />
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring focus:ring-blue-300">
          Inscribirse
        </button>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        {/* <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-left items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Tinker with your smart contract using the{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contract
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-left items-center max-w-xs rounded-3xl">
              <SparklesIcon className="h-8 w-8 fill-secondary" />
              <p>
                Experiment with{" "}
                <Link href="/example-ui" passHref className="link">
                  Example UI
                </Link>{" "}
                to build your own UI.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-left items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Explore your local transactions with the{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Block Explorer
                </Link>{" "}
                tab.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Home;
