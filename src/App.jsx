import { ConnectWallet } from "@thirdweb-dev/react";
import RewardWeb3 from "./components/RewardWeb3";
import Web3Tokens from "./components/Web3Tokens.jsx";
import Stake from "./components/Stake";
import ClaimReward from "./components/ClaimReward";
import StakeInfo from "./components/StakeInfo";

function App() {
  return (
    <>
      <div className="bg-[#14162c] min-h-screen p-8">
        <div className="flex justify-between">
          <h1 className="md:text-6xl text-2xl text-[#f43550] font-bold">
            Defi <span className="text-[#5d97a8]">Staking</span> App
          </h1>
          <ConnectWallet />
        </div>
        <hr className="my-4" />
        <div className="md:flex md:gap-10">
          <RewardWeb3 />
          <Web3Tokens />
        </div>
        <StakeInfo />
        <div className="flex gap-10">
          <Stake />
          <ClaimReward />
        </div>
      </div>
    </>
  );
}

export default App;
