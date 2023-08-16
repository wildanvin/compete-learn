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
            <span className="block text-2xl mb-2">Módulo 0: Información General</span>
          </h1>

          <p className="text-center text-lg w-1/2">
            Antes de comenzar tu recorrido por los diferentes módulos del programa, es importante que te conozcas
            algunos aspectos generales que te ayudarán a vivir una experiencia de aprendizaje más placentera. Te
            invitamos a leer el siguiente Material:
          </p>

          <div className="p-4">
            <ol className="list-decimal pl-6">
              <li className="mb-2">Objetivos de aprendizaje</li>
              <li className="mb-2">Criterios de evaluación</li>
              <li className="mb-2">Estructura del curso</li>
              <li className="mb-2">Conceptos clave</li>
              <li className="mb-2">Sistema de recompensas </li>
              <li className="mb-2">Tutoriales para acceder a los premios</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
