import { ConnectWallet } from "@thirdweb-dev/react";
import RewardWeb3 from "./components/RewardWeb3";
import Web3Token from "./components/Web3Token";
import Stake from "./components/Stake";

function App() {
  return (
    <>
      <div className="bg-[#14162c] h-screen">
        <h1 className="text-4xl text-[#f43550] font-bold">Defi Staking App</h1>
        <ConnectWallet />
        <RewardWeb3 />
        <Web3Token />
        <Stake />
      </div>
    </>
  );
}

export default App;
