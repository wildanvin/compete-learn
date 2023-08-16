import Link from "next/link";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5 flex flex-col justify-center items-center">
          <h1 className="text-center mb-8">
            <span className="block text-5xl font-bold">Contenido</span>
            <span className="block text-2xl mb-2"></span>
          </h1>
          <div className="p-3">
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <p className="text-2xl">
                  <b>Módulo 0:</b>{" "}
                  <Link href="/module0" passHref className="link">
                    INFORMACIÓN GENERAL
                  </Link>
                </p>
              </li>
              <li className="flex items-center space-x-2">
                <p className="text-2xl">
                  <b>Módulo 1:</b>{" "}
                  <Link href="/module1" passHref className="link">
                    BÚSQUEDA Y GESTIÓN DE INFORMACIÓN Y DATOS
                  </Link>
                </p>
              </li>
              <li className="flex items-center space-x-2">
                <p className="text-2xl">
                  <b>Módulo 2:</b>{" "}
                  <Link href="/module2" passHref className="link">
                    COMUNICACIÓN Y COLABORACIÓN
                  </Link>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
