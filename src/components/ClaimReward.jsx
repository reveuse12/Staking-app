import { useState } from "react";
import { Web3Button } from "@thirdweb-dev/react";

const ClaimReward = () => {
  const [claimRewards, setClaimRewards] = useState(0);

  return (
    <div className="mx-auto w-full text-center bg-gradient-to-br from-[#262a33] to-[#19202a] mt-8 rounded-lg p-6">
      <h2 className="text-3xl font-bold mb-4 text-[#f43550] ">
        Claim Your Web3 Rewards Tokens
      </h2>
      <div className="flex bg-[#5d97a8] p-4  rounded-lg shadow-md mb-4 items-center justify-center">
        <input
          type="Number"
          placeholder="Enter Amount"
          value={claimRewards}
          onChange={(e) => setClaimRewards(e.target.value)}
          className="p-3 mr-2 border text-white border-gray-300 rounded focus:outline-none focus:border-white bg-gray-700 "
        />
        <Web3Button
          contractAddress={import.meta.env.VITE_STAKING_CONTRACT_ADDRESS}
          action={(contract) => {
            contract.call("claimRewards");
            setClaimRewards(0);
          }}
          className="bg-pink-700 text-white p-2 rounded cursor-pointer hover:bg-pink-700 hover:text-white"
        >
          Claim
        </Web3Button>
      </div>
    </div>
  );
};

export default ClaimReward;
