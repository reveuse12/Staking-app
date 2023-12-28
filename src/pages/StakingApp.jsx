import Web3Tokens from "../components/Web3Tokens";
import StakeInfo from "../components/StakeInfo";
import Stakes from "../components/Stakes";
import { ConnectWallet } from "@thirdweb-dev/react";

const StakingApp = () => {
  return (
    <div id="container" className="min-h-screen p-8">
      <div className="flex justify-between">
        <h1 className="md:text-6xl text-2xl text-[#f43550] font-bold">
          Defi <span className="text-[#5d97a8]">Staking</span> App
        </h1>
        <ConnectWallet />
      </div>
      <hr className="my-4" />

      <Web3Tokens />

      <StakeInfo />

      <Stakes />
    </div>
  );
};

export default StakingApp;
