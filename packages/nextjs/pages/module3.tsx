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
            <span className="block text-2xl mb-2">Módulo 3: Lorem ipsum dolor sit amet</span>
          </h1>
          <p className="text-center text-lg w-1/2">
            Turpis cursus in hac habitasse platea dictumst quisque. Eu non diam phasellus vestibulum lorem sed risus
            ultricies tristique. Et ultrices neque ornare aenean euismod elementum nisi quis.
          </p>
          <p className="text-center text-lg w-1/2">
            Turpis cursus in hac habitasse platea dictumst quisque. Eu non diam phasellus vestibulum lorem sed risus
            ultricies tristique. Et ultrices neque ornare aenean euismod elementum nisi quis.
          </p>
          <p className="text-center text-lg w-1/2">
            Turpis cursus in hac habitasse platea dictumst quisque. Eu non diam phasellus vestibulum lorem sed risus
            ultricies tristique. Et ultrices neque ornare aenean euismod elementum nisi quis.
          </p>
          <button className="m-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring focus:ring-blue-300">
            Reclamar SKT
          </button>
          <button className="m-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring focus:ring-blue-300">
            Reclamar NFT del Módulo 3
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;