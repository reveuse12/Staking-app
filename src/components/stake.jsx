import { Web3Button } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { useState } from "react";
import toast from "react-hot-toast";

const Stake = () => {
  const [stakeAmount, setStakeAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);

  return (
    <div className="text-center w-full mt-8 p-6 bg-gradient-to-br from-[#262a33] to-[#19202a] text-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-[#f43550] mb-4">
        Stake your Web3 Token
      </h2>

      <div className="bg-[#5d97a8] p-4 rounded-md mb-4">
        <input
          type="Number"
          placeholder="Enter Amount"
          value={stakeAmount}
          onChange={(e) => setStakeAmount(e.target.value)}
          className="p-3 mr-2 bg-gray-700 text-white rounded-md"
        />
        <Web3Button
          contractAddress={import.meta.env.VITE_STAKING_CONTRACT_ADDRESS}
          action={(contract) => {
            contract.call("stake", [ethers.utils.parseEther(stakeAmount)]);
            setStakeAmount(0);
          }}
          onSuccess={() => {
            toast("Staked Successfully");
          }}
          className="mt-2 bg-green-500 hover:text-white hover:bg-green-600 text-white py-2 px-4 rounded-md cursor-pointer"
        >
          Stake
        </Web3Button>
      </div>

      <div className="bg-[#5d97a8] p-4 rounded-md">
        <input
          type="Number"
          placeholder="Enter Amount"
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(e.target.value)}
          className="p-3 mr-2 bg-gray-700 text-white rounded-md"
        />
        <Web3Button
          contractAddress={import.meta.env.VITE_STAKING_CONTRACT_ADDRESS}
          action={(contract) => {
            contract.call("withdraw", [
              ethers.utils.parseEther(withdrawAmount),
            ]);
            setWithdrawAmount(0);
          }}
          className="mt-2 bg-red-500 hover:text-white hover:bg-red-600 text-white py-2 px-4 rounded-md cursor-pointer"
        >
          Withdraw
        </Web3Button>
      </div>
    </div>
  );
};

export default Stake;
