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
            <span className="block text-2xl mb-2">Contenido</span>
            <span className="block text-2xl mb-2">Balance Skill Token: 150</span>
          </h1>
          <div className="p-3">
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <p>
                  Módulo 1:{" "}
                  <Link href="/module1" passHref className="link">
                    Lorem ipsum dolor sit amet
                  </Link>
                </p>
              </li>
              <li className="flex items-center space-x-2">
                <p>
                  Módulo 2:{" "}
                  <Link href="/module2" passHref className="link">
                    Consectetur adipiscing elit
                  </Link>
                </p>
              </li>
              <li className="flex items-center space-x-2">
                <p>
                  Módulo 3:{" "}
                  <Link href="/module3" passHref className="link">
                    Eu tincidunt tortor aliquam nulla
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
