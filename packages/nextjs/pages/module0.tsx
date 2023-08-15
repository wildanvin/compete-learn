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
          <li>
            <ol>Objetivos de aprendizaje</ol>
            <ol>Criterios de evaluación</ol>
            <ol>Estructura del curso</ol>
            <ol>Conceptos clave</ol>
            <ol>Sistema de recompensas </ol>
            <ol>Tutoriales para acceder a los premios</ol>
          </li>
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
