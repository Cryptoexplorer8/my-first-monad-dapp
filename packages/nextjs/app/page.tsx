"use client";

//import Link from "next/link";
import type { NextPage } from "next";

//import { useAccount } from "wagmi";
//import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
//import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  //const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="grid grid-cols-12 gap-row-8 mx-5 my-5">
        <div className="col-span-6"> wallet connection status </div>
        <div className="col-span-6"> network </div>
        <div className="col-span-6">
          <input
            type="text"
            placeholder="Not connected"
            className="input input-error rounded-md w-fullw-full"
            disabled
          />{" "}
        </div>
        <div className="col-span-6">
          {" "}
          <input type="text" placeholder="no network" className="input input-error rounded-md w-full" disabled />
        </div>
        <div className="col-span-6">
          {" "}
          xxx.nad{" "}
          <input type="text" placeholder="address" className="input input-error rounded-md w-full" disabled />{" "}
        </div>
        <div className="col-span-6">
          {" "}
          monad name service{" "}
          <input type="text" placeholder="mns" className="input input-error rounded-md w-full" disabled />{" "}
        </div>
        <div className="col-span-6">
          {" "}
          Wallet balance{" "}
          <input type="text" placeholder="0 Mon" className="input 1input-error rounded-md w-full" disabled />{" "}
        </div>

        <div className="col-span-6">
          {" "}
          wallet nft count{" "}
          <input type="text" placeholder="0" className="input input-error rounded-md w-full" disabled />
        </div>
        <div className="col-span-6">
          {" "}
          Add Monad Network{" "}
          <input type="text" placeholder="network" className="input input-error rounded-md w-full" disabled />
        </div>
      </div>
    </>
  );
};

export default Home;
