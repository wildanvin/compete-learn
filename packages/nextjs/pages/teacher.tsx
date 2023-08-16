//import Link from "next/link";
import type { NextPage } from "next";
import { ApproveERC20 } from "~~/components/ApproveERC20";
import { ApproveNFT } from "~~/components/ApproveNFT";
import { ApproveSBT } from "~~/components/ApproveSBT";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <ApproveERC20 />
        <ApproveNFT />
        <ApproveSBT />
      </div>
    </>
  );
};

export default Home;
