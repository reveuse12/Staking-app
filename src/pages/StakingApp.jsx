import Web3Tokens from "../components/Web3Tokens";
import StakeInfo from "../components/StakeInfo";
import Stakes from "../components/Stakes";
import { ConnectWallet } from "@thirdweb-dev/react";

const StakingApp = () => {
  return (
    <div id="container" className="min-h-screen p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="md:text-6xl text-2xl text-pink-500 font-bold">
          Defi{" "}
          <span className="text-slate-600 underline decoration-sky-500">
            Staking
          </span>
        </h1>
        <ConnectWallet className="text-white bg-purple-700 px-4 py-2 rounded cursor-pointer hover:bg-purple-800 transition duration-300" />
      </div>
      <hr className="my-4" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-slate-600 underline decoration-pink-500">
            Tokens
          </h2>
          <Web3Tokens />
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-slate-600 underline decoration-pink-500">
            Staking Information
          </h2>
          <StakeInfo />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4 text-slate-600 underline decoration-pink-500">
          Stake
        </h2>
        <Stakes />
      </div>
    </div>
  );
};

export default StakingApp;
